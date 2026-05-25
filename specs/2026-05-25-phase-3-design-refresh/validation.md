# Phase 3 — Modern Design Refresh: Validation

The implementation is considered complete when all checks below pass. Work through them in order — viewport checks first, dark mode second, then the cross-cutting items.

---

## 1. Viewport Visual Checklist

For each viewport, open the running app and scroll through every section. Check each item.

### 375px (mobile — iPhone SE / small Android)

- [ ] Hero: tagline readable, CTA visible and tappable
- [ ] AppBar: navigation usable, no overflow
- [ ] About Me: text readable, no horizontal scroll
- [ ] Experience: cards stack correctly, no clipped content
- [ ] Skilled Tools: icons/tags wrap cleanly
- [ ] Projects: cards stack vertically, images not distorted
- [ ] Contact: CTA button centred and full-width or appropriately sized
- [ ] Footer: links and disclaimer readable

### 768px (tablet)

- [ ] Layout shifts from single-column to two-column where applicable
- [ ] Hero: layout feels intentional at this size (not just stretched mobile)
- [ ] No section has awkward mid-width stretching

### 1280px+ (desktop)

- [ ] Content constrained to `md:70%` / `lg:60%` — not full-bleed on wide screens
- [ ] Hero: strong visual impact, tagline and CTA prominent
- [ ] Section headers aligned and consistently styled across all sections
- [ ] Card styles (Experience, Projects, Skills) consistent in size, spacing, and visual weight

---

## 2. Dark Mode

- [ ] Toggle button is visible and accessible (keyboard-operable, has `aria-label`)
- [ ] Toggling applies `dark` class to `<html>` immediately
- [ ] All sections switch correctly — no section left in light-only styling
- [ ] Background, text, borders, and card surfaces all have `dark:` variants applied
- [ ] Preference persists on page reload (check `localStorage` key is set)
- [ ] Preference persists on navigation between pages / scroll positions

---

## 3. Typography & Tokens

- [ ] Chosen web font loads correctly and renders in all sections
- [ ] Heading hierarchy is visually distinct: h1 > h2 > h3 > body
- [ ] Brand teal (`#20909a`) used consistently for accent elements
- [ ] No raw hex colour values in component files — only Tailwind classes or CSS variables

---

## 4. Motion & Animation

- [ ] Sections fade in on scroll — animation triggers once as section enters viewport
- [ ] Animations do not cause visible layout shift (no content jumping)
- [ ] With `prefers-reduced-motion: reduce` set in OS/browser, animations are disabled
- [ ] Animation feels professional — not distracting, not laggy

---

## 5. Assets

- [ ] All images are `.webp` format
- [ ] All `<Image>` components have meaningful `alt` text (not empty, not filename)
- [ ] No `console.warn` about missing `width`/`height` on images
- [ ] No broken image links in any section

---

## 6. Build & Type Check

- [ ] `docker exec alphawolf npm run build` completes with zero TypeScript errors
- [ ] `docker exec alphawolf npm run lint` reports no errors
- [ ] App runs correctly in production mode: `docker exec alphawolf npm start`

---

## Definition of Done

All checklist items above are checked. The branch is ready to merge into `sdd` when:

1. Every viewport row in Section 1 is fully checked on both light and dark modes
2. Dark mode toggle works and persists (Section 2 complete)
3. Build passes with zero errors (Section 6 complete)
