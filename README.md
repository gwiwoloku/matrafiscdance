# Matrafisc Dance — Marketing Website

A modern, responsive, repertoire-first static website for Matrafisc Dance Company.

## Current direction

The redesign moves away from the old WordPress navigation hierarchy and presents productions, events and collaborations as one connected body of work. It keeps the company's deep indigo / white visual identity while using a cleaner contemporary editorial design.

## Included

- Responsive static website with no framework or build step.
- Matrafisc's actual supplied logo in `assets/branding/matrafisc-logo.png`.
- 16×16 and 32×32 favicon assets recovered from the current live site in `assets/favicons/`.
- Font Awesome iconography loaded from the CDN.
- 15-work repertoire with filtering.
- Interactive work detail dialogs containing synopsis, credits, photography/video support and work-specific enquiry links.
- Real Matrafisc archive photography for *That Place Over There* and existing public media embeds for selected works.
- Company, timeline, touring and collaboration sections.
- Contact form for work enquiries, touring/programming, collaborations, workshops/education, press/media and general enquiries.
- Clicking **Enquire about this work** automatically pre-fills the contact form with the correct work and a work-specific starter message.
- Mobile navigation, keyboard-friendly dialogs, reduced-motion support and responsive layouts.
- SEO/Open Graph metadata and PerformingGroup structured data.

## Contact-form behaviour

This is intentionally still a static website. There is no server-side mail service or API key in the repository.

When a visitor submits the contact form, `enhancements.js` validates the fields and opens the visitor's default email application with the subject and message already prepared for `matrafiscdance@gmail.com`. Nothing is sent until the visitor confirms it in their email application.

If direct in-browser form delivery is needed later, the form can be connected to Formspree, Netlify Forms, Web3Forms, a serverless function or another mail endpoint without redesigning the page.

## Manual editing

The codebase is deliberately simple so it can be edited directly in GitHub or in any text editor:

- `index.html` — page structure, repertoire list, contact fields and visible copy.
- `styles.css` — main design system and original responsive layout.
- `enhancements.css` — logo, Font Awesome and contact-form styling added in the final refinement pass.
- `script.js` — repertoire/work data, filters, work dialogs and media embeds.
- `enhancements.js` — contact prefill, email preparation and Font Awesome mobile-menu behaviour.
- `assets/branding/` — brand assets.
- `assets/favicons/` — browser icons.

### Adding or changing a work

1. Update the work object in `script.js`.
2. Update or add its row in the repertoire section of `index.html`.
3. If it should be selectable in a work enquiry, add/update the option in `#contact-work` in `index.html`.
4. Add any owned photography under an `assets/images/` folder and reference it from the work object.

## Run locally

No dependencies are required. Either open `index.html` directly or serve the folder with a simple static server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The project can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages or any conventional web server.

Some archive photography and production marks still load from the existing `matrafiscdance.com/wp-content/uploads/` URLs. Before retiring the old WordPress installation, copy those files into this repository (for example under `assets/images/archive/`) and update the references in `index.html` and `script.js`. This prevents historical media from disappearing when the old hosting is removed.
