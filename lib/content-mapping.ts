// Content transformations extracted from landio overrides
// This will be used for Archy rebranding in components

export interface ContentMapping {
  from: string | RegExp;
  to: string;
  context?: string;
}

export const contentMappings: ContentMapping[] = [
  // Hero/Main messaging transformations
  { from: /Automate Smarter/gi, to: 'Fix the question.', context: 'hero-title' },
  { from: /Grow Faster/gi, to: 'Ship the proof.', context: 'hero-title' },
  { from: /\bWith AI\b/gi, to: 'Listening‑First Decision Lab', context: 'hero-subtitle' },
  
  // CTA transformations
  { from: /Get Template/gi, to: 'Book A Free Call', context: 'cta-button' },
  
  // Navigation transformations
  { from: /\bServices\b/gi, to: 'Why', context: 'navigation' },
  { from: /\bProcess\b/gi, to: 'Method', context: 'navigation' },
  { from: /\bPricing\b/gi, to: 'Plans', context: 'navigation' },
  { from: /\bBlog\b/gi, to: 'Proof', context: 'navigation' },
  
  // Section heading transformations
  { from: /^BENEFITS$/i, to: 'WHY WE\'RE DIFFERENT', context: 'section-label' },
  { from: /^Why Choose Us\?$/i, to: 'Why We\'re Different', context: 'section-title' },
  { from: /^SERVICES$/i, to: 'THE METHOD', context: 'section-label' },
  { from: /^Smarter Services,.*Listening‑First Decision Lab$/i, to: 'The Method (Listen→Proof™)', context: 'section-title' },
  { from: /^FEATURES$/i, to: 'WHAT\'S UNDER THE HOOD', context: 'section-label' },
  { from: /^All features in one place$/i, to: 'What\'s Under the Hood', context: 'section-title' },
  { from: /^PROCESS$/i, to: 'METHOD', context: 'section-label' },
  { from: /^Our Simple \& Smart Process$/i, to: 'Our Simple & Smart Method', context: 'section-title' },
  { from: /^PRICING$/i, to: 'PLANS & PAYMENTS', context: 'section-label' },
  { from: /^Flexible Plans for Everyone$/i, to: 'Choose clarity now. Upgrade anytime.', context: 'section-title' },
  { from: /^Choose a plan that fits your goals and scale as you grow$/i, to: 'Start with a reversible step. If we don\'t find a 5‑figure lever in your X‑Ray, you don\'t pay.', context: 'section-description' },
  
  // Fix accidental collisions
  { from: /Advanced AI Assistant WHAT'S UNDER THE HOOD/gi, to: 'Advanced AI Assistant Features', context: 'feature-title' },
  
  // Email normalization (updated to Deskwise)
  { from: /landio@support\.com/gi, to: 'info@deskwise.com', context: 'contact-email' },
  { from: /mailto:landio@support\.com/gi, to: 'mailto:info@deskwise.com', context: 'contact-link' },
  { from: /\[email\s*&#160;protected\]/gi, to: 'info@deskwise.com', context: 'obfuscated-email' },
  
  // Copyright information
  { from: /©\s*2025\s*Landio Template/gi, to: '© 2025 Deskwise', context: 'copyright' },
];

export const metaInformation = {
  title: 'Fix the Question. Ship the Proof. | Listening‑First Decision Lab',
  description: 'We listen first, diagnose the real decision, then ship a proof you can deploy. Executive X‑Ray, Proof Sprint, and ResearchOps retainers. One conversation. Ten expert lenses.',
};

// Utility function to apply transformations to text content
export function transformContent(content: string, context?: string): string {
  let transformed = content;
  
  for (const mapping of contentMappings) {
    if (!context || !mapping.context || mapping.context === context) {
      transformed = transformed.replace(mapping.from, mapping.to);
    }
  }
  
  return transformed;
}

// For component usage - transform specific content types
export const transforms = {
  navigation: {
    'Services': 'Why',
    'Process': 'Method', 
    'Pricing': 'Plans',
    'Blog': 'Proof'
  },
  
  hero: {
    title: 'Elite Consultants, Better Decisions—Fast',
    subtitle: 'Your team of elite consultants, working 24/7. McKinsey‑level fact basis to aid critical decision‑making.',
    cta: 'Book Your Free Friction X‑Ray',
    ctaSecondary: 'See Plans'
  },
  
  sections: {
    benefits: {
      label: 'WHY GHOST WORK COSTS YOU',
      title: 'Ghost work drains productivity and limits growth'
    },
    services: {
      label: 'HOW IT WORKS',
      title: 'A pipeline built for results'
    },
    features: {
      label: 'WHAT\'S UNDER THE HOOD',
      title: 'What\'s Under the Hood'
    },
    process: {
      label: 'METHOD',
      title: 'Our Simple & Smart Method'
    },
    pricing: {
      label: 'PLANS & PAYMENTS',
      title: 'Choose clarity now. Upgrade anytime.',
      description: 'Start with a reversible step. If we don\'t find a 5‑figure lever in your X‑Ray, you don\'t pay.'
    }
  },
  
  contact: {
    email: 'info@deskwise.com',
    phone: '', // To be defined
    address: '' // To be defined
  },
  
  meta: {
    title: 'Fix the Question. Ship the Proof. | Listening‑First Decision Lab',
    description: 'We listen first, diagnose the real decision, then ship a proof you can deploy. Executive X‑Ray, Proof Sprint, and ResearchOps retainers. One conversation. Ten expert lenses.'
  }
};