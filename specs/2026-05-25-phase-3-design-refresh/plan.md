# Phase 3 — Modern Design Refresh: Plan

Tasks are grouped by concern, ordered by dependency. Each group should be complete and visually reviewed before moving to the next.

---

## Group 1 — Design Tokens & Typography

1. Define the spacing scale (document in `tech-stack.md` once decided)
2. Choose and install a web font (e.g. Inter or Geist via `next/font`)
3. Apply the font globally in `app/layout.tsx`
4. Establish a typography hierarchy: heading sizes (h1–h3), body, caption, label
5. Update `styles/globals.css` — add any new `@theme {}` tokens (font, spacing, radius)
6. Verify `--color-brand-teal` and `--color-footer-dark` tokens are in use across all components

---

## Group 2 — Hero (Parallax) Section

1. Redesign the parallax hero layout — stronger visual hierarchy
2. Add a personal tagline (short, punchy, target-market aware)
3. Add a clear CTA button (e.g. "See my work" scrolls to Projects, or "Get in touch" scrolls to Contact)
4. Ensure hero text is readable at all viewports on both light and dark backgrounds

---

## Group 3 — Section Layout & Cards

1. Audit all sections for spacing inconsistencies — align to the spacing scale
2. Standardise card styles (border radius, shadow, padding) across Experience, Projects, Skills
3. Improve section header consistency (size, weight, spacing below)
4. Verify content stays within constrained width on wide screens (`md:70%` / `lg:60%`)

---

## Group 4 — Dark Mode

1. Implement dark mode toggle component (button or icon, accessible)
2. Wire toggle to `localStorage` — persist preference on reload
3. Apply `dark:` variants to all components (background, text, border, card surfaces)
4. Test toggle on every section — no sections left unthemed

---

## Group 5 — Motion & Animation

1. Add section fade-in on scroll (IntersectionObserver or a lightweight library)
2. Keep animations subtle — 200–400ms, ease-out, translate-y + opacity
3. Respect `prefers-reduced-motion` — disable animations when set
4. Test that animations do not cause layout shift or affect Lighthouse CLS score

---

## Group 6 — Assets & Cleanup

1. Audit all images — confirm `.webp` format, correct `alt` text, appropriate `width`/`height`
2. Replace any remaining non-optimised assets
3. Update logo/brand assets if they conflict with the refreshed design
4. Remove any leftover placeholder styles or dead CSS utility classes
