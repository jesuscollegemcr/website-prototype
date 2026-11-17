# Jesus College MCR Website Prototype

Postgraduate community website prototype for Jesus College in the University of Oxford. Built with React 19, Vite, and bespoke Vanilla CSS.

## Live Website

🔗 [https://www.jesuscollegemcr.com](https://www.jesuscollegemcr.com)

---

## 🚀 Quickstart for Developers

Follow these steps to set up the project locally and start contributing:

### 1. Clone the repository
```bash
git clone https://github.com/jesuscollegemcr/website-prototype.git
cd website-prototype
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open the URL shown in your terminal (typically `http://localhost:5173`) in your browser to view your live changes in real time.

### 4. Make your changes and test
Edit files in `src/`. Vite will automatically refresh the page (Hot Module Replacement) as you save.

### 5. Commit on a branch and open a pull request
`main` is protected: direct pushes are rejected, so every change goes through a pull request.
```bash
git switch main && git pull
git switch -c my-change            # e.g. update-committee-bios
git add .
git commit -m "Add new feature or fix"
git push -u origin my-change
gh pr create --fill                # or open the PR on GitHub
```
Before you push, run `npm run lint` and `npm run build` locally to catch problems early.

### 6. Merge
Each pull request runs the **PR check** (install, lint and build). Once it passes, merge the PR on GitHub (no review approval is required). Merging to `main` automatically builds and deploys the changes to the live website.

---

## 🛠 Available Scripts

- `npm run dev` — Starts the local Vite development server with hot-reload.
- `npm run build` — Compiles and optimizes the project for production into the `dist/` folder.
- `npm run preview` — Serves the local `dist/` production build to test before deploying.
- `npm run lint` — Runs Oxlint to check for code quality and syntax errors.

---

## 🚢 Deployment

Two GitHub Actions workflows run the site:

- **PR check** (`.github/workflows/pr-check.yml`) runs on every pull request to `main`: it installs dependencies, runs `npm run lint` and `npm run build`. A PR cannot be merged until it passes.
- **Deploy to GitHub Pages** (`.github/workflows/deploy.yml`) runs on every merge to `main`: it builds the site and publishes the generated `dist/` directory to [www.jesuscollegemcr.com](https://www.jesuscollegemcr.com).

Branch protection on `main` applies to everyone, including organisation owners: no direct pushes, no force-pushes, and the PR check must pass before merging.

