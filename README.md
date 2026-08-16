# Jesus College MCR Website Prototype

Postgraduate community website prototype for Jesus College in the University of Oxford. Built with React 19, Vite, and bespoke Vanilla CSS.

## Live Website (GitHub Pages)

https://jesuscollegemcr.github.io/website-prototype/

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build
```

## Deployment to GitHub Pages

### Option 1: Automated GitHub Actions (Recommended)
This repository is configured with `.github/workflows/deploy.yml`. Every commit pushed to `main` will automatically build and deploy the site to GitHub Pages.

1. Go to your repository on GitHub: `https://github.com/jesuscollegemcr/website-prototype`
2. Navigate to **Settings** > **Pages**
3. Under **Build and deployment > Source**, select **GitHub Actions**
4. Push your changes to `main` (`git push origin main`)

### Option 2: Manual Deploy via `gh-pages`
```bash
npm run deploy
```
