# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project for Deskwise (a rebranded Landio template) that uses HTML, CSS, and JavaScript. The site consists of:
- Static HTML pages for different sections (blog, contact, privacy, terms)
- CSS styling with design tokens and base styles
- JavaScript overrides for dynamic content replacement and branding
- Static assets (fonts, icons, images, videos)

## Development Commands

Since this is a static site without a package manager, use Python's built-in HTTP server for local development:

```bash
# Start local development server
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

The AGENTS.md file suggests standardizing on these commands when build tools are added:
- `make dev` → start local dev server
- `make build` → production build to `dist/`
- `make test` → run tests with coverage

## Architecture & Structure

### File Organization

The project follows this structure:
- Root-level HTML files (`page.html`, `contact/page.html`, etc.) - main site pages
- `public/` - static assets and alternative site version
  - `public/landio/` - contains the Landio template files with overrides
  - `public/styles/` - CSS files including fonts, base styles, and design tokens
  - `public/fonts/` - web fonts (Inter, Instrument Serif, Plus Jakarta Sans)
  - `public/icons/` - SVG icons
  - `public/images/` - JPG/PNG images and logos
  - `public/videos/` - MP4 video assets

### Key Components

1. **Content Override System** (`public/landio/deskwise-overrides.js`):
   - Dynamically replaces Landio template content with Deskwise branding
   - Handles text replacements, email normalization, and asset redirection
   - Blocks Framer API calls to prevent 404 errors
   - Uses MutationObserver for dynamic content updates

2. **Styling System**:
   - `landio-base.css` - core layout and component styles
   - `landio-tokens.css` - design system tokens and variables
   - `fonts.css` - web font declarations

3. **Asset Management**:
   - Local copies of all external assets to avoid CDN dependencies
   - Organized by type (fonts, icons, images, videos)
   - Both root `public/` and `public/landio/` versions maintained

### Content Structure

- **Navigation**: Fixed header with backdrop filter blur
- **Branding**: Deskwise logo with glow effects
- **Content Sections**: Hero, benefits, services, features, process, pricing
- **Footer**: Contact information and legal links

## Important Files

- `AGENTS.md` - Development guidelines and project scaffolding checklist
- `public/landio/deskwise-overrides.js` - Core branding and functionality script
- `public/styles/landio-base.css` - Main stylesheet
- `public/landio/index.html` - Primary template file
- `filelist.txt` - Complete file inventory

## Content Management

The site uses a JavaScript-based content replacement system rather than a traditional CMS. Text changes are made by:
1. Updating the replacements array in `deskwise-overrides.js`
2. Adding new selector/regex/replacement rules
3. The script automatically applies changes on page load and content updates

## Asset Guidelines

- All external CDN assets have been downloaded locally
- Icons are stored as SVGs in `/public/icons/`
- Images use descriptive filenames with hash suffixes
- Videos are MP4 format in `/public/videos/`
- Fonts are self-hosted with proper fallbacks

## Development Notes

- No build process currently - files are served directly
- Python HTTP server recommended for local development (port 8000)
- JavaScript overrides run automatically on page load
- Site is designed to work offline with all local assets
- Template originally built with Framer but exported to static HTML/CSS/JS

## Project Architecture: Dual Structure

This project maintains two separate directories for optimal development workflow:

### Static Reference Site (`/home/richard/code/d-next/`)
- **Purpose**: Original Landio template preserved for visual comparison
- **Usage**: Reference for achieving visual parity requirement
- **Status**: Complete static site with all original assets and functionality

### Next.js Application (`/home/richard/code/d-next-new/`)
```
d-next-new/                    # Next.js project root (PRODUCTION CODEBASE)
├── app/                       # App Router structure
│   ├── layout.tsx            # Root layout with Lenis provider
│   ├── page.tsx              # Homepage with all components
│   ├── globals.css           # Global styles with imported tokens
│   └── lenis-provider.tsx    # Smooth scroll provider
├── components/               # React components (COMPLETED)
│   ├── Hero.tsx             # Hero section with Motion animations
│   ├── Navigation.tsx       # Navigation with backdrop blur
│   ├── LogoMarquee.tsx      # Client logo marquee
│   ├── ValueProps.tsx       # Value propositions section
│   ├── Features.tsx         # Features grid
│   ├── Pricing.tsx          # Pricing cards with toggle
│   └── SiteFooter.tsx       # Footer with attribution
├── lib/                      # Utilities and mappings
│   └── content-mapping.ts   # Content transformations from deskwise-overrides.js
├── public/                   # Static assets (migrated and optimized)
│   ├── images/              # All images from current site
│   ├── icons/               # SVG icons
│   ├── fonts/               # Web fonts
│   ├── videos/              # MP4 videos (hero.mp4)
│   └── styles/              # CSS files for reference
└── tailwind.config.ts       # Tailwind with design tokens
```

### Development Commands

**Next.js Application** (production codebase):
```bash
cd /home/richard/code/d-next-new

