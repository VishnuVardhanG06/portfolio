# Deployment Notes

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: used for sitemap/robots and canonical links

## Vercel (recommended)

1. Push repo to GitHub
2. Import into Vercel
3. Add `NEXT_PUBLIC_SITE_URL` (your production URL)
4. Deploy

Contact form:
- Current API route writes to local filesystem (`.data/messages.jsonl`) which is not persistent on serverless
- For production, wire `src/app/api/contact/route.ts` to an email provider (Resend/SendGrid) or a database

## Netlify

- Use the Next.js runtime (Netlify Next plugin recommended)
- Add `NEXT_PUBLIC_SITE_URL`

## Render / Firebase / GitHub Pages

- Next.js App Router works best on platforms that support Node/edge runtimes (Vercel, Netlify, Render)
- GitHub Pages is not recommended unless you constrain to static export

