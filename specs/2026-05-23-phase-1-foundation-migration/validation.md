# Validation — Phase 1: Foundation Migration

> Acceptance bar: **pixel-perfect visual match** to the current site.
> All checks must pass before this branch can be merged to `main`.
> All CLI commands run inside the container: `docker exec alpha-wolf <command>`

---

## 1. Build & Type Safety

| Check | Command | Pass condition |
|---|---|---|
| TypeScript compilation | `docker exec alpha-wolf npm run build` | Zero type errors in output |
| Next.js build | `docker exec alpha-wolf npm run build` | Exits with code 0 |
| Standalone output present | `docker exec alpha-wolf ls .next/standalone` | Directory exists after build |
| No JS component files remain | `docker exec alpha-wolf find components -name "*.js"` | No results |
| No `pages/` directory | `docker exec alpha-wolf ls pages` | Error: no such file or directory |
| MUI packages removed | `docker exec alpha-wolf grep "@mui" package.json` | No results |
| Emotion packages removed | `docker exec alpha-wolf grep "@emotion" package.json` | No results |

---

## 2. Visual Parity — Desktop (1280px+)

Container serves at `http://localhost:3000`. Open at 1280px width and compare against the current `main` branch side by side.

- [ ] **AppBar** — logo, nav links, and spacing match exactly
- [ ] **Parallax hero** — background image fills the section, overlay text positioned correctly
- [ ] **About Me card** — two-column layout, profile image right, text left, border colour `#20909a`
- [ ] **Programming language list** — two-column grid, chevron markers visible
- [ ] **Experience card** — border colour `#20909a`, all three job entries present, chevron list markers visible
- [ ] **Projects card** — border colour `#20909a`, grid layout with project cards
- [ ] **Contact card** — border colour `#20909a`, centred CTA button
- [ ] **Footer** — layout and content match

---

## 3. Visual Parity — Tablet (768px)

- [ ] AppBar transitions correctly (no layout breaks)
- [ ] About Me stack switches to single column
- [ ] All section cards maintain border and padding

---

## 4. Visual Parity — Mobile (375px)

- [ ] AppBar shows mobile menu (hamburger or equivalent)
- [ ] All cards are single-column and correctly padded
- [ ] Profile image is centred above the bio text
- [ ] No horizontal overflow / content clipping

---

## 5. Functional Checks

| Feature | How to test | Pass condition |
|---|---|---|
| Smooth-scroll navigation | Click each nav link in AppBar | Page scrolls to correct section |
| Section IDs preserved | Inspect DOM | `id="about-me"`, `id="experience"`, `id="projects"`, `id="contact"` all present |
| Contact button | Click "Contact Me" | Opens mail client with `angelo.cruz@crzjothdev.com` |
| Resume link | Click "Read more on the resume" | Opens `/documents/resume.pdf` in new tab |
| Google Tag Manager | Open browser Network tab → filter `gtm.js` | GTM script fires on page load |
| Dark mode class hook | Add `dark` class to `<html>` in DevTools | No visual regressions (dark styles not required this phase, but no broken layout) |

---

## 6. Merge Checklist

All of the above must be checked before opening a PR from `phase-1/foundation-migration` → `main`.

- [ ] All build & type safety checks pass
- [ ] All desktop visual parity checks pass
- [ ] All tablet visual parity checks pass
- [ ] All mobile visual parity checks pass
- [ ] All functional checks pass
- [ ] `roadmap.md` Phase 1 tasks ticked off
- [ ] PR description references this validation file
