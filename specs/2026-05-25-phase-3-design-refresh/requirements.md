# Phase 3 — Modern Design Refresh: Requirements

## Scope

Elevate the visual quality of the site to meet the standard expected in the Ireland / global remote market. This phase covers design language, layout consistency, dark mode, motion, and asset quality. Content and copy are **not** changed here — those belong to Phase 2.

---

## Fixed Constraints

These are already in place and must not be changed by this phase.

| Constraint | Value |
|---|---|
| Brand teal | `#20909a` (`--color-brand-teal`) |
| Footer dark | `#05262b` (`--color-footer-dark`) |
| Styling system | Tailwind CSS v4 — utility classes only, no inline styles, no CSS Modules |
| Dark mode strategy | Class strategy via `@custom-variant dark` — toggled by adding/removing `dark` class on `<html>` |
| Framework | Next.js 15, App Router, React 18, TypeScript strict |
| Component language | `.tsx` only — no `.js` files in `components/` or `app/` |

---

## Open Decisions

These must be resolved during implementation. Document the final choice in `tech-stack.md` once made.

| Decision | Options / Notes |
|---|---|
| Web font | Inter, Geist, or system sans-serif stack — choose one; use `next/font` for self-hosting |
| Spacing scale | 4px base grid is conventional with Tailwind; confirm or deviate consciously |
| Hero tagline copy | Short, first-person, Ireland/global market aware — e.g. "Full-stack developer. Available for hire." |
| Hero CTA target | Scrolls to Projects, Experience, or Contact — decide which conversion matters most |
| Animation library | Vanilla IntersectionObserver, Framer Motion, or `tailwindcss-animate` — pick the lightest that fits |
| Card style | Border only, shadow only, or border + subtle shadow — must be consistent across all card-like components |

---

## Out of Scope

- Any changes to section content, job descriptions, bio text, or project descriptions
- Adding or removing sections (no new sections, no deletions beyond what Phase 2 already decided)
- SEO meta tags, Open Graph, structured data (Phase 5)
- Test suite changes (Phase 4)
- CI/CD pipeline (Phase 6)
- Blog, internationalisation, CMS (Backlog)

---

## Context

The target audience includes recruiters, potential clients, and fellow developers. The site needs to project confidence and polish consistent with a competitive international market. Refer to `specs/mission.md` for the full audience and success criteria breakdown.

Dark mode is a strong signal to fellow developers and technically-minded evaluators that the site is built with care.
