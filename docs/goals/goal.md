# Deskwise Landing Page Project

## Project Overview
Create a modern, high-performance landing page for **Deskwise.io** using Next.js that replicates the visual design and animations of landio.framer.website but with custom copy and Deskwise branding.

## Goal
Build a landing page that looks **identical** to landio.framer.website in terms of:
- Layout and visual design
- Animations and interactions  
- Component structure and styling
- Overall user experience

**But with:**
- Deskwise copy from `/home/richard/code/d-next-new/sitecopy2.md`
- Deskwise branding and colors
- deskwise.io domain focus

## Technology Stack
- **Framework**: Next.js 15.5.2 (App Router + TypeScript)
- **Styling**: Tailwind CSS 4
- **Animations**: Motion.dev (primary) + GSAP (available if needed)
- **Smooth Scrolling**: Lenis
- **Components**: Embla Carousel, Lottie React, React Fast Marquee
- **Testing**: Jest with 4 test suites
- **Fonts**: Local font loading (Inter, Instrument Serif, Plus Jakarta Sans)

## Content Strategy
The landing page should implement the site structure from `sitecopy2.md`:

### Primary Navigation
- **Home** — "From Busy to Big"
- **ThinkWise™** — Your reasoning layer
- **The Invisible Engine** — Background automations  
- **Orchestrations** — Real playbooks grid
- **Plans & Pricing** — Momentum Plans
- **Proof** — Before/after gallery
- **Book Friction X-Ray** — Primary CTA destination

### Key Messaging
- **Hero**: "From Busy to Big" + identity-aspirational subhead
- **Identity Hook**: "Imagine who you become when the drag is gone and the engine is on"
- **Primary CTA**: "Book Friction X-Ray" (replaces "Book a Free Call")
- **We Remove / We Enable**: Two-column value propositions
- **Method**: Listen → Diagnose → Prove → Automate → Scale

### Unique Features
- **ThinkWise™**: "Question behind the question" → Executive Brief
- **Friction X-Ray**: Primary conversion offer with guarantee
- **Proof Sprint**: 48-hour delivery option
- **Executive Briefs in 60s**: Key differentiator

## Success Criteria
1. **Visual Parity**: Matches landio.framer.website design exactly
2. **Performance**: Lighthouse score 90+ across all metrics
3. **Animations**: Smooth scroll reveals and hover effects using Motion.dev
4. **Content**: All copy from sitecopy2.md properly integrated
5. **Branding**: Consistent Deskwise identity throughout
6. **Responsive**: Mobile-first design that works on all devices

## Development Approach
- Use existing Next.js structure in `/home/richard/code/d-next-new/`
- Reference landio.framer.website for exact visual specifications
- Implement content from sitecopy2.md systematically
- Maintain all animations and interactions from original design
- Keep all assets local (no CDN dependencies)

## Current Status
Project is in development with basic Next.js structure complete and core components built. Ready for content integration and final styling to match Landio design.