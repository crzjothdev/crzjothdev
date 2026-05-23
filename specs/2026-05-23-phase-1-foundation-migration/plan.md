# Plan — Phase 1: Foundation Migration

> Branch: `phase-1/foundation-migration`
> Each group should be committed separately so progress is reversible and reviewable.
> All shell commands run inside the container: `docker exec alpha-wolf <command>`

---

## Group 1 — Environment Setup

1.1 Install Tailwind CSS and its PostCSS dependencies (`tailwindcss`, `postcss`, `autoprefixer`)
1.2 Create `tailwind.config.ts` — configure `content` glob, register custom colour token `brand-teal: '#20909a'`, set `darkMode: 'class'`
1.3 Create `postcss.config.js`
1.4 Update `styles/globals.css` — replace MUI baseline with Tailwind's `@tailwind base/components/utilities` directives
1.5 Update `tsconfig.json` — enable `strict: true`, configure path aliases (`@/components`, `@/styles`)
1.6 Verify build succeeds before any component work begins: `docker exec alpha-wolf npm run build`

---

## Group 2 — App Router Shell

2.1 Create `app/layout.tsx` — root layout with `<html lang="en">`, `<body>`, Tailwind font class, GTM client wrapper
2.2 Create `app/gtm-provider.tsx` (`'use client'`) — wraps `react-gtm-module` initialisation moved from `pages/_app.js`
2.3 Create `app/page.tsx` — root page, imports all section components, replicates the current `pages/index.js` layout
2.4 Delete `pages/_app.js`, `pages/_document.js`, `pages/index.js`, `pages/api/` once `app/` equivalents are confirmed working
2.5 Delete `styles/theme/`, `utility/createEmotionCache.js`

---

## Group 3 — Layout Shell Components

3.1 Migrate `components/AppBar/AppBar.js` → `AppBar.tsx`
  - Translate all MUI `Box`, `Toolbar`, `Typography`, `Button` to Tailwind utility classes
  - Preserve responsive behaviour (hamburger menu on mobile)
  - Keep `onNavigateClick` prop contract identical

3.2 Migrate `components/Footer/Footer.js` → `Footer.tsx`

3.3 Migrate `components/Section/Section.js` → `Section.tsx`
  - This is the shared wrapper used by every content section; get it right before migrating children

3.4 Migrate `components/Parallax/Parallax.js` → `Parallax.tsx`
  - Background image via Tailwind `bg-[url(...)]` or inline style — whichever preserves the exact visual

---

## Group 4 — About Me Section

4.1 Migrate `components/Aboutme/Aboutme.js` → `Aboutme.tsx`
  - Preserve two-column layout at `md:` breakpoint
  - Preserve profile image sizing (300×300) and border-radius
  - Preserve the two-column programming language list grid

---

## Group 5 — Experience Section

5.1 Migrate `components/Experience/Experience.js` → `Experience.tsx`
  - Preserve the inner `List` component (custom `ul` with chevron SVG list-style-image)
  - Preserve card border (`border border-brand-teal`) and rounded corners
  - Preserve each job entry's layout and spacing

---

## Group 6 — Projects Section

6.1 Migrate `components/ProjectCard/ProjectCard.js` → `ProjectCard.tsx`
6.2 Migrate `components/ProjectImage/ProjectImage.js` → `ProjectImage.tsx`
6.3 Migrate `components/Projects/Projects.js` → `Projects.tsx`
  - Preserve the responsive grid (1 col → 2 col → 3 col → 4 col)

---

## Group 7 — Contact Section

7.1 Migrate `components/Contact/Contact.js` → `Contact.tsx`
  - Preserve the centred CTA layout
  - Preserve `mailto:angelo.cruz@crzjothdev.com` href on the button

---

## Group 8 — Inactive Components

8.1 Migrate `components/SkilledTools/SkilledTools.js` → `SkilledTools.tsx`
8.2 Migrate `components/Customers/Customers.js` → `Customers.tsx`
8.3 Migrate `components/Testimonials/Testimonials.js` → `Testimonials.tsx`
8.4 Migrate `components/Social/Social.js` → `Social.tsx`
8.5 Migrate `components/Disclaimers/Disclaimers.js` → `Disclaimers.tsx`

> These components are currently commented out in the page. Migrate them so the codebase has no JS files remaining, even if the components stay inactive.

---

## Group 9 — Cleanup & Final Verification

9.1 Remove MUI packages from `package.json`: `@mui/material`, `@mui/icons-material`, `@mui/styles`
9.2 Remove Emotion packages: `@emotion/cache`, `@emotion/react`, `@emotion/server`, `@emotion/styled`
9.3 Remove `@fontsource/roboto`
9.4 Update lockfile inside the container: `docker exec alpha-wolf npm install`
9.5 Confirm no remaining `.js` files: `docker exec alpha-wolf find components -name "*.js"`
9.6 Run build — must pass with zero errors: `docker exec alpha-wolf npm run build`
9.7 Visit `http://localhost:3000` and do a final visual pass against the validation checklist
