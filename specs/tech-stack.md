# Tech Stack

Reverse-engineered from the project as of May 2026. Branch `upgrade` is an active migration toward App Router + TypeScript + Tailwind CSS (replacing MUI).

---

## Framework

| Item | Detail |
|---|---|
| **Next.js** | v13 (Pages Router — currently active) |
| **App Router** | In progress on `upgrade` branch |
| **React** | v18.2 |
| **Output mode** | `standalone` (configured in `next.config.js`) |
| **Node.js** | v16 (Dockerfile base image: `node:16-alpine`) |

---

## Language

| Item | Detail |
|---|---|
| **JavaScript** | Current primary language (`.js` files throughout) |
| **TypeScript** | Being introduced on `upgrade` branch (`.tsx` files appearing in `app/` and `components/`) |

---

## UI & Styling

| Item | Detail |
|---|---|
| **Tailwind CSS** | Utility-first CSS framework — target styling system (replacing MUI) |
| **Material UI (MUI)** | v5 — current styling system, being removed during `upgrade` migration |
| **Emotion** | CSS-in-JS engine used by MUI — being removed alongside MUI |
| **clsx** | Utility for conditional class composition — kept, pairs well with Tailwind |
| **Dark mode** | To be implemented via Tailwind's `dark:` variant strategy (class-based toggle) |
| **Typography** | Font choice to be defined during design refresh phase |

---

## Navigation & UX

| Item | Detail |
|---|---|
| **react-scroll** | Smooth-scroll to in-page sections |
| **Responsive layout** | Tailwind breakpoints (`md:`, `lg:`); content constrained to 70% (md) / 60% (lg) on wide screens |

---

## Analytics

| Item | Detail |
|---|---|
| **Google Tag Manager** | Integrated via `react-gtm-module` |

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
| Skilled Tools | Implemented, commented out |
| Customers | Implemented, commented out |
| Testimonials | Implemented, commented out |
| Social links | Component exists (`components/Social/`) |
| Disclaimers | Component exists (`components/Disclaimers/`) |

---

## Infrastructure & DevOps

| Item | Detail |
|---|---|
| **Docker** | Multi-stage build (`Dockerfile`, `Dockerfile.prod`) using `node:16-alpine` |
| **Docker Compose** | `docker-compose.yaml` for local/prod orchestration; container named `alpha-wolf` |
| **Jenkins** | `Jenkinsfile` defines a declarative pipeline with a Deploy stage (early stage) |
| **CI/CD** | Jenkins builds from Dockerfile; deployment pipeline is in early development |

---

## Testing

| Item | Detail |
|---|---|
| **Jest** | Installed as of commit `82ea917` |
| **Test files** | `AppBar.test.tsx` exists on `upgrade` branch (early) |

---

## Code Quality

| Item | Detail |
|---|---|
| **ESLint** | v8.12 with `eslint-config-next` |
| **Strict mode** | `reactStrictMode: true` in `next.config.js` |

---

## Assets

| Item | Detail |
|---|---|
| **Images** | `.webp` format (profile, logo, projects, parallax background) |
| **Icons** | SVG language icons (JS, React, PHP, Python, Java, C++, C#, Rust) |
| **Documents** | Resume PDF available at `/documents/resume.pdf` |
| **Favicon** | `.ico` at `/images/favicon.ico` |
