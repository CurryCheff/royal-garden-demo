# Royal Garden — Demo Site

Single-page pitch/demo site for Royal Garden, a landscaping and paving
company. React + Tailwind CSS v4 + GSAP/ScrollTrigger, built with Vite.

## Getting started

```bash
npm install
npm run dev
```

## Structure

- `src/data/content.js` — all site copy, service/portfolio/testimonial
  data. Edit here first when swapping in real branding and client copy.
- `src/components/` — one component per section (`Hero`, `Services`,
  `Portfolio`, `Process`, `Testimonials`, `ContactForm`, `Footer`, `Navbar`).
- `src/components/PlaceholderImage.jsx` — the placeholder box used in
  every image slot. Swap for a real `<img>` once assets exist.
- `src/hooks/useGsap.js` — shared GSAP ScrollTrigger hooks (`useReveal`,
  `useStaggerReveal`, `useParallax`) used across sections.
- `IMAGE_PROMPTS.md` — numbered list of every image the site needs, with
  a detailed generation prompt for each.

## Images

None of the imagery is real yet — every image slot is a clearly labeled
placeholder box. See [`IMAGE_PROMPTS.md`](./IMAGE_PROMPTS.md) for the full
list of prompts, then drop generated images into `src/assets/` and swap
the corresponding `<PlaceholderImage />` for an `<img>` in each component.
