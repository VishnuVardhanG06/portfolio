# Component System

All components are reusable and live under `src/components`.

## Site components

- `Navbar` (`src/components/site/Navbar.tsx`): top navigation, social links, theme toggle, mobile menu
- `Footer` (`src/components/site/Footer.tsx`): links + contact shortcuts
- `ThemeProvider` (`src/components/site/ThemeProvider.tsx`): `next-themes` provider
- `ThemeToggle` (`src/components/site/ThemeToggle.tsx`): theme switch button
- `MobileMenu` (`src/components/site/MobileMenu.tsx`): props: `items: {href,label}[]`

## UI primitives

- `Button`, `ButtonLink` (`src/components/ui/Button.tsx`): props: `variant`, `size`
- `Card` (`src/components/ui/Card.tsx`): props: `className`, `children`
- `Badge` (`src/components/ui/Badge.tsx`): props: `className`, `children`
- `Modal` (`src/components/ui/Modal.tsx`): props: `open`, `onOpenChange`, `title`, `children`
- `Loader` (`src/components/ui/Loader.tsx`): inline sending indicator

## Sections

- `Hero` (`src/components/sections/Hero.tsx`): animated hero, CTAs, background pattern
- `Section` (`src/components/sections/Section.tsx`): props: `eyebrow`, `title`, `subtitle`, `children`
- `ProjectCard` (`src/components/sections/ProjectCard.tsx`): props: `name`, `highlights`, `technologies`, `href?`
- `SkillBadge` (`src/components/sections/SkillBadge.tsx`): prop: `label`
- `Timeline` (`src/components/sections/Timeline.tsx`): prop: `items: TimelineItem[]`
- `TestimonialCarousel` (`src/components/sections/TestimonialCarousel.tsx`): placeholder testimonials, replaceable
- `ContactForm` (`src/components/sections/ContactForm.tsx`): posts to `/api/contact`
- `CTAButton` (`src/components/sections/CTAButton.tsx`): re-export of `Button` and `ButtonLink`

