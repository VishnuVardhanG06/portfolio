# Vishnu Vardhan Portfolio

Production-ready portfolio built from the CV at `content/resume.json`, using Next.js (App Router) + Tailwind + Framer Motion.

## Quick start

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## What’s included

- Pages: Home, About, Skills, Projects, Timeline, Certifications, Achievements, Resume, Contact, Blog (optional)
- SEO: static `public/sitemap.xml` + `public/robots.txt` (generated in `scripts/generate-static.mjs`)
- Resume assets: `public/resume.pdf`, `public/resume.html`
- Contact form: GitHub Pages friendly (mailto fallback) with optional `NEXT_PUBLIC_CONTACT_ENDPOINT`
- Docs: `content/brand-kit.md`, `content/ui-ux-plan.md`, `content/component-system.md`, `content/deployment.md`

## Content source of truth

- Resume data: `src/data/resume.ts` and `content/resume.json`
- Raw extracted text: `content/cv.raw.txt`
- PDF extraction script: `scripts/extract-cv.mjs`

## Deployment

- Set `NEXT_PUBLIC_SITE_URL` in your environment variables (used for sitemap/robots and canonical URLs)
- For direct contact form delivery, set `NEXT_PUBLIC_CONTACT_ENDPOINT` to a hosted form endpoint (Formspree, etc.)

## Optional backend (full stack)

There’s an optional Express + MongoDB backend scaffold under `server/` (not required for the frontend to run).
