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

The bio text in `components/Aboutme/Aboutme.tsx` needs to be rewritten. The two `<p>` paragraphs should be replaced with the following suggested copy (adjust wording slightly during implementation if needed, but preserve the substance and tone):

**Paragraph 1 — Introduction & current role:**
> Hello, I'm Angelo! I'm a software engineer based in Dublin, Ireland, with a strong focus on full-stack development and AI-driven automation. Since the start of my career I have been dedicated to continuously learning and applying modern software practices — from architecting web platforms to designing intelligent workflows that help businesses operate more efficiently. Currently, as Principal Software Engineer at LDS Carpentry Ltd, I am building the company's entire digital infrastructure from scratch: the public website, automated quotation systems, project administration tooling via Jira, and an ERP platform currently in active development.

**Paragraph 2 — Approach & ambition:**
> Much of my time is invested in bridging the gap between engineering capability and real business value — finding practical ways to automate manual processes, reduce friction, and deliver software that genuinely moves the needle. I thrive on ownership and end-to-end responsibility, and I am actively seeking opportunities with ambitious teams in Ireland and globally.

**Programming language / skills list** — replace the current six-item grid with:
- TypeScript
- JavaScript
- C#
- React / Next.js
- Python
- Java

The "Read more on the resume" link at the end of the list stays unchanged.

**Target market:** Ireland / global remote (already reflected in the copy above; aligns with `specs/mission.md`).

---

## 2. Experience

The Experience section in `components/Experience/Experience.tsx` needs to be updated as follows.

### New entry — add at the top (most recent first)

**Principal Software Engineer at LDS Carpentry Ltd** — Mar 2025 – Present

Suggested description paragraph:
> As the sole software engineer, I am responsible for designing and building the company's complete digital presence and internal tooling from the ground up. This includes the public website, an automated quotation system that replaced a manual paper-based process, project administration workflows via Jira, and an ERP platform currently in active development to centralise operations across the business.

Suggested bullet points:
- Design and develop the company website end-to-end, from architecture to deployment
- Automate business-critical processes including quotation generation and project tracking
- Implement Jira for project administration and team workflow management
- Lead the architecture and development of a custom ERP platform

### Existing entry — External Consultant at JETSTEREO S.A.

The current date label is "Aug 2023" with no end date. **Leave it as "Aug 2023" — this is intentional.** The engagement was brief (~2 months of freelance work) and showing only the start month avoids drawing attention to the short duration while remaining accurate. Do not add an end date. The description and bullet points are acceptable — fix grammar as needed.

### Freelance period (Aug 2023 – Feb 2025)

This period covers the transition to Ireland, English language study, and independent freelance work. It is professionally relevant and should be represented — omitting it leaves an unexplained 18-month gap. Add an entry:

**Freelance Software Developer** — Sep 2023 – Feb 2025

Suggested description paragraph:
> Relocated to Dublin, Ireland, to advance English language proficiency and expand professional networks in the European market. During this period I continued to apply and grow my engineering skills through independent freelance projects, while immersing myself in the Irish tech community.

Suggested bullet points:
- Delivered freelance web development projects for independent clients
- Continued professional development in modern frontend and automation technologies
- Relocated to Ireland and established a professional base in the Dublin market

### Copy fixes across all existing entries

- Correct "Software Develper" → "Software Developer" in the JETSTEREO S.A. full-time entry
- Audit all paragraphs for grammatical consistency (subject–verb agreement, tense uniformity)
- Verify all date ranges are accurate against the actual employment history

---

## 2. Experience

The Experience section in `components/Experience/Experience.tsx` needs to be reviewed for:

- **New roles after Aug 2023:** I started working at LDS Carpentry Ltd since March 2025 as a Principal Software Engineer. After that time I worked as a freelancer while I was study English in Ireland and also as a barista, however the last isn't relevant for my professional carrer as Computing Professional.
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
