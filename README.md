# Yuxi Zheng — Personal Website

A minimalist academic personal website built with Vite and React.

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

## Deploy

Recommended: connect this repository to Vercel and use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
