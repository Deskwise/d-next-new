# Deskwise Brand Guidelines

## Overview

Deskwise is a premium AI automation platform that transforms how elite consultants and decision-makers work. Our brand embodies sophistication, intelligence, and measurable results through a dark, professional aesthetic with strategic blue accents.

## Brand Personality

- **Sophisticated**: Premium, enterprise-grade solutions
- **Intelligent**: AI-powered, data-driven insights
- **Trustworthy**: Proven results with measurable outcomes
- **Efficient**: Streamlined workflows and automation
- **Elite**: High-performance tools for top-tier professionals

## Color Palette

### Primary Brand Colors

```css
/* Core Brand Blue */
--brand-primary: #A6DAFF;      /* rgb(166, 218, 255) - Main accent */
--brand-primary-light: #94D1FF; /* rgb(148, 209, 255) - Lighter variant */
--brand-primary-dark: #0099FF;  /* rgb(0, 153, 255) - Darker variant */
```

**Usage**: Primary brand color for CTAs, highlights, and key interactive elements.

### Neutral Scale

```css
--neutral-100: #FFFFFF;        /* Pure white */
--neutral-200: #E4E9F2;        /* Light gray - hero text */
--neutral-300: #D5DBE6;        /* Medium light gray - body text */
--neutral-400: #9CA3AF;        /* Medium gray - muted text */
--neutral-500: #6B7280;        /* Medium dark gray */
--neutral-600: #4B5563;        /* Dark gray */
--neutral-700: #374151;        /* Darker gray */
--neutral-800: #1F2937;        /* Very dark gray - cards */
--neutral-900: #111827;        /* Almost black - sections */
--neutral-950: #04070D;        /* Pure black - main background */
```

### Semantic Colors

#### Backgrounds
```css
--bg-primary: var(--neutral-950);     /* Main background */
--bg-secondary: var(--neutral-900);   /* Section backgrounds */
--bg-tertiary: var(--neutral-800);    /* Card backgrounds */
--bg-overlay: rgba(4, 7, 13, 0.8);   /* Modal overlays */
```

#### Text
```css
--text-primary: var(--neutral-100);   /* Primary text */
--text-secondary: var(--neutral-300); /* Secondary text */
--text-muted: var(--neutral-400);     /* Muted text */
--text-accent: var(--brand-primary);  /* Accent text */
```

#### Borders
```css
--border-primary: rgba(184, 199, 217, 0.5);    /* Primary borders */
--border-secondary: rgba(255, 255, 255, 0.1);  /* Secondary borders */
--border-accent: var(--brand-primary);         /* Accent borders */
```

### Interactive Colors

#### Buttons
```css
--btn-primary-bg: var(--brand-primary);
--btn-primary-text: var(--neutral-950);
--btn-primary-hover: var(--brand-primary-light);

--btn-secondary-bg: rgba(4, 7, 13, 0.8);
--btn-secondary-text: var(--neutral-100);
--btn-secondary-hover: rgba(4, 7, 13, 0.9);

--btn-ghost-bg: transparent;
--btn-ghost-text: var(--neutral-100);
--btn-ghost-hover: rgba(255, 255, 255, 0.1);
```

#### Focus States
```css
--focus-ring: #6366F1;         /* Indigo for focus */
--focus-ring-light: var(--brand-primary);
```

### Status Colors

```css
/* Success */
--success-100: #D1FAE5;
--success-500: #10B981;
--success-900: #064E3B;

/* Warning */
--warning-100: #FEF3C7;
--warning-500: #F59E0B;
--warning-900: #78350F;

/* Error */
--error-100: #FEE2E2;
--error-500: #EF4444;
--error-900: #7F1D1D;
```

## Typography

### Font Stack

```css
--font-sans: "Inter", "Inter Placeholder", sans-serif;
--font-serif: "Instrument Serif", serif;
--font-display: "Inter", "Inter Placeholder", sans-serif;
```

### Font Weights

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-black: 900;
```

### Typography Scale

```css
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 20px;
--font-size-xl: 22px;
--font-size-2xl: 36px;
--font-size-3xl: 44px;
```

### Usage Guidelines

- **Headlines**: Use Inter with weights 600-700 for impact
- **Body Text**: Inter 400-500 for readability
- **Accent Text**: Instrument Serif italic for premium feel
- **Hero Text**: Large, bold Inter for maximum impact

## Effects & Shadows

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-accent: 0 8px 24px rgba(166, 218, 255, 0.35);
```

