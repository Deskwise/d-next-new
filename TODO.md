# Project Todo List

## Setup & Foundation (Tasks 1-7)
- [ ] Bootstrap Next.js application with TypeScript and Tailwind CSS
- [ ] Install and configure required dependencies (Motion, Lenis, etc.)
- [ ] Set up project structure (app/, components/, lib/, public/)
- [ ] Migrate and optimize all assets from static site
- [ ] Extract design tokens to Tailwind config
- [ ] Extract content transformations from deskwise-overrides.js
- [ ] Implement core page sections as React components

## Animation Implementation (Task 8)
- [ ] Add Motion animations matching current site
  - [ ] Hero section scroll reveals
  - [ ] Logo marquee animations
  - [ ] Feature card hover states
  - [ ] Pricing card interactions
  - [ ] Smooth scroll with Lenis integration

## Archy Rebranding (Tasks 9-15)
- [ ] Rebrand all content from Deskwise to Archy
  - [ ] Update Hero section messaging
  - [ ] Replace Deskwise logo with Archy branding
  - [ ] Update ValueProps content
  - [ ] Rebrand Features section
  - [ ] Update Pricing plans and descriptions
  - [ ] Modify footer attribution and links
  - [ ] Update Navigation menu items

## Performance Optimization (Tasks 16-22)
- [ ] Performance optimization and Core Web Vitals testing
  - [ ] Optimize images with Next.js Image component
  - [ ] Implement lazy loading for below-fold content
  - [ ] Bundle size optimization
  - [ ] Font loading optimization
  - [ ] Lighthouse score 90+ across all metrics
  - [ ] Mobile performance testing
  - [ ] SEO meta tags and structured data

## Final Validation (Tasks 23-28)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness testing (iOS/Android)
- [ ] Accessibility audit (WCAG 2.1 AA compliance)
- [ ] Visual comparison with reference site
- [ ] Animation performance testing
- [ ] Final deployment preparation

## Notes
- Reference site: http://localhost:8000 (d-next directory)
- Development site: http://localhost:3000 (d-next-new directory)
- All animations must respect prefers-reduced-motion
- Maintain Landio template attribution in footer
- Visual parity with static reference site is critical