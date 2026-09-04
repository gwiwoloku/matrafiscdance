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
- FormSubmit AJAX delivery with loading, success and error states plus a honeypot spam field.
- Mobile navigation, keyboard-friendly dialogs, reduced-motion support and responsive layouts.
- SEO/Open Graph metadata and PerformingGroup structured data.

## Contact-form behaviour

The website is static, but contact requests are now sent directly from the browser through FormSubmit to `matrafiscdance@gmail.com`.

No API key or FormSubmit account is stored in this repository. `enhancements.js` submits the form to:

```text
https://formsubmit.co/ajax/matrafiscdance@gmail.com
```

The form sends the visitor's name, email address, enquiry type, selected work when relevant, message, page URL and a dynamically generated email subject. Work-specific enquiry links continue to pre-fill the correct production before submission.

### One-time FormSubmit activation

FormSubmit requires the recipient email address to be confirmed the first time the form is used on the deployed website:

1. Deploy the website.
2. Submit one test enquiry from the contact form.
3. Check `matrafiscdance@gmail.com` for the FormSubmit activation email.
4. Click the activation/confirmation link in that email.
5. Submit another test enquiry and confirm it arrives normally.

Until the address is activated, the front end may accept the submission but FormSubmit will not operate as the final production mail route.

### Spam protection

A hidden `_honey` honeypot field is inserted by `enhancements.js`. Obvious bot submissions caught by this field are discarded before any request is made to FormSubmit. FormSubmit's own filtering remains available as well.

### Failure behaviour

If FormSubmit is unavailable or returns an error, the page keeps the visitor on the website and displays a direct `matrafiscdance@gmail.com` fallback link rather than losing their typed enquiry unexpectedly.

## Manual editing

The codebase is deliberately simple so it can be edited directly in GitHub or in any text editor:

- `index.html` — page structure, repertoire list, contact fields and visible copy.
- `styles.css` — main design system and original responsive layout.
- `enhancements.css` — logo, Font Awesome and contact-form styling added in the refinement pass.
- `script.js` — repertoire/work data, filters, work dialogs and media embeds.
- `enhancements.js` — FormSubmit delivery, contact prefill, submission states and Font Awesome mobile-menu behaviour.
- `assets/branding/` — brand assets.
- `assets/favicons/` — browser icons.

### Changing the contact recipient

If the receiving email address changes, update the `targetEmail` constant near the top of `enhancements.js`:

```js
const targetEmail = 'matrafiscdance@gmail.com';
```

The AJAX endpoint is generated automatically from that value.

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

FormSubmit activation and production delivery should be tested from the deployed site rather than relied on from a local `file://` page.

## Deployment

The project can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages or any conventional web server.

Some archive photography and production marks still load from the existing `matrafiscdance.com/wp-content/uploads/` URLs. Before retiring the old WordPress installation, copy those files into this repository (for example under `assets/images/archive/`) and update the references in `index.html` and `script.js`. This prevents historical media from disappearing when the old hosting is removed.
