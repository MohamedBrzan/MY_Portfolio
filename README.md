# Mohamed Mahmoud — Portfolio

A modern portfolio website built with React 19, TypeScript, Vite 6, and SCSS.

[Live Demo](https://portfolio-becv.onrender.com/)

![Project Image](https://github.com/MohamedBrzan/MY_Portfolio/blob/Master/public/portfolio.png)

## Tech Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite 6** with route-level code splitting
- **SCSS** with modern compiler API
- **React Router 7** for client-side routing
- **react-helmet-async** for per-page SEO

## Features

- Responsive design with custom cursor (desktop only)
- Lazy-loaded routes and images
- Project showcase with detail modal
- Contact form powered by Formspree
- Full SEO (Open Graph, Twitter cards, meta tags)
- Accessibility: skip-to-content, ARIA, keyboard navigation, focus traps
- Docker deployment with nginx security headers
- CI/CD via GitHub Actions

## Getting Started

```bash
git clone https://github.com/MohamedBrzan/MY_Portfolio.git
cd MY_Portfolio
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Type-check + production build |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run tests |
| `pnpm format` | Format code with Prettier |
| `pnpm preview` | Preview production build |

## Environment Variables

Create a `.env` file based on `.env.example`:

```
VITE_FORMSPREE_ID=your_formspree_id
```

## Docker

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
