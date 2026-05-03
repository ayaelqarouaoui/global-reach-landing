# ADSDO Agency — Bilingual Landing Page

Premium bilingual (EN / FR) landing page for **ADSDO Agency**, built with
Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

## Features

- 🌐 Full English / French translation with a header language switcher
- ✨ Luxury design system (Deep Navy, Gold, White) using semantic tokens
- 📱 Mobile-first responsive layout
- 🔍 Bilingual SEO meta tags (Open Graph, Twitter Card, canonical)
- 📨 Contact form validated with Zod, ready to forward to an n8n webhook
- ⚡ Fast static build, deployable to any static host

## Local Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → ./dist
npm run preview  # preview the production build
npm test         # run unit tests
```

## n8n Webhook

Set your webhook URL in `src/lib/n8n.ts`:

```ts
export const N8N_WEBHOOK_URL = "https://n8n.example.com/webhook/adsdo-contact";
```

Until set, submissions are logged to the browser console.

## Deploying to GitHub Pages

The repository ships with a ready-to-use GitHub Actions workflow at
`.github/workflows/deploy.yml`.

### One-time setup

1. Push the project to a GitHub repository.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will be published at:

```
https://<your-username>.github.io/<your-repo>/
```

### How it works

- The workflow builds the app with `BASE_PATH=/<repo-name>/` so all asset
  URLs resolve correctly under the project sub-path.
- `dist/index.html` is copied to `dist/404.html` so client-side routes
  (React Router) work on direct hits and refreshes.
- `public/.nojekyll` is included so GitHub Pages serves files/folders
  starting with `_` (used by some bundlers).

### Custom domain or user/organization page

If you deploy to `https://<user>.github.io/` (no sub-path) or a custom
domain, edit `.github/workflows/deploy.yml` and change:

```yaml
BASE_PATH: /
```

For a custom domain, also add a `public/CNAME` file containing the domain.

## Project Structure

```
src/
  assets/              static images
  components/          UI sections (Header, Hero, Services, ContactForm, Footer)
  components/ui/       shadcn/ui primitives
  i18n/                LanguageContext + EN/FR dictionary
  lib/n8n.ts           webhook integration
  pages/               route pages (Index, NotFound)
```

## License

© ADSDO Agency. All rights reserved.
