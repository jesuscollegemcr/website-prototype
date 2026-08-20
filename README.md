# Jesus College MCR Website Prototype

Postgraduate community website prototype for Jesus College in the University of Oxford. Built with React 19, Vite, and bespoke Vanilla CSS.

## Live Website

🔗 [https://jesuscollegemcr.github.io/website-prototype/](https://jesuscollegemcr.github.io/website-prototype/)

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

### 5. Commit and push
```bash
git add .
git commit -m "Add new feature or fix"
git push origin main
```
Once pushed to the `main` branch, GitHub Actions will automatically build and deploy the changes to the live website.

---

## 🛠 Available Scripts

- `npm run dev` — Starts the local Vite development server with hot-reload.
- `npm run build` — Compiles and optimizes the project for production into the `dist/` folder.
- `npm run preview` — Serves the local `dist/` production build to test before deploying.
- `npm run lint` — Runs Oxlint to check for code quality and syntax errors.

---

## 🚢 Deployment

Deployments to GitHub Pages are automated via GitHub Actions on every push to the `main` branch. The CI workflow installs dependencies, runs `npm run build`, and publishes the generated `dist/` directory.

