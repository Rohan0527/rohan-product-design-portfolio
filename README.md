# Rohan Gaikwad — Portfolio

A portfolio for **Rohan Gaikwad**, focused on UI/UX and product design, user research, and Python web applications.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it, so content changes stay consistent across the site.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` |
| Project highlights | `projectHighlights` (derived from `projects`) |
| Skills and their notes | `skillCategories`, `skillEvidence` |
| Design journey | `seasons` |
| Design focus row | `topPicks` |
| Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Designer / Creative) | `viewerProfiles` |
| Opening title text | `profile.introLabel`, `profile.portfolioLabel` |

**Photo:** replace `pic1.jpeg` and `pic.png`, then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## What's inside

```
src/
  data/portfolio.ts        ← source of truth for portfolio content
  App.tsx                  ← opening, portfolio-view selection, and overlays
  components/
    OpeningSequence        ← animated introduction
    ProfileSelector        ← portfolio-view selection (changes section order only)
    Navbar                 ← hide-on-scroll nav, profile switcher, mobile menu
    Hero                   ← billboard: parallax portrait, particles, light streaks, floating chips
    PlayIntro              ← ▶ Play Intro: zoom into portrait → highlight reel (pause, ← →, tap zones)
    ContinueWatching       ← cards with real progress bars
    About                  ← profile and education details
    Journey stages         ← process stages and focus areas
    Projects / ProjectCard ← pinned cards on desktop, swipe rail on touch
    ProjectModal           ← full-screen project overlay with a shared-element transition
    TopPicks               ← design-focus row
    Skills                 ← design skill genres; each card shows context
    Achievements           ← project highlights
    ResumeViewer/ResumeModal ← designed resume sheet, PDF viewer, download
    FinalCTA               ← contact links and email CTA
    CustomCursor, fx.tsx   ← cursor states, magnetic buttons, 3D tilt, text reveals, particles
  hooks/                   ← Lenis smooth scroll + scroll lock, media queries, section progress
scripts/build-images.mjs   ← portrait/share-image pipeline (sharp)
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Projects

- **Manufacturing ERP & Inventory Automation System** — Python, Flask, SQLite, SQL, Pandas, CSV
- **Employee Attendance & Leave Automation System** — Python, Flask, SQLite, SQL, HTML, CSS, JavaScript
- **Purchase Order Management System** — Python, Flask, SQLite, SQL, HTML, CSS, JavaScript

## Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll, custom cursor, tilt, particles, grain and the pinned horizontal scroll turn off, and the opening jumps straight to its final frame.
- Hover effects only run on devices with a precise pointer. Touch devices get tap interactions and native swipe rails.
- The custom cursor appears only with a mouse or trackpad.
- Overlays close with Esc, and the highlight reel supports Space and the ← → keys.
- Portraits are responsive WebP files (25–90 KB). Overlays are code-split, and particles pause when they're off screen.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, ← and → change slides, Esc closes.
- **Project and resume overlays:** Esc closes.
