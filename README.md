# Yuxi Zheng — Personal Website

A minimalist academic personal website built with Vite and React.

This project is intentionally simple: most content and styling live in `src/App.jsx`, so Yuxi can edit it later without navigating many files.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173/
```

## Edit the website

Most website content is in:

```bash
src/App.jsx
```

The main editable parts are near the top of `src/App.jsx`:

- `profile`
- `links`
- `researchInterests`
- `publications`
- `teaching`
- `miscellaneous`

## Build for deployment

```bash
npm run build
```

The production site will be generated in the `dist/` folder.

## Push this project to GitHub

Create an empty GitHub repository named `yuxi-personal-website`. Do not initialize it with a README, `.gitignore`, or license because this project already contains those files.

Then run these commands from inside the project folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/yuxi-personal-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with the GitHub username or organization that should own the repository.

## Deploy with Vercel

Recommended: connect the GitHub repository to Vercel and use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

After that, every push to GitHub can automatically update the live website.
