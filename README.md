# FUTURE_FS_01

# Isha Portfolio
A modern personal portfolio web app built with React, Vite, TanStack Router, Tailwind CSS, Supabase, and Resend.

## Tech Stack
- React 19 + TypeScript
- Vite 7
- TanStack Router + TanStack Query
- Tailwind CSS 4 + Radix UI
- Supabase (data/auth integration)
- Resend (contact email delivery)

## Project Structure
```txt
src/
  components/      # Reusable UI components
  hooks/           # Custom React hooks
  integrations/    # Third-party integrations (e.g., Supabase)
  lib/             # Utilities/helpers
  routes/          # Route pages (about, projects, skills, contact)
```

## Prerequisites
- Node.js 18+ (recommended: latest LTS)
- npm

## Installation
```bash
npm install
```

## Environment Variables
Create a `.env` file in the project root:
```env
SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PROJECT_ID=your_supabase_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
VITE_SUPABASE_URL=your_supabase_project_url
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```
Do not commit real keys or secrets to version control.

## Run Locally
```bash
npm run dev
```
Default Vite URL is usually:
- `http://localhost:8080/` (or next available port if occupied)
  
## Available Scripts
- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run build:dev` - create development-mode build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks
- `npm run format` - run Prettier formatting
  
## Build for Production
```bash
npm run build
npm run preview
```

## Deployment Notes
This project includes Cloudflare-related tooling (`@cloudflare/vite-plugin`, `.wrangler/`, `wrangler.jsonc`), so it can be adapted for Cloudflare deployment workflows if needed.

## License
This project is for personal portfolio use. Add a license section if you plan to open-source it.
