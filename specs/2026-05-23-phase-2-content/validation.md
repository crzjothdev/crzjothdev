# Validation — Phase 2: Content Completeness & Accuracy

> Acceptance bar: **accurate, complete content** with no placeholder text and no broken references.
> All checks must pass before this branch can be merged to `sdd` and then `main`.
> All CLI commands run inside the container: `docker exec alphawolf <command>`

---

## 1. Build & Type Safety

| Check | Command | Pass condition |
|---|---|---|
| TypeScript compilation | `docker exec alphawolf npm run build` | Zero type errors |
| Next.js build | `docker exec alphawolf npm run build` | Exits with code 0 |
| Testimonials deleted | `docker exec alphawolf find components/Testimonials -name "*.tsx"` | No such file or directory |
| Customers deleted | `docker exec alphawolf find components/Customers -name "*.tsx"` | No such file or directory |
| No stale imports | `docker exec alphawolf grep -r "Testimonials\|Customers" app/` | No results |

---

## 2. Content Accuracy — About Me

Open `http://localhost:3000` and inspect the About Me section:

- [ ] Bio text reflects current job title and focus area (not the old generic placeholder copy)
- [ ] Ireland / global remote target is clearly communicated
- [ ] Programming language list is accurate and up to date
- [ ] "Read more on the resume" link opens the updated PDF in a new tab
- [ ] No typos in bio paragraphs

---

## 3. Content Accuracy — Experience

- [ ] No "Software Develper" typo (check all entries)
- [ ] All date ranges are correct
- [ ] Any new roles added after Aug 2023 are present and correctly formatted
- [ ] Chevron markers are visible on all list items

---

## 4. Skilled Tools Section

- [ ] Section is visible on the page (not commented out)
- [ ] Tools listed are real and current — no placeholder items
- [ ] Section has `id="skilled-tools"` in the DOM
- [ ] "Skills" nav link in the AppBar scrolls to the section
- [ ] Visual style matches other section cards (teal border, same padding and border-radius)
- [ ] Responsive: correct layout at mobile (375px), tablet (768px), desktop (1280px+)

---

## 5. Resume PDF

- [ ] Clicking "Read more on the resume" in About Me opens `/documents/resume.pdf` in a new tab
- [ ] The PDF is the current version (check a date or role that would only be in the updated CV)

---

## 6. No Placeholder / Stale Content

- [ ] Zero occurrences of "lorem ipsum" or obvious placeholder text anywhere on the page
- [ ] No commented-out component imports remain in `app/page.tsx` (unless documented as deferred in `requirements.md`)
- [ ] All section cards render without empty or blank content areas

---

## 7. Functional Regression

These must still pass from Phase 1:

| Feature | How to test | Pass condition |
|---|---|---|
| Smooth-scroll navigation | Click each nav link in AppBar (including Skills if added) | Page scrolls to correct section |
| Section IDs preserved | Inspect DOM | `id="about-me"`, `id="experience"`, `id="projects"`, `id="contact"` all present |
| Contact button | Click "Contact Me" | Opens mail client with correct address |
| Google Tag Manager | Network tab → filter `gtm.js` | GTM fires on page load |

---

## 8. Merge Checklist

- [ ] All build & type safety checks pass
- [ ] About Me content is accurate and typo-free
- [ ] Experience content is accurate and typo-free
- [ ] Skilled Tools section is visible, populated, and consistent with other sections
- [ ] Resume PDF is the current version
- [ ] Testimonials and Customers components are deleted
- [ ] No commented-out component imports remain (or are documented as deferred)
- [ ] All functional regression checks pass
- [ ] `roadmap.md` Phase 2 tasks ticked off
- [ ] PR description references this validation file
