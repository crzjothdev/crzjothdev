# Roadmap

Phases are ordered by dependency and impact. Each phase has a clear definition of done so it can be validated before the next begins.

---

## Phase 1 — TypeScript & App Router Migration *(in progress)*

**Goal:** Modernise the foundation so all future development is type-safe and built on the current Next.js architecture.

**Why first:** All content and design work will be easier to validate, refactor, and test once the codebase is on a stable, typed foundation with the chosen styling system in place. This is the work already started on the `upgrade` branch.

### Tasks
- [ ] Migrate all components from `.js` to `.tsx`
- [ ] Define shared TypeScript types/interfaces (props, page data models)
- [ ] Replace `pages/` router with `app/` directory structure (layouts, pages, loading states)
- [ ] Install and configure Tailwind CSS (`tailwind.config.ts`, `postcss.config.js`, base styles)
- [ ] Remove MUI (`@mui/material`, `@mui/icons-material`) and Emotion packages
- [ ] Rewrite all component styles using Tailwind utility classes
- [ ] Remove `styles/theme/` directory and Emotion cache utility
- [ ] Remove old `pages/` directory once migration is complete

### Definition of Done
- `next build` succeeds with zero TypeScript errors
- All pages render correctly in both development and production (`next start`)
- No `pages/` directory remains

---

## Phase 2 — Content Completeness & Accuracy

**Goal:** Ensure all sections contain accurate, up-to-date professional information and no placeholder or incomplete content remains.

**Why second:** Content is the core value of the site. Design improvements on top of stale or missing content are wasted effort.

### Tasks
- [ ] Update **About Me** bio — reflect current skills, focus areas, and Ireland/global career target
- [ ] Update **Experience** — add any roles after Aug 2023; fix copy/typos (e.g. "Software Develper")
- [ ] Update **Projects** — add all notable personal/professional projects with descriptions and links
- [ ] Enable and populate **Skilled Tools** section with current toolset
- [ ] Decide on **Testimonials** and **Customers** sections: populate with real data or remove permanently
- [ ] Update resume PDF (`/documents/resume.pdf`) to match current CV
- [ ] Add **Social** links section (GitHub, LinkedIn) — component already exists

### Definition of Done
- All visible sections contain accurate, current information
- No commented-out sections remain unless intentionally deferred (documented here)
- Zero placeholder text or "lorem ipsum" in production

---

## Phase 3 — Modern Design Refresh

**Goal:** Elevate the visual quality to meet the expectations of a competitive international market (Ireland / global remote).

**Why third:** Design improvements are most effective once the structure and content are stable.

### Tasks
- [ ] Define a consistent design language: spacing scale, typography hierarchy, colour palette
- [ ] Redesign the **Parallax hero** section — stronger first impression, personal tagline, clear CTA
- [ ] Improve section layout consistency — cards, borders, spacing across all sections
- [ ] Implement **dark mode** toggle using Tailwind's class strategy (`dark:` variants + `localStorage` persistence)
- [ ] Improve **mobile responsiveness** — verify every section on 375px, 390px, 414px viewports
- [ ] Add subtle motion/animation (e.g. section fade-in on scroll) — keep it professional
- [ ] Update logo and brand assets if needed to match refreshed design
- [ ] Audit and replace any remaining `inner.jpg` / non-optimised assets with `.webp`

### Definition of Done
- Design reviewed on mobile (375px), tablet (768px), and desktop (1280px+)
- Dark mode toggle works and persists user preference
- No obvious visual inconsistencies between sections

---

## Phase 4 — Testing Coverage

**Goal:** Establish a reliable test suite so that future changes can be validated automatically and regressions caught early.

**Why fourth:** Tests are most valuable once the components and their contracts are stable.

### Tasks
- [ ] Configure Jest + React Testing Library correctly for App Router / TypeScript
- [ ] Unit tests for all UI components (render, props, key interactions)
- [ ] Integration test for main page — all sections render, navigation scrolls correctly
- [ ] Test the Contact CTA — correct `mailto:` href rendered
- [ ] Add test scripts to `package.json` and document how to run them
- [ ] Set minimum coverage threshold (suggested: 70% line coverage)

### Definition of Done
- `npm test` passes with zero failures
- Coverage report generated and meets threshold
- Tests run in CI (Phase 5 prerequisite)

---

## Phase 5 — SEO, Performance & Accessibility

**Goal:** Make the site discoverable, fast, and usable by everyone — meeting or exceeding the Lighthouse 90+ target defined in the mission.

### Tasks
- [ ] Add complete `<head>` metadata: title, description, canonical URL
- [ ] Add **Open Graph** tags (title, description, image) for social sharing previews
- [ ] Add **Twitter Card** meta tags
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Audit all images: `alt` attributes, correct sizing, lazy loading
- [ ] Audit colour contrast ratios against WCAG AA
- [ ] Add `aria-label` attributes to interactive elements (buttons, links)
- [ ] Run Lighthouse on all pages and address all items below 90
- [ ] Validate HTML structure (semantic headings, landmark regions)

### Definition of Done
- Lighthouse scores ≥ 90 on Performance, Accessibility, Best Practices, and SEO
- Open Graph preview renders correctly when URL is shared on LinkedIn/Slack

---

## Phase 6 — CI/CD & Deployment Pipeline

**Goal:** Automate the build, test, and deployment process so that publishing changes is reliable and repeatable.

**Why last:** A fully automated pipeline is most valuable once the site is complete and stable, and once tests exist to run in it.

### Tasks
- [ ] Expand `Jenkinsfile` to: install dependencies → lint → test → build → deploy
- [ ] Upgrade Docker base image from `node:16-alpine` to `node:20-alpine` (Node 16 is EOL)
- [ ] Add environment variable management for production vs. development configs
- [ ] Configure automatic deployment on merge to `main`
- [ ] Add a staging environment (optional but recommended before prod deploys)
- [ ] Document the deployment process in `README.md`

### Definition of Done
- A push to `main` automatically triggers a full pipeline: lint → test → build → deploy
- Production URL is live and accessible after a successful pipeline run
- `README.md` contains up-to-date setup and deployment instructions

---

## Deferred / Backlog

These are ideas noted for future consideration but not yet assigned to a phase:

- Blog / writing section (articles, tutorials)
- Internationalisation (EN/ES)
- Analytics dashboard to track contact form conversions
- CMS-backed content (so Experience/Projects can be updated without code changes)
