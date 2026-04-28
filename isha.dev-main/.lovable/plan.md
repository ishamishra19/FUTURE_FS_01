
# Isha Mishra — Personal Portfolio Website

A bento-grid portfolio for **Isha Mishra**, frontend developer (B.Tech CSE, C.V. Raman Global University). Editorial typography meets dev energy: Instrument Serif headings, Work Sans body, on a deep navy + mint accent palette.

## Pages (separate routes for SEO)

- **Home (`/`)** — Bento hero with name, role, location, intro, primary CTAs, and a glanceable grid of skills, current focus, contact.
- **About (`/about`)** — Expanded bio, education timeline (CGPA 8.03), coursework, certifications (NPTEL, Google UX Design), interests.
- **Projects (`/projects`)** — Bento grid of project cards. Each opens a detail page.
  - Online Chatbot-Based Ticketing System (SIH 2024)
  - Web-Based Inventory Management Application (HackTheStack 2026)
- **Project detail (`/projects/$slug`)** — Problem, role, stack, highlights, outcomes.
- **Skills (`/skills`)** — Grouped: Languages, Frontend, Tools, Databases, with proficiency framing.
- **Contact (`/contact`)** — Form (name / email / message) with **real email delivery** to Isha via Lovable Emails, plus quick links (email, phone, LinkedIn, GitHub).

## Visual direction

- **Palette**: Deep navy `#0d1b2a` background, forest `#1b4332` surfaces, mint `#2dd4a8` primary accent, neon mint `#73ffb8` highlights, off-white text.
- **Typography**: Instrument Serif (large editorial headings, italic accents) + Work Sans (UI/body).
- **Layout language**: Bento grid — varied tile sizes (1×1, 2×1, 2×2), rounded-2xl cards, subtle mint borders, soft glow on hover.
- **Motion**: Tile lift on hover, mint underline sweep on links, subtle fade-up on scroll. Restrained, not flashy.
- **Details**: Animated mint cursor dot in hero, monospace tags for tech stack chips, "available for opportunities" status pill.

## Hero (bento)

- Big italic serif: *"Hi, I'm Isha."* + role line "Frontend developer crafting interactive web experiences."
- Tile: location (Bhubaneswar, India)
- Tile: status (open to internships / opportunities)
- Tile: quick stats (CGPA 8.03, 2 hackathons)
- Tile: tech marquee (React, Next.js, TS, Tailwind…)
- CTAs: "View projects" → `/projects`, "Get in touch" → `/contact`

## Contact form behavior

- Validated with Zod (name, email, 10–1000 char message)
- On submit: stores submission in DB + sends two emails via Lovable Emails:
  1. **Notification to Isha** (ishamishra0619@gmail.com) with the message
  2. **Confirmation to sender** ("Thanks for reaching out")
- Success/error toasts via Sonner

## SEO & polish

- Per-route `<title>`, description, og:title, og:description
- Sitemap-friendly route structure
- Mobile-first responsive bento (collapses to single column under 768px)
- 404 + error boundaries already in shell

## Tech setup

- TanStack Start file-based routes, Tailwind v4 design tokens updated to the mint/navy palette
- Lovable Cloud enabled for the contact form (DB table + Lovable Emails infra)
- All resume data (skills, projects, education, certifications, contact) wired in from her PDF
