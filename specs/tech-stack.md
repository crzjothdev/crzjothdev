# Tech Stack

Current state as of May 2026. Phase 1 migration to App Router + TypeScript + Tailwind CSS is complete.

---

## Framework

| Item | Detail |
|---|---|
| **Next.js** | v15 — App Router |
| **React** | v18.3 |
| **Output mode** | `standalone` (configured in `next.config.js`) |
| **Node.js** | v23 (dev container base image: `node:23-alpine`) |

---

## Language

| Item | Detail |
|---|---|
| **TypeScript** | Primary language — all components `.tsx`, config `.ts` |
| **JavaScript** | Removed — no `.js` files remain in `components/` or `app/` |

---

## UI & Styling

| Item | Detail |
|---|---|
| **Tailwind CSS** | v4 — utility-first CSS, active styling system |
| **PostCSS** | via `@tailwindcss/postcss` plugin (`postcss.config.mjs`) |
| **Custom tokens** | `--color-brand-teal: #20909a`, `--color-footer-dark: #05262b` defined in `styles/globals.css` via `@theme {}` |
| **Dark mode** | Configured via `@custom-variant dark` (class strategy) — toggle wired up in Phase 3 |
| **clsx** | Utility for conditional class composition |
| **Typography** | System sans-serif stack for Phase 1; font choice finalised in Phase 3 |

---

## Navigation & UX

| Item | Detail |
|---|---|
| **react-scroll** | Smooth-scroll to in-page sections by DOM element ID |
| **Responsive layout** | Tailwind breakpoints (`md:`, `lg:`); content constrained to 70% (md) / 60% (lg) on wide screens |

---

## Analytics

| Item | Detail |
|---|---|
| **Google Tag Manager** | Integrated via `react-gtm-module`; initialised in `app/gtm-provider.tsx` (`'use client'`) |

---

## Content Sections

| Section | Status |
|---|---|
| AppBar (navigation) | Active |
| Parallax hero | Active |
| About Me | Active |
| Experience | Active |
| Projects | Active |
| Contact | Active |
| Skilled Tools | Migrated, commented out in page |
| Customers | Migrated, commented out in page |
| Testimonials | Migrated, commented out in page |
| Social links | Active (in Footer and Parallax) |
| Disclaimers | Active (in Footer) |

---

## Development Environment

The project runs entirely inside a Docker container. **All development commands must be run via `docker exec`, not on the host.**

| Item | Detail |
|---|---|
| **Dev container name** | `alphawolf` (defined in `compose.yaml`) |
| **Dev Dockerfile** | `Dockerfile.dev` — base image `node:23-alpine`, runs `npm run dev` |
| **Compose file** | `compose.yaml` |
| **Volume mount** | `./:/app` — host project directory is live-synced into the container |
| **node_modules** | Anonymous volume at `/app/node_modules` — isolated from host; changes to `package.json` require running `npm install` inside the container |
| **Port** | `3000:3000` — app accessible at `http://localhost:3000` |
| **Run a command** | `docker exec alphawolf <command>` — e.g. `docker exec alphawolf npm run build` |

---

## Infrastructure & DevOps

| Item | Detail |
|---|---|
| **Docker (dev)** | `Dockerfile.dev` — `node:23-alpine`, mounts source, runs `next dev` |
| **Docker (prod)** | `Dockerfile.prod` — multi-stage build, `standalone` output, production-ready image |
| **Docker Compose** | `compose.yaml` for local dev |
| **Jenkins** | `Jenkinsfile` defines a declarative pipeline — Deploy stage in early development |
| **CI/CD** | Jenkins builds from Dockerfile; full pipeline wired up in Phase 6 |

---

## Testing

| Item | Detail |
|---|---|
| **Jest** | v29 with `jest-environment-jsdom` |
| **React Testing Library** | `@testing-library/react` v16 |
| **TypeScript support** | `ts-jest` + `@types/jest` |
| **Run tests** | `docker exec alphawolf npm test` |

---

## Code Quality

| Item | Detail |
|---|---|
| **ESLint** | v8 with `eslint-config-next` |
| **TypeScript strict mode** | `strict: true` in `tsconfig.json` |
| **React strict mode** | `reactStrictMode: true` in `next.config.js` |

---

## Assets

| Item | Detail |
|---|---|
| **Images** | `.webp` format (profile, logo, projects, parallax background) |
| **Icons** | SVG language icons (JS, React, PHP, Python, Java, C++, C#, Rust) |
| **Documents** | Resume PDF at `/documents/resume.pdf` |
| **Favicon** | `.ico` at `/images/favicon.ico` |
