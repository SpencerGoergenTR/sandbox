# nextjs-starter

A barebones Next.js (App Router) app that renders "Welcome", set up to deploy to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

`next.config.mjs` sets `output: 'export'`, so the build writes a static site to `out/`.

## Deploying to GitHub Pages

1. Push this repo to GitHub with `main` as the default branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).

The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds the site and publishes `out/`.

### Base path

Project sites are served from `https://<user>.github.io/<repo>/`, so assets need a base path.
The workflow derives it from the repo name and passes it as `NEXT_PUBLIC_BASE_PATH`; `next.config.mjs`
applies it to `basePath` and `assetPrefix`. For a user/org site (`<user>.github.io`) it resolves to empty.

Locally the variable is unset, so the app serves from `/`.

### Lockfile

Run `npm install` once and commit the generated `package-lock.json`. The workflow falls back to
`npm install` when it's missing, but committing it makes builds reproducible — and lets you re-enable
the npm cache in `setup-node` (see the comment in the workflow).

