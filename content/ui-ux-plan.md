# UI/UX Layout Plan

## Home
- Layout: hero + strengths + featured projects + skills snapshot + testimonials + CTA
- Grid: `max-w-6xl`, 12-col on desktop, single column on mobile
- Motion: hero fade/slide, cards lift on hover, small section transitions
- Mobile: sticky nav + mobile menu, single-column cards, short copy blocks
- Dark mode: high-contrast cards with subtle borders; readable over effects

## About
- Layout: summary + research interests + contact card + "what I’m optimizing for"
- Interaction: badges, crisp scannability, minimal fluff

## Skills
- Layout: grouped cards for ATS and recruiter scanning
- Pattern: short headings + chips; no long paragraphs

## Projects
- Layout: grid of project cards with highlights + tech chips
- Hover: slight lift + border emphasis

## Experience Timeline
- Layout: timeline-style cards including education + projects + explicit "no formal experience listed" card
- Principle: never invent roles; show honest signal

## Certifications / Achievements
- Layout: simple card grids; quick scan

## Resume
- Layout: HTML resume view (ATS-friendly) + buttons to open/download PDF/HTML
- Print: `public/resume.html` is clean for printing

## Contact
- Layout: form + direct links
- Feedback: loader + success/error states
- Storage: local JSONL in dev; production should use email/DB provider

## Blog (optional)
- Layout: minimal teaser cards; easy to expand into MDX later

