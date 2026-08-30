# Matrafisc Dance — Marketing Website

A portfolio-first static website for Matrafisc Dance Company.

## Direction

The redesign intentionally moves away from the old WordPress navigation hierarchy and puts the repertoire first. The visual language keeps Matrafisc's existing deep indigo / white identity while introducing a more editorial, contemporary art direction.

## Included

- Responsive, mobile-first static site with no framework or build step.
- Artistic portfolio layout centred on Matrafisc's works.
- Interactive production panels for show synopsis, credits, format, touring context and media.
- Video support through privacy-enhanced YouTube embeds.
- Photo/video support through Instagram embeds and gallery-ready media areas.
- Current/recent repertoire including Bruise, 1+1=1, Periodo Blu, Soul's Paths, The World in My Body and October.
- Company background and international touring context.
- Contact and social links.
- Reduced-motion accessibility support, keyboard-operable production cards and responsive navigation.

## Run locally

No dependencies are required. Open `index.html` directly or serve the directory with any static server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Content / media notes

The first marketing version uses confirmed public Matrafisc material found on the current website, public programmes, the company's YouTube embed and recent Matrafisc Instagram posts. Older production galleries are represented by ready-to-fill gallery areas until the original high-resolution photography is supplied or migrated from the current WordPress media library.

For production use, the recommended next step is to add original high-resolution company photography to `assets/images/` rather than depending on third-party social embeds for the core visual experience.

## Deployment

The site is suitable for GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or a conventional web server. Point `matrafiscdance.com` to the chosen deployment once approved.
