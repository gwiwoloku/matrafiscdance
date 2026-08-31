# Matrafisc Dance — Marketing Website

A modern, repertoire-first static marketing website for Matrafisc Dance Company.

## Creative direction

The redesign keeps Matrafisc's established deep indigo / white identity but replaces the old WordPress hierarchy with a contemporary editorial experience built around the work itself.

Typography uses **Space Grotesk** for the display system and **Inter** for body copy. There is no decorative serif font.

## What is included

- Fully responsive static website with no framework or build step.
- Work-first homepage with real Matrafisc archive photography.
- Filterable repertoire covering productions, events, collaborations and recent work.
- 15 works represented in the current archive:
  - Bruise
  - Jobs
  - Soul's Paths
  - Periodo Blu
  - 1+1=1
  - Is Someone Listening?
  - Europia
  - That Place Over There
  - Study of Hands #2
  - Monkey & Leopard
  - Restlessness
  - Midsummer Night's Memory
  - Tightrope Walkers
  - October
  - The World in My Body
- Production detail experiences with synopsis, format, creators, archive credits and enquiry links.
- Picture gallery support for every show.
- YouTube, Vimeo and Instagram video/embed support.
- Original archive imagery surfaced for **That Place Over There**.
- Existing Matrafisc production marks/logos reused where available.
- Featured film treatment for Periodo Blu.
- Company positioning, artistic statement, repertoire timeline and international touring section.
- SEO metadata, Open Graph metadata and PerformingGroup structured data.
- Keyboard-accessible navigation/dialogs, reduced-motion support and mobile menu.

## Run locally

No dependencies are required.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Media migration note

The redesign currently references a small number of verified images and production marks from the existing `matrafiscdance.com/wp-content/uploads/` archive so the marketing build can use genuine company material immediately.

When replacing the old WordPress site on the live domain, **preserve the existing `/wp-content/uploads/` media paths** or copy those assets into this repository and update the URLs. This prevents broken archive photography when DNS/hosting changes.

The production detail system is already designed for multiple photographs and videos per show, so additional original high-resolution images can be added without redesigning the site.

## Deployment

The site can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages or any conventional static web server. Point `matrafiscdance.com` at the selected host only after preserving/migrating the existing WordPress media archive.
