# YourSite Marketing Website

A high-performance marketing website built with modern web technologies.

## Tech Stack

- **Astro 5** — Static site generator with island architecture
- **Tailwind CSS v3** — Utility-first CSS framework
- **GSAP** — Professional-grade animations with ScrollTrigger
- **Astro Content Collections** — Type-safe blog with MDX
- **Starlight** — Documentation site (integrated as Astro plugin)
- **TypeScript** — Full type safety throughout
- **Vercel** — Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/iabhi-px/ck-website.git
cd ck-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── landing/          # Landing page sections
│   ├── blog/             # Blog components
│   └── shared/           # Shared components (Footer, SEO, etc.)
├── content/
│   ├── blog/             # MDX blog posts
│   └── docs/             # Starlight documentation pages
├── layouts/              # Page layouts
├── pages/                # Astro pages and routes
├── lib/                  # GSAP helpers and TypeScript types
└── styles/               # Global CSS and Tailwind config
```

## Key Features

- **Landing page** with animated hero, features grid, testimonials, and CTA
- **Blog** with Content Collections, MDX support, and tag filtering
- **Documentation** powered by Starlight with full sidebar navigation
- **Scroll animations** using GSAP ScrollTrigger
- **SEO optimized** with Open Graph tags, sitemap, and semantic HTML
- **Responsive** design with mobile-first approach
- **Performance** focused — ships minimal JavaScript

## Deployment

Configured for Vercel. Push to main and it deploys automatically.

```bash
# Or deploy manually
npx vercel
```

## License

ISC
