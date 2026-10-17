# Petals & Grace

A romantic florist portfolio for High Force, built with Astro. The site uses the supplied flower photography, an editorial blush and rosewood palette, and a responsive layout for phones, tablets, desktops, and large displays.

## Run locally

```sh
npm ci
npm run dev
```

Create a production build with:

```sh
npm run build
```

Astro processes the local flower photography into responsive AVIF and WebP image sources with JPEG fallbacks. The hero is prioritized; collection images load lazily with stable, softly coloured image backdrops to avoid blank loading tiles and layout shifts.

The page includes a descriptive title and summary, canonical and social metadata for deployed builds, a compressed social preview image, `WebSite` structured data, and generated `robots.txt` and `sitemap.xml` routes. The public GitHub Pages URL is derived from the repository during deployment.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the project when changes reach `main` and deploys `dist/` to GitHub Pages. The Astro base path is derived from the GitHub repository name during that workflow, so the project works at its Pages URL without changing local development paths.
