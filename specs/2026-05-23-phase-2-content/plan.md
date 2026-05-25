# Plan — Phase 2: Content Completeness & Accuracy

> Branch: `phase-2/content`
> Each group should be committed separately so progress is reversible and reviewable.
> All shell commands run inside the container: `docker exec alphawolf <command>`

---

## Group 1 — Remove Testimonials & Customers

1.1 Delete `components/Testimonials/Testimonials.tsx`
1.2 Delete `components/Customers/Customers.tsx`
1.3 Remove all commented-out imports and JSX references to these components in `app/page.tsx`
1.4 Verify build still passes: `docker exec alphawolf npm run build`

---

## Group 2 — Update About Me

2.1 Rewrite the bio paragraphs in `components/Aboutme/Aboutme.tsx` with the updated text
  - Reflect current job title, focus areas, and Ireland/global career target
  - Keep tone personal and professional; first person
2.2 Update the programming language list in the chevron grid if the skill set has changed
2.3 Visual check at `http://localhost:3000` — two-column layout, profile image, list formatting

---

## Group 3 — Update Experience

3.1 Fix typo "Software Develper" → "Software Developer" and any other copy errors in `components/Experience/Experience.tsx`
3.2 Add any new role entries after Aug 2023, following the existing pattern:
  - `<h4>` job title with optional linked employer name
  - `<h5>` date range in `text-gray-500`
  - `<p>` description paragraph
  - `<List>` with bullet points
3.3 Verify all date ranges are accurate
3.4 Visual check — all entries render with correct spacing and chevron markers

---

## Group 4 — Populate & Enable Skilled Tools

4.1 Rewrite `components/SkilledTools/SkilledTools.tsx` with the real toolset
  - Use the same card style as other sections: `border border-brand-teal`, `rounded-3xl md:rounded-[40px]`, `p-8 md:p-12`
  - Group tools into logical categories (e.g. Frontend, Mobile, Backend, DevOps)
  - Use a responsive grid or tag-style list — maintain visual consistency
4.2 Add `id="skilled-tools"` to the section wrapper so smooth-scroll navigation works
4.3 Uncomment the `SkilledTools` import and JSX in `app/page.tsx`
4.4 Add `{ label: 'Skills', target: 'skilled-tools' }` to the `pages` array in `app/page.tsx`
4.5 Visual check — section renders correctly at all breakpoints

---

## Group 5 — Replace Resume PDF

5.1 Replace `public/documents/resume.pdf` with the updated CV file (same filename)
5.2 Open `http://localhost:3000`, click "Read more on the resume" in the About Me section
5.3 Verify the correct document opens in a new tab

---

## Group 6 — Final Review & Build

6.1 Run a full build: `docker exec alphawolf npm run build`
6.2 Open `http://localhost:3000` and do a complete visual walkthrough at desktop (1280px), tablet (768px), and mobile (375px)
6.3 Confirm zero commented-out component imports remain in `app/page.tsx` (unless documented as deferred)
6.4 Update `specs/roadmap.md` — tick off all Phase 2 tasks
