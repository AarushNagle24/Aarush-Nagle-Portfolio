# Aarush Nagle Portfolio

A polished personal portfolio for Aarush Nagle, built as a static React site for GitHub Pages. It highlights software engineering work, large-scale Roblox development, AI projects, mapping tools, education, coursework, and contact links.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`. On pushes to `main`, the workflow installs dependencies, builds the Vite app, and deploys the `dist` output to GitHub Pages.

In GitHub, set **Settings -> Pages -> Build and deployment -> Source** to **GitHub Actions**. Vite must be built before deployment, so serving directly from the `main` branch root will not work.

The production Vite base path defaults to `/Aarush-Nagle-Portfolio/`. If the site is moved to a user or organization root Pages site, set `VITE_BASE_PATH=/` during the build or update `vite.config.js`.

## Built With

- React
- Vite
- Framer Motion
- Lucide React
