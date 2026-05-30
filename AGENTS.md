# Project Conventions

## Tech Stack
- React 19 + TypeScript (strict mode)
- Vite 6 + @vitejs/plugin-react
- SCSS with modern-compiler API (`@use`/`@forward`, not `@import`)
- React Router 7 (component-based routing)
- pnpm (package manager)

## Commands
- `pnpm dev` — dev server
- `pnpm build` — TypeScript check + production build
- `pnpm lint` — ESLint
- `pnpm test` — Vitest
- `pnpm format` — Prettier

## Code Style
- Single quotes, semicolons, trailing commas
- SCSS uses tabs, TSX/TS uses 2-space indent
- Named exports preferred; default exports for page components
- No direct DOM manipulation — use React state and context
- External links use `<a>`, internal use React Router `<Link>`/`<NavLink>`

## Architecture
- `src/contexts/` — React contexts (CursorContext)
- `src/components/` — shared components (ErrorBoundary, SEO, LoadingSpinner)
- `src/pages/` — route page components (each in own folder)
- `src/Scss/` — shared SCSS variables, mixins, class names
- Route-level code splitting via React.lazy + Suspense

## Environment Variables
- `VITE_FORMSPREE_ID` — Formspree endpoint for contact form
- Always prefix with `VITE_`
- See `.env.example`
