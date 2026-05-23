# Requirements — Phase 2: Content Completeness & Accuracy

> Branch: `phase-2/content`
> All shell commands run inside the container: `docker exec alphawolf <command>`

---

## Scope

Content-only phase. No layout changes, no new components (except enabling the existing Skilled Tools component). The goal is that every visible section of the site contains accurate, current information — zero placeholder text, zero stale copy.

---

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| Granularity | All sections in one PR | Simpler to review content holistically |
| Acceptance bar | Self-review | Visual walkthrough at 3 breakpoints before merge |
| Testimonials & Customers | **Remove permanently** | No real data available; not planned |
| Skilled Tools | **Populate & enable** | Real toolset to be listed; section was commented out |
| Projects | No changes this phase | Current entries are sufficient for now |
| Social links | No changes this phase | Footer/Parallax social links are correct |
| Resume PDF | **Replace** | Current PDF is outdated |

---

## 1. About Me

The bio text in `components/Aboutme/Aboutme.tsx` needs to be rewritten to reflect:

- **Current job title / focus area:** *(TBD — provide updated text before implementing)*
- **Target market:** Ireland / global remote roles (align with `specs/mission.md`)
- **Skills focus:** Frontend + mobile primary; backend and multi-purpose languages secondary
- **Tone:** Professional but personal; written in first person

The programming language list in the chevron grid should also be reviewed and updated if the current skill set has changed. Current list: JS, C#, PHP, Java, C++, Python.

---

## 2. Experience

The Experience section in `components/Experience/Experience.tsx` needs to be reviewed for:

- **New roles after Aug 2023:** *(TBD — list any new employer, title, date range, description, and bullet points before implementing)*
- **Copy fixes:** Correct "Software Develper" typo and any other grammatical issues in existing entries
- **Date accuracy:** Verify all date ranges are correct

Current entries:
- External Consultant at JETSTEREO S.A. — Aug 2023
- Software Developer at JETSTEREO S.A. — Oct 2019 – Jan 2022
- Software Developer at BANHCAFE — Sep 2022 – Nov 2022

---

## 3. Skilled Tools

The `components/SkilledTools/SkilledTools.tsx` component exists but is currently commented out in `app/page.tsx`.

Requirements:
- Populate the component with the **real current toolset** (frameworks, tools, platforms)
- Uncomment it in `app/page.tsx` so it renders between the Experience and Projects sections (or wherever it fits best visually)
- Add a corresponding nav link in the `pages` array in `app/page.tsx` if the section gets a stable `id`
- Maintain visual consistency with other section cards (brand-teal border, same padding/radius)

Suggested tool categories to cover (adjust to real usage):
- Frontend: Next.js, React, Tailwind CSS, TypeScript
- Mobile: React Native
- Backend: C#/.NET, PHP, Java
- DevOps: Docker, Jenkins, Git
- Other: PostgreSQL / databases used

---

## 4. Testimonials & Customers — Remove Permanently

Both components are to be **deleted**:

- `components/Testimonials/Testimonials.tsx`
- `components/Customers/Customers.tsx`

Any commented-out import or usage in `app/page.tsx` must also be removed.

---

## 5. Resume PDF

The file at `public/documents/resume.pdf` must be replaced with the current CV.

- Replace the file in place (same path — links already point to `/documents/resume.pdf`)
- Verify the link in `components/Aboutme/Aboutme.tsx` opens the correct document in a new tab

---

## Constraints

- No layout or style changes — this phase is content only
- All section `id` attributes must be preserved (`about-me`, `experience`, `projects`, `contact`)
- If Skilled Tools gets an `id`, add it to the `pages` nav array in `app/page.tsx`
- TypeScript strict mode remains on — no `any` types introduced
- No new packages required
