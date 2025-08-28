// Motion animation presets for consistent animations across components
import type { Variants, Transition } from 'motion/react';

// Base viewport settings for scroll-triggered animations
export const viewportDefaults = {
  once: true,
  amount: 0.3 as const
};

// Standard transition settings
export const transitions = {
  smooth: { duration: 0.6, ease: 'easeOut' } as Transition,
  quick: { duration: 0.3, ease: 'easeOut' } as Transition,
  slow: { duration: 0.8, ease: 'easeOut' } as Transition,
  spring: { type: 'spring', stiffness: 100, damping: 15 } as Transition
};

// Fade in animation
export const fadeIn: Variants = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: transitions.smooth
  }
};

// Slide up animation
export const slideUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 24 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth
  }
};

// Scale in animation
export const scaleIn: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.95 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.smooth
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  initial: { 
    opacity: 0, 
    x: -24 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: transitions.smooth
  }
};

// Slide in from right
export const slideInRight: Variants = {
  initial: { 
    opacity: 0, 
    x: 24 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: transitions.smooth
  }
};

// Stagger animation for lists/grids
export function stagger(staggerAmount: number = 0.1, childVariants: Variants = slideUp) {
  return {
    initial: 'initial',
    animate: 'animate',
    variants: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: staggerAmount
        }
      }
    },
    childVariants
  };
}

// Hover animations
export const hoverLift = {
  whileHover: { 
    y: -4,
    transition: transitions.quick
  }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: transitions.quick
  }
};

export const hoverBrightness = {
  whileHover: { 
    filter: 'brightness(1.1)',
    transition: transitions.quick
  }
};

// Focus animations for accessibility
export const focusRing = {
  whileFocus: {
    boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.25)',
    transition: transitions.quick
  }
};

// Tap animations for interactive elements
export const tapScale = {
  whileTap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};