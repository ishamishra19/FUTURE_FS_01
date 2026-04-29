<<<<<<< HEAD
# Isha Portfolio

A modern personal portfolio web app built with React, Vite, TanStack Router, Tailwind CSS, Supabase, and Resend.

## Tech Stack

=======
# FUTURE_FS_01

# Isha Portfolio
A modern personal portfolio web app built with React, Vite, TanStack Router, Tailwind CSS, Supabase, and Resend.

## Tech Stack
>>>>>>> 2f947ea2bc4ee08c1e65f13331b008f9672ed992
- React 19 + TypeScript
- Vite 7
- TanStack Router + TanStack Query
- Tailwind CSS 4 + Radix UI
- Supabase (data/auth integration)
- Resend (contact email delivery)

## Project Structure
<<<<<<< HEAD

=======
>>>>>>> 2f947ea2bc4ee08c1e65f13331b008f9672ed992
```txt
src/
  components/      # Reusable UI components
  hooks/           # Custom React hooks
  integrations/    # Third-party integrations (e.g., Supabase)
  lib/             # Utilities/helpers
  routes/          # Route pages (about, projects, skills, contact)
```

## Prerequisites
<<<<<<< HEAD

=======
>>>>>>> 2f947ea2bc4ee08c1e65f13331b008f9672ed992
- Node.js 18+ (recommended: latest LTS)
- npm

## Installation
<<<<<<< HEAD

=======
>>>>>>> 2f947ea2bc4ee08c1e65f13331b008f9672ed992
```bash
npm install
```

## Environment Variables
<<<<<<< HEAD

Create a `.env` file in the project root:

=======
Create a `.env` file in the project root:
>>>>>>> 2f947ea2bc4ee08c1e65f13331b008f9672ed992
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
<<<<<<< HEAD

Do not commit real keys or secrets to version control.

## Run Locally

```bash
npm run dev
```

Default Vite URL is usually:

- `http://localhost:8080/` (or next available port if occupied)

## Available Scripts

=======
Do not commit real keys or secrets to version control.

## Run Locally
```bash
npm run dev
```
Default Vite URL is usually:
- `http://localhost:8080/` (or next available port if occupied)
  
## Available Scripts
>>>>>>> 2f947ea2bc4ee08c1e65f13331b008f9672ed992
- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run build:dev` - create development-mode build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks
- `npm run format` - run Prettier formatting
<<<<<<< HEAD

## Build for Production

=======
  
## Build for Production
>>>>>>> 2f947ea2bc4ee08c1e65f13331b008f9672ed992
```bash
npm run build
npm run preview
```

## Deployment Notes
<<<<<<< HEAD

This project includes Cloudflare-related tooling (`@cloudflare/vite-plugin`, `.wrangler/`, `wrangler.jsonc`), so it can be adapted for Cloudflare deployment workflows if needed.

## License

=======
This project includes Cloudflare-related tooling (`@cloudflare/vite-plugin`, `.wrangler/`, `wrangler.jsonc`), so it can be adapted for Cloudflare deployment workflows if needed.

## License
>>>>>>> 2f947ea2bc4ee08c1e65f13331b008f9672ed992
This project is for personal portfolio use. Add a license section if you plan to open-source it.
