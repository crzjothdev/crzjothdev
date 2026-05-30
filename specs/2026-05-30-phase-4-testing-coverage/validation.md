# Phase 4 — Testing Coverage: Validation

The implementation is considered complete when all checks below pass.

---

## 1. Suite Passes Clean

- [ ] `docker exec alphawolf npm test` exits 0 with zero failing tests
- [ ] No skipped or pending tests (`.skip`, `.todo`) left in the codebase
- [ ] No TypeScript errors from test files: `docker exec alphawolf npm run build` still exits 0 after tests are added

---

## 2. Every Active Component Has a Test File

Confirm each file exists and contains at least one `it()` / `test()` block:

- [ ] `components/FadeIn/__tests__/FadeIn.test.tsx`
- [ ] `components/ThemeToggle/__tests__/ThemeToggle.test.tsx`
- [ ] `components/AppBar/__tests__/AppBar.test.tsx`
- [ ] `components/Parallax/__tests__/Parallax.test.tsx`
- [ ] `components/Aboutme/__tests__/Aboutme.test.tsx`
- [ ] `components/Experience/__tests__/Experience.test.tsx`
- [ ] `components/SkilledTools/__tests__/SkilledTools.test.tsx`
- [ ] `components/Projects/__tests__/Projects.test.tsx`
- [ ] `components/ProjectCard/__tests__/ProjectCard.test.tsx`
- [ ] `components/Contact/__tests__/Contact.test.tsx`
- [ ] `app/__tests__/page.test.tsx` (integration)

---

## 3. Key Behaviours Verified

### FadeIn
- [ ] Children render when `prefers-reduced-motion: reduce` is active
- [ ] `IntersectionObserver.unobserve` is called after first intersection (fires once)

### ThemeToggle
- [ ] Button has `aria-label="Toggle dark mode"`
- [ ] Clicking adds `dark` to `document.documentElement.classList`
- [ ] `localStorage.setItem` is called with `'theme'` and the correct value

### AppBar
- [ ] Nav items from `pages` prop are visible in the document
- [ ] Resume link has `href="/documents/resume.pdf"`
- [ ] Hamburger button has `aria-label="Open navigation menu"`

### Contact
- [ ] The contact anchor's `href` starts with `mailto:`

---

## 4. Coverage Gate

- [ ] `docker exec alphawolf npm test -- --coverage` exits 0
- [ ] Output shows global line coverage ≥ 70%
- [ ] `coverageThreshold` is set in `jest.config.js` so the gate is enforced automatically on every future run

---

## Definition of Done

All checklist items above are checked. The branch is ready to merge into `sdd` when:

1. `npm test` exits 0 with zero failures and zero skips
2. Coverage report confirms ≥ 70% line coverage and the threshold is enforced in config
3. `npm run build` still passes (tests did not break TypeScript compilation)
