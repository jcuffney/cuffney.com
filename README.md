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
- The homelab v2 cluster serves it: [deploy/](deploy/) is a Kustomize app
  Argo CD syncs into namespace `cuffney-com` (see "Homelab deployment").

## Local dev

```bash
npm install
npm run dev
```

## Fonts

[Inter](https://rsms.me/inter/) variable font (SIL OFL), self-hosted latin
subset in `public/fonts/`.

## Homelab deployment (`deploy/`)

`deploy/` holds the Kustomize manifests Argo CD applies into namespace
`cuffney-com` on the homelab v2 cluster (the repo carries the GitHub topic
`homelab`, which is how Argo discovers it). An initContainer downloads
`https://github.com/jcuffney/cuffney.com/releases/download/<RELEASE_TAG>/site.tar.gz`
into an emptyDir and `nginx:1.30.4-alpine` serves it; the Ingress is class
`external` with the `external-dns.alpha.kubernetes.io/target` tunnel
annotation (replace `TUNNEL_ID` with the Cloudflare tunnel UUID before the
first sync).

Publishing a new build:

1. Push to `main` — `release.yml` rebuilds and refreshes `site.tar.gz` on the rolling `latest` release (the Kubernetes side sees no change yet).
2. Either `kubectl -n cuffney-com rollout restart deployment/cuffney-com` (the new pod's initContainer fetches the new asset), or change the `RELEASE_TAG` env in `deploy/deployment.yaml` to a pinned tag and push — Argo syncs the changed Deployment, which rolls the pod.

`ci.yml` renders `deploy/` with kustomize and checks it with kubeconform on
PRs; `release.yml` is unchanged and CI never talks to the cluster.

Tenant contract: topic `homelab` + `deploy/kustomization.yaml` opt the repo in; namespace = repo name minus `.cuffney.com` with dots → hyphens (`cuffney-com`); `ingressClassName: internal` (LAN/VPN) or `external` + tunnel target (public); storage classes `longhorn` / `nfs-media` / `nfs-backups`; secrets via `ExternalSecret` from 1Password.