# Install dependencies
npm install

# Development server
npm run dev                   # http://localhost:3000

# Production build
npm run build
npm start

# Testing
npm test                      # Run component tests
```

**Static Reference Site** (for visual comparison):
```bash
cd /home/richard/code/d-next

# Development server
python3 -m http.server 8000   # http://localhost:8000
```

**Side-by-side Development**:
```bash
# Terminal 1: Next.js app
cd d-next-new && npm run dev

# Terminal 2: Reference site  
cd d-next && python3 -m http.server 8000

# Compare: localhost:3000 vs localhost:8000
```

### Key Libraries
- **Next.js 14+** with App Router and TypeScript
- **Tailwind CSS** for styling with design tokens
- **Motion (motion.dev)** for scroll reveals and hover animations  
- **GSAP** for complex scroll-pinned sequences (if needed)
- **Lenis** for smooth scrolling
- **Embla Carousel** for any carousel components
- **Lottie React** for Lottie animations

### Animation Guidelines
- Use Motion for simple reveals, fades, and hover states
- Implement scroll-triggered animations with `whileInView`
- Reserve GSAP for complex timeline animations or scroll-pinned sequences
- Always respect `prefers-reduced-motion` accessibility setting
- Keep animations performant with GPU-accelerated transforms

### Component Patterns
- All animations in client components (`'use client'`)
- Consistent Motion animation presets for reveals
- Responsive design with Tailwind breakpoints
- TypeScript interfaces for all component props
- Semantic HTML with proper ARIA labels

### Asset Management
- All assets must be local (no CDN dependencies)
- Images optimized with Next.js Image component
- Videos with proper autoplay/muted attributes for mobile
- Fonts self-hosted with fallbacks
- Icons as SVG components or files

### Content Strategy
- Migrate text content from current Deskwise overrides
- Maintain brand consistency ("Archy" rebrand from Deskwise)
- Include Landio template attribution in footer
- SEO optimization with proper meta tags

### Performance Requirements
- Lighthouse score 90+ across all metrics
- Core Web Vitals compliance
- Mobile-first responsive design
- Progressive enhancement approach

### Migration Progress ✅
- [✅] Bootstrap Next.js application
- [✅] Migrate and optimize all assets  
- [✅] Extract design tokens to Tailwind config
- [✅] Extract content transformations from deskwise-overrides.js
- [✅] Implement core page sections as React components
- [ ] Add Motion animations matching current site
- [ ] Rebrand all content from Deskwise to Archy
- [ ] Performance optimization and Core Web Vitals testing

**Status**: 5 of 8 tasks completed. Ready for next agent to continue with remaining tasks.
Modules available (use these instead of reinventing):
- Fonts: app/fonts.ts → `Sans.variable` applied to <html>
- Motion presets: lib/motion.ts → `fadeIn`, `slideUp`, `scaleIn`, `stagger(...)`
- FAQ: components/FAQ.tsx → Radix accordion; pass `{ items: [{q,a}, ...] }`
