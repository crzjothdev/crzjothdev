# Requirements — Phase 1: Foundation Migration

> Roadmap reference: [Phase 1 — TypeScript & App Router Migration](../roadmap.md)
> Mission reference: [mission.md](../mission.md)
> Stack reference: [tech-stack.md](../tech-stack.md)

---

## Scope

This phase completes the full foundational migration in a single branch (`phase-1/foundation-migration` based off `upgrade`). No content changes, no visual design changes — only technology replacement. Three migrations happen together:

| Migration | From | To |
|---|---|---|
| Language | JavaScript (`.js`) | TypeScript (`.tsx` / `.ts`) |
| Routing | `pages/` (Pages Router) | `app/` (App Router) |
| Styling | Material UI v5 + Emotion | Tailwind CSS |

**Out of scope for this phase:**
- Any content updates (text, images, resume PDF)
- Visual redesign or layout changes
- New sections or features
- Test suite (Phase 4)
- SEO metadata (Phase 5)

---

## Decisions

### All three migrations in one branch
Doing TS, App Router, and Tailwind separately would require two interim states where the codebase has mixed styling systems or mixed routing patterns — both hard to validate and reason about. One branch eliminates that overlap.

### Layout-first migration order
The app layout and shell components (AppBar, Footer, Section wrapper) establish the shared structure and Tailwind config baseline. All other components can then be migrated in sequence with the layout contract already in place.

### Pixel-perfect visual acceptance
The goal of this phase is technology replacement, not design improvement. The end result must match the current site visually at all three breakpoints. Any visual deviation introduced during migration is a bug, not a design choice — design changes belong to Phase 3.

### Tailwind dark mode strategy
Use Tailwind's `class` strategy (`darkMode: 'class'` in `tailwind.config.ts`). A `dark` class on the `<html>` element controls the theme. Persistence via `localStorage`. This replaces the MUI `createTheme` approach and allows Phase 3 to wire up the toggle without further architectural changes.

### react-scroll compatibility
`react-scroll` works independently of MUI — it targets DOM element IDs. It is retained as-is. The `id` attributes on section containers must be preserved during migration.

### Google Tag Manager
`react-gtm-module` is framework-agnostic. The GTM initialisation in `_app.js` moves to the App Router root layout (`app/layout.tsx`) using a `'use client'` wrapper component.

---

## Context

- Branch `upgrade` already contains early TypeScript files (`AppBar.tsx`, `AppBar.test.tsx`, `app/next/layout.tsx`, `app/next/page.tsx`). These files are the starting point; they should be reviewed and brought in line with this spec before being considered done.
- The current live site uses MUI's `lightTheme`. All existing spacing, border-radius, and colour values used in MUI `sx` props must be translated to equivalent Tailwind utilities — not approximated.
- The accent colour throughout the current site is `#20909a` (teal border on all section cards). This must be registered as a custom Tailwind colour token (e.g., `brand-teal`).
- Roboto font (`@fontsource/roboto`) is replaced by Tailwind's font configuration. Font choice is deferred to Phase 3; for this phase, use the system sans-serif stack as the fallback.

---

## Constraints

- `next build` must succeed with `output: 'standalone'` — Docker production build depends on this.
- Zero TypeScript errors; `strict: true` in `tsconfig.json`.
- No MUI or Emotion packages may remain in `package.json` after this phase.
- No `pages/` directory may remain after this phase.
- All section `id` attributes must be preserved exactly (`about-me`, `experience`, `projects`, `contact`) so that react-scroll navigation continues to work.

---

## Execution Environment

**All commands in this phase run inside the Docker container, not on the host.**

The project mounts the source directory into the container (`./:/app`) but isolates `node_modules` via an anonymous volume. This means:

- Editing files on the host is immediately reflected inside the container (no rebuild needed for source changes).
- Changes to `package.json` (adding/removing packages) require running `npm install` inside the container — the host's `node_modules` is not used.
- Build, type-check, and test commands must be prefixed with `docker exec <container_name>`.

| Container | Name |
|---|---|
| Current running container | `alpha-wolf` (legacy `docker-compose.yaml`) |
| Target container name | `alphawolf` (current `compose.yaml`) |

Reference: `specs/tech-stack.md` → Development Environment section.
