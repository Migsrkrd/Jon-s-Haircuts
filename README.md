# Jon's Haircuts

Official website for Jon's Haircuts — a mobile barber who brings premium cuts to your home, office, or wherever you are.

## Pages

- **Home** — Hero, how it works, services, testimonials, and portfolio placeholders
- **About** — Jon's story, values, timeline, and service area
- **Book** — Calendar booking with date/time selection and client details form

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## CI/CD

GitHub Actions runs on every pull request and push to `main`:

- `npm ci`
- `npm run lint`
- `npm run build`

When changes are merged into `main`, the workflow also deploys the site to GitHub Pages.

**One-time setup:** In the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Live site: [https://migsrkrd.github.io/Jon-s-Haircuts/](https://migsrkrd.github.io/Jon-s-Haircuts/)

## Replacing placeholders

Image placeholders throughout the site are labeled with what photo to add. Swap them by replacing `ImagePlaceholder` components with `<img>` tags once you have real photos.

The booking form is client-side only for now — connect a backend or service like Calendly/Acuity when ready for live appointments.
