#!/usr/bin/env python3
from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, urljoin
import json
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SITE = "https://matrafiscdance.com/"

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title_depth = 0
        self.title_text = []
        self.h1 = 0
        self.meta = []
        self.links = []
        self.sources = []
        self.canonicals = []
        self.hreflangs = {}
        self.jsonld_depth = 0
        self.jsonld = []

    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        tag = tag.lower()
        if tag == "title":
            self.title_depth += 1
        if tag == "h1":
            self.h1 += 1
        if tag == "meta":
            self.meta.append(d)
        if tag == "a" and d.get("href"):
            self.links.append(d["href"])
        if tag in {"img", "script", "iframe"} and d.get("src"):
            self.sources.append(d["src"])
        if tag == "link":
            rel = (d.get("rel") or "").lower()
            if rel == "canonical" and d.get("href"):
                self.canonicals.append(d["href"])
            if rel == "alternate" and d.get("hreflang") and d.get("href"):
                self.hreflangs[d["hreflang"]] = d["href"]
        if tag == "script" and d.get("type") == "application/ld+json":
            self.jsonld_depth += 1

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag == "title" and self.title_depth:
            self.title_depth -= 1
        if tag == "script" and self.jsonld_depth:
            self.jsonld_depth -= 1

    def handle_data(self, data):
        if self.title_depth:
            self.title_text.append(data)
        if self.jsonld_depth:
            self.jsonld.append(data)

def repo_file_for_url(current: Path, href: str) -> Path | None:
    if not href or href.startswith(("#", "mailto:", "tel:", "javascript:", "data:")):
        return None
    parsed = urlparse(href)
    if parsed.scheme in {"http", "https"}:
        if parsed.netloc not in {"matrafiscdance.com", "www.matrafiscdance.com"}:
            return None
        target_path = parsed.path
    else:
        current_url = "/" + str(current.relative_to(ROOT)).replace("\\", "/")
        if current.name == "index.html":
            current_url = current_url[:-len("index.html")]
        target_path = urlparse(urljoin("https://matrafiscdance.com" + current_url, href)).path

    target_path = target_path.lstrip("/")
    if not target_path:
        return ROOT / "index.html"
    if target_path.endswith("/"):
        target_path += "index.html"
    return ROOT / target_path

def has_noindex(parser: PageParser) -> bool:
    for meta in parser.meta:
        if meta.get("name", "").lower() == "robots" and "noindex" in meta.get("content", "").lower():
            return True
    return False

errors = []
warnings = []
pages = sorted(ROOT.rglob("*.html"))

for page in pages:
    text = page.read_text(encoding="utf-8")
    parser = PageParser()
    try:
        parser.feed(text)
    except Exception as exc:
        errors.append(f"{page.relative_to(ROOT)}: HTML parse failed: {exc}")
        continue

    rel = page.relative_to(ROOT)
    noindex = has_noindex(parser)

    if page.name != "404.html" and not noindex:
        title = "".join(parser.title_text).strip()
        if not title:
            errors.append(f"{rel}: missing title")
        if parser.h1 != 1:
            errors.append(f"{rel}: expected exactly 1 H1, found {parser.h1}")
        descriptions = [m.get("content", "") for m in parser.meta if m.get("name", "").lower() == "description"]
        if not descriptions or not descriptions[0].strip():
            errors.append(f"{rel}: missing meta description")
        if len(parser.canonicals) != 1:
            errors.append(f"{rel}: expected one canonical, found {len(parser.canonicals)}")
        elif not parser.canonicals[0].startswith(SITE):
            errors.append(f"{rel}: canonical is not on canonical host: {parser.canonicals[0]}")
        for lang in ("en", "it", "x-default"):
            if lang not in parser.hreflangs:
                errors.append(f"{rel}: missing hreflang={lang}")

    for raw in parser.jsonld:
        raw = raw.strip()
        if not raw:
            continue
        try:
            json.loads(raw)
        except Exception as exc:
            errors.append(f"{rel}: invalid JSON-LD: {exc}")

    for href in parser.links + parser.sources:
        target = repo_file_for_url(page, href)
        if target is None:
            continue
        if not target.exists():
            errors.append(f"{rel}: broken local reference {href} -> {target.relative_to(ROOT)}")

    if "ogunlusi.com" in text and 'rel="nofollow noopener"' not in text:
        errors.append(f"{rel}: Ogunlusi footer credit must be nofollow noopener")

for ext in ("*.html", "*.js", "*.css"):
    for p in ROOT.rglob(ext):
        t = p.read_text(encoding="utf-8")
        if "matrafiscdance.com/wp-content/uploads/" in t:
            errors.append(f"{p.relative_to(ROOT)}: legacy WordPress asset dependency remains")
        if p.suffix == ".html" and ("fonts.googleapis.com" in t or "fonts.gstatic.com" in t):
            errors.append(f"{p.relative_to(ROOT)}: Google Fonts dependency remains")
        if p.suffix == ".html" and "cdnjs.cloudflare.com/ajax/libs/font-awesome" in t:
            errors.append(f"{p.relative_to(ROOT)}: external Font Awesome dependency remains")

for required_vendor in (
    ROOT / "assets/vendor/fonts.css",
    ROOT / "assets/vendor/fontawesome/css/all.min.css",
    ROOT / "assets/vendor/fonts/inter-latin-400-normal.woff2",
    ROOT / "assets/vendor/fonts/space-grotesk-latin-500-normal.woff2",
):
    if not required_vendor.exists():
        errors.append(f"{required_vendor.relative_to(ROOT)}: required local vendor asset missing")

sitemap = ROOT / "sitemap.xml"
if not sitemap.exists():
    errors.append("sitemap.xml: missing")
else:
    try:
        root = ET.parse(sitemap).getroot()
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        urls = [node.text.strip() for node in root.findall("sm:url/sm:loc", ns) if node.text]
        if len(urls) < 40:
            errors.append(f"sitemap.xml: unexpectedly small ({len(urls)} URLs)")
        for url in urls:
            target = repo_file_for_url(ROOT / "index.html", url)
            if target is not None and not target.exists():
                errors.append(f"sitemap.xml: URL has no matching file: {url}")
    except Exception as exc:
        errors.append(f"sitemap.xml: XML parse failed: {exc}")

robots = ROOT / "robots.txt"
if not robots.exists() or "Sitemap: https://matrafiscdance.com/sitemap.xml" not in robots.read_text(encoding="utf-8"):
    errors.append("robots.txt: missing canonical sitemap declaration")

home = (ROOT / "index.html").read_text(encoding="utf-8")
it_home = (ROOT / "it/index.html").read_text(encoding="utf-8")
if home.count('class="repertoire-row reveal"') != 15:
    errors.append("index.html: expected 15 crawlable repertoire rows")
if it_home.count('class="repertoire-row reveal"') != 15:
    errors.append("it/index.html: expected 15 crawlable repertoire rows")

if errors:
    print("SEO validation failed:")
    for error in errors:
        print(" -", error)
    sys.exit(1)

print(f"SEO validation passed for {len(pages)} HTML pages.")
