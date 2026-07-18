# Simarjeet Singh Sodhi — Portfolio

A premium, dark, glassmorphic portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Run it locally (VS Code)

1. Unzip this folder and open it in VS Code.
2. Open a terminal in the project folder and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```
npm run build
```
This outputs a static site into the `dist/` folder.

## Deploy (get a real URL)

**Vercel (recommended, free, fastest):**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → "New Project" → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy — you'll get a live `.vercel.app` URL instantly, with a custom domain option.

**Netlify:** same flow — import repo, build command `npm run build`, publish directory `dist`.

**GitHub Pages:** run `npm run build`, then deploy the `dist/` folder using the `gh-pages` package or Pages' static deploy action.

## Project structure

```
src/
  components/     → all UI sections (Hero, About, Skills, Experience, Projects, Certifications, Education, Contact, Nav, Footer)
  data/content.js → ALL your content lives here (name, projects, skills, certs, etc.)
  index.css       → design tokens / global styles
public/certs/     → your certificate images (already included)
```

## Editing content

Everything text-based — projects, skills, experience, certifications, education — lives in
`src/data/content.js`. Edit that one file to update copy without touching any component.

## Notes

- The contact form currently opens the visitor's email client via a `mailto:` link (no backend
  required). To make it fully server-side, wire the `handleSubmit` in `src/components/Contact.jsx`
  to a service like Formspree, Resend, or your own API route.
- Certificate images are the ones you uploaded, placed in `public/certs/`.
- Replace GitHub links in `src/data/content.js` with your actual repo URLs for each project.