### Glows
```css
--glow-primary: 0 0 20px rgba(166, 218, 255, 0.5);
--glow-accent: 0 0 40px rgba(166, 218, 255, 0.3);
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-light) 100%);
--gradient-dark: linear-gradient(135deg, var(--neutral-900) 0%, var(--neutral-950) 100%);
--gradient-overlay: linear-gradient(180deg, transparent 0%, var(--neutral-950) 100%);
```

## Design Principles

### 1. Dark-First Design
- Primary background is deep black (`#04070D`)
- Creates premium, sophisticated feel
- Reduces eye strain for extended use
- Emphasizes content and CTAs

### 2. Strategic Blue Accents
- Brand blue (`#A6DAFF`) for key interactions
- Creates visual hierarchy
- Guides user attention
- Maintains professional appearance

### 3. Minimalist Approach
- Clean, uncluttered interfaces
- Generous white space
- Clear visual hierarchy
- Focus on content and functionality

### 4. Premium Feel
- Subtle shadows and glows
- Smooth animations
- High-quality typography
- Professional color palette

## Component Guidelines

### Buttons

#### Primary Button
- Background: `--brand-primary`
- Text: `--neutral-950`
- Hover: `--brand-primary-light`
- Use for main CTAs and key actions

#### Secondary Button
- Background: `--btn-secondary-bg`
- Text: `--neutral-100`
- Border: `--border-primary`
- Use for secondary actions

#### Ghost Button
- Background: Transparent
- Text: `--neutral-100`
- Hover: `--btn-ghost-hover`
- Use for subtle actions

### Cards & Containers
- Background: `--bg-tertiary`
- Border: `--border-primary`
- Shadow: `--shadow-md`
- Rounded corners: 12px

### Forms
- Input background: `--bg-tertiary`
- Input border: `--border-primary`
- Focus ring: `--focus-ring`
- Label text: `--text-secondary`

## Animation Guidelines

### Micro-interactions
- Duration: 150-300ms
- Easing: `ease-out`
- Purpose: Provide feedback and delight

### Page Transitions
- Duration: 300-500ms
- Easing: `ease-in-out`
- Purpose: Smooth navigation experience

### Loading States
- Use brand blue for loading indicators
- Subtle pulse animations
- Clear progress feedback

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Minimum contrast ratio: 4.5:1
- High contrast mode support

### Focus States
- Clear focus indicators
- Keyboard navigation support
- Screen reader compatibility

### Motion
- Respect `prefers-reduced-motion`
- Provide alternative experiences
- Maintain functionality without animations

## Usage Examples

### Hero Section
```css
.hero {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.hero-title {
  color: var(--neutral-200);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
}

.hero-cta {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  box-shadow: var(--shadow-accent);
}
```

### Feature Card
```css
.feature-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-md);
  border-radius: 12px;
}

.feature-icon {
  color: var(--brand-primary);
  filter: drop-shadow(var(--glow-primary));
}
```

## Brand Assets

### Logo
- Primary: White version on dark backgrounds
- Secondary: Brand blue version for light contexts
- Minimum size: 24px height
- Clear space: 1x logo height

### Icons
- Style: Minimal, geometric
- Color: `--brand-primary` for primary actions
- Size: 16px, 20px, 24px, 32px
- Stroke width: 1.5px

### Photography
- Style: Professional, clean
- Mood: Sophisticated, modern
- Color treatment: Cool tones, subtle desaturation
- Subjects: Business professionals, technology, workspaces

## Voice & Tone

### Writing Style
- **Professional but approachable**
- **Clear and concise**
- **Benefit-focused**
- **Data-driven when possible**

### Key Messages
- "Elite consultants, working 24/7"
- "Fix the Question. Ship the Proof."
- "Measurable transformation"
- "Reversible steps with measurable results"

## Implementation Notes

### CSS Variables
All colors are defined as CSS custom properties for easy theming and maintenance.

### Tailwind Integration
Colors are mapped to Tailwind classes for consistent usage across the application.

### Responsive Design
Color usage adapts to different screen sizes while maintaining brand consistency.

---

*This document should be updated as the brand evolves. For questions about brand usage, contact the design team.*
