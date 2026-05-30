# Phase 4 — Testing Coverage: Plan

Tasks are ordered by dependency. Each group can be committed independently.

---

## Group 1 — Jest Setup & Infrastructure

1. Verify the existing Jest config (`jest.config.js`, `jest.setup.js`) works correctly with Next.js App Router and TypeScript — run `docker exec alphawolf npm test` on an empty suite.
2. Add browser API mocks to `jest.setup.js`:
   - `IntersectionObserver` — stub with `observe`, `unobserve`, `disconnect`
   - `window.matchMedia` — stub returning `matches: false` (motion allowed) by default
   - `localStorage` — already available in jsdom; verify it resets between tests
3. Confirm `@testing-library/jest-dom` matchers are imported in setup and available globally.

---

## Group 2 — Phase 3 Component Tests (priority)

4. **FadeIn** (`components/FadeIn/FadeIn.tsx`)
   - Renders children without crashing
   - With `prefers-reduced-motion: reduce` mocked → renders children immediately visible (no `opacity-0`)
   - IntersectionObserver callback triggers → children become visible
   - Observer is disconnected after first intersection (`unobserve` called once)

5. **ThemeToggle** (`components/ThemeToggle/ThemeToggle.tsx`)
   - Renders button with `aria-label="Toggle dark mode"`
   - Click adds `dark` class to `document.documentElement`
   - Second click removes `dark` class (toggle)
   - `localStorage.setItem('theme', 'dark')` called after first click
   - `localStorage.setItem('theme', 'light')` called after second click

---

## Group 3 — Remaining Component Tests

6. **AppBar** (`components/AppBar/AppBar.tsx`)
   - Renders all nav items passed via `pages` prop (labels visible)
   - Resume link has correct `href="/documents/resume.pdf"` and opens in new tab
   - ThemeToggle is rendered (button with `aria-label="Toggle dark mode"` present)
   - Hamburger button has `aria-label="Open navigation menu"`
   - Clicking hamburger opens the mobile drawer (nav items in drawer visible)

7. **Parallax** (`components/Parallax/Parallax.tsx`)
   - Renders `<h1>Angelo Cruz</h1>`
   - Renders "Software Developer" subtitle
   - "Get in touch" link has `href="#contact"`
   - GitHub, LinkedIn, and X social links rendered with correct `aria-label` attributes

8. **Aboutme** — renders section heading, bio text visible, profile image with `alt="Angelo Cruz"`
9. **Experience** — renders section heading, at least one job title and employer visible
10. **SkilledTools** — renders section heading, all 8 tool names visible, each image has non-empty `alt`
11. **Projects** — renders section heading, at least one `<ProjectCard>` with a title
12. **Contact** — section heading visible; `mailto:` anchor has correct email in `href`

---

## Group 4 — Integration Test & Coverage Gate

13. **Main page** (`app/page.tsx`)
    - All five sections render: About Me, Experience, Skills & Tools, Projects, Get In Touch
    - AppBar is present in the document
    - Footer is present in the document
    - Navigating (clicking nav button) calls `scrollIntoView` on the target element

14. Run `docker exec alphawolf npm test -- --coverage` and confirm line coverage ≥ 70%.
15. If below threshold: add missing cases to the lowest-coverage files first.
16. Commit the final coverage config (`coverageThreshold` in `jest.config.js`).
