// Group 1: Motion Animation System Tests
const fs = require('fs');
const path = require('path');

describe('Group 1: Motion Animation System', () => {
  const projectPath = '/home/richard/code/d-next-new';
  
  // Task 1: Create lib/motion.ts with animation presets
  test('Task 1: Motion library exists with required presets', () => {
    const motionLibPath = path.join(projectPath, 'lib', 'motion.ts');
    expect(fs.existsSync(motionLibPath)).toBe(true);
    
    const motionLib = fs.readFileSync(motionLibPath, 'utf8');
    expect(motionLib).toContain('fadeIn');
    expect(motionLib).toContain('slideUp');
    expect(motionLib).toContain('scaleIn');
    expect(motionLib).toContain('stagger');
  });
  
  // Task 2: Update Hero component with motion presets
  test('Task 2: Hero component uses motion presets and proper viewport', () => {
    const heroPath = path.join(projectPath, 'components', 'Hero.tsx');
    expect(fs.existsSync(heroPath)).toBe(true);
    
    const heroContent = fs.readFileSync(heroPath, 'utf8');
    expect(heroContent).toContain('motion/react');
    expect(heroContent).toContain('whileInView');
    expect(heroContent).toContain('viewport') || expect(heroContent).toContain('viewportDefaults');
    expect(heroContent).toContain('slideUp') || expect(heroContent).toContain('variants');
  });
  
  // Task 3: Add scroll animations to ValueProps component
  test('Task 3: ValueProps component has scroll reveal animations', () => {
    const valuePropsPath = path.join(projectPath, 'components', 'ValueProps.tsx');
    expect(fs.existsSync(valuePropsPath)).toBe(true);
    
    const content = fs.readFileSync(valuePropsPath, 'utf8');
    expect(content).toContain('motion');
    expect(content).toContain('whileInView');
    expect(content).toContain('viewport');
  });
  
  // Task 4: Add scroll animations to Features component
  test('Task 4: Features component has scroll reveal animations', () => {
    const featuresPath = path.join(projectPath, 'components', 'Features.tsx');
    expect(fs.existsSync(featuresPath)).toBe(true);
    
    const content = fs.readFileSync(featuresPath, 'utf8');
    expect(content).toContain('motion');
    expect(content).toContain('whileInView');
    expect(content).toContain('viewport');
  });
  
  // Task 5: Add scroll animations to Pricing component
  test('Task 5: Pricing component has scroll reveal animations', () => {
    const pricingPath = path.join(projectPath, 'components', 'Pricing.tsx');
    expect(fs.existsSync(pricingPath)).toBe(true);
    
    const content = fs.readFileSync(pricingPath, 'utf8');
    expect(content).toContain('motion');
    expect(content).toContain('whileInView');
    expect(content).toContain('viewport');
  });
  
  // Task 6: Add hover animations to Navigation component
  test('Task 6: Navigation component has hover animations', () => {
    const navPath = path.join(projectPath, 'components', 'Navigation.tsx');
    expect(fs.existsSync(navPath)).toBe(true);
    
    const content = fs.readFileSync(navPath, 'utf8');
    expect(content).toContain('motion');
    expect(content).toContain('whileHover') || expect(content).toContain('hover:');
  });
  
  // Task 7: Test animations respect prefers-reduced-motion
  test('Task 7: Prefers-reduced-motion accessibility guard is present', () => {
    const globalsCssPath = path.join(projectPath, 'app', 'globals.css');
    expect(fs.existsSync(globalsCssPath)).toBe(true);
    
    const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
    expect(globalsCss).toContain('prefers-reduced-motion');
    expect(globalsCss).toContain('animation: none');
    expect(globalsCss).toContain('transition: none');
  });
});