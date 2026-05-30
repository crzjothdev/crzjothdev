# Phase 4 — Testing Coverage: Requirements

## Goal

Establish a reliable test suite so that future changes can be validated automatically and regressions caught early. All active components must have at least one test file. The suite must pass cleanly and meet the 70% line coverage threshold.

---

## Scope

### In scope

All active components and the main page:

| Target | File |
|---|---|
| FadeIn | `components/FadeIn/FadeIn.tsx` |
| ThemeToggle | `components/ThemeToggle/ThemeToggle.tsx` |
| AppBar | `components/AppBar/AppBar.tsx` |
| Parallax | `components/Parallax/Parallax.tsx` |
| Aboutme | `components/Aboutme/Aboutme.tsx` |
| Experience | `components/Experience/Experience.tsx` |
| SkilledTools | `components/SkilledTools/SkilledTools.tsx` |
| Projects | `components/Projects/Projects.tsx` |
| ProjectCard | `components/ProjectCard/ProjectCard.tsx` |
| ProjectImage | `components/ProjectImage/ProjectImage.tsx` |
| Contact | `components/Contact/Contact.tsx` |
| Main page integration | `app/page.tsx` |

### Out of scope

- `Footer` component — minimal markup, no interactive logic
- `GtmProvider` — third-party wrapper, side-effect only, no renderable UI to test
- `Section` — layout wrapper only
- CI/CD integration — deferred entirely to Phase 6

---

## Decisions

### Priority order

Phase 3 components (FadeIn, ThemeToggle) are tested first. They are the newest code, use browser APIs that need mocking, and form the foundation the rest of the UI depends on for animation and theming. Section components follow.

### Browser API mocking strategy

FadeIn and ThemeToggle depend on browser APIs not available in jsdom. All mocks go in `jest.setup.js` so they are available globally across every test file:

- **`IntersectionObserver`** — jest mock class with `observe`, `unobserve`, and `disconnect` stubs. Tests that need to trigger intersection fire the stored callback manually.
- **`window.matchMedia`** — jest mock returning `{ matches: false, addListener: jest.fn(), removeListener: jest.fn() }` by default. Override per-test to simulate `prefers-reduced-motion: reduce`.
- **`localStorage`** — provided by jsdom; verify it clears between tests via `beforeEach`.

### Coverage threshold

70% line coverage enforced via `coverageThreshold` in `jest.config.js`:

```js
coverageThreshold: {
  global: {
    lines: 70,
  },
},
```

`npm test -- --coverage` must exit 0. A failing threshold is a failing build.

### Test file location

Co-located with the component: `components/Foo/__tests__/Foo.test.tsx`. Integration tests in `app/__tests__/page.test.tsx`.

### Test runner command

All test commands run inside the Docker container:

```bash
docker exec alphawolf npm test
docker exec alphawolf npm test -- --coverage
```

---

## Context

- Jest v29 + React Testing Library v16 + ts-jest are already installed (Phase 1).
- `jest.config.js` and `jest.setup.js` exist but may need updating for App Router and the new mocks.
- Components use Tailwind CSS classes — tests assert on text content and ARIA attributes, not class names.
- `next/image` will need to be mocked or the test environment configured to handle it (standard: `jest.mock('next/image', ...)` returning a plain `<img>`).
- `next/font/google` is used in `app/layout.tsx` — mock at module level if it causes import errors in tests.
