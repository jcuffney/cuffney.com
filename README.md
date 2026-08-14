# cuffney.com

Personal site. React + Vite, built to fully static assets — the page is
prerendered at build time (readable without JS), then hydrated.

- `src/` — the app (`App.jsx`, `styles.css`); `public/` — static assets
  (fonts, favicon) copied into the build as-is.
- `npm run build` → client build, SSR build of `src/entry-server.jsx`, then
  [scripts/prerender.mjs](scripts/prerender.mjs) injects the rendered markup
  into `dist/index.html`.
- On push to `main`, [release.yml](.github/workflows/release.yml) builds and
  packages `dist/` into `site.tar.gz` on a rolling `latest` release.
- The [homelab](https://github.com/jcuffney/homelab) gateway role downloads
  `releases/latest/download/site.tar.gz` and extracts it into the nginx docroot
  for `cuffney.com` on each gateway deploy.

## Local dev

```bash
npm install
npm run dev
```

## Fonts

[Fraunces](https://github.com/undercasetype/Fraunces) variable font (SIL OFL),
self-hosted latin subset in `public/fonts/`.
