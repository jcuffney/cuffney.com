# cuffney.com

Personal site. Hand-built static HTML & CSS — no framework, no build step.

- `public/` is the docroot, exactly as served.
- On push to `main`, [release.yml](.github/workflows/release.yml) packages `public/`
  into `site.tar.gz` on a rolling `latest` release.
- The [homelab](https://github.com/jcuffney/homelab) gateway role downloads
  `releases/latest/download/site.tar.gz` and extracts it into the nginx docroot
  for `cuffney.com` on each gateway deploy.

## Local preview

```bash
python3 -m http.server 8080 -d public
```

## Fonts

[Fraunces](https://github.com/undercasetype/Fraunces) variable font (SIL OFL),
self-hosted latin subset in `public/fonts/`.
