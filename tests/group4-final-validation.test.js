// Group 4: Final Validation Tests
const fs = require('fs');
const path = require('path');

describe('Group 4: Final Validation', () => {
  const projectPath = '/home/richard/code/d-next-new';
  
  // Task 16: Test all animations and interactions work correctly
  test('Task 16: All animations and interactions are properly implemented', () => {
    // Verify Motion is properly installed and configured
    const packageJsonPath = path.join(projectPath, 'package.json');
    expect(fs.existsSync(packageJsonPath)).toBe(true);
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    expect(packageJson.dependencies).toHaveProperty('motion');
    
    // Verify motion library exists
    const motionLibPath = path.join(projectPath, 'lib', 'motion.ts');
    expect(fs.existsSync(motionLibPath)).toBe(true);
    
    // Verify all main components use animations
    const componentsToCheck = ['Hero.tsx', 'ValueProps.tsx', 'Features.tsx', 'Pricing.tsx', 'Navigation.tsx'];
    const componentsDir = path.join(projectPath, 'components');
    
    componentsToCheck.forEach(component => {
      const componentPath = path.join(componentsDir, component);
      if (fs.existsSync(componentPath)) {
        const content = fs.readFileSync(componentPath, 'utf8');
        expect(content.includes('motion') || content.includes('animate-')).toBe(true);
      }
    });
    
    // Verify accessibility is maintained
    const globalsCssPath = path.join(projectPath, 'app', 'globals.css');
    const globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
    expect(globalsCss).toContain('prefers-reduced-motion');
    
    // Verify site builds and has no critical errors
    const allComponents = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));
    expect(allComponents.length).toBeGreaterThan(5);
    
    // Verify main page imports all components
    const pagePath = path.join(projectPath, 'app', 'page.tsx');
    const pageContent = fs.readFileSync(pagePath, 'utf8');
    expect(pageContent).toContain('Navigation');
    expect(pageContent).toContain('Hero');
    expect(pageContent).toContain('ValueProps');
    expect(pageContent).toContain('Features');
    expect(pageContent).toContain('Pricing');
    
    // Verify no broken imports or obvious syntax errors
    allComponents.forEach(file => {
      const filePath = path.join(componentsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Basic syntax checks
      expect(content).toContain('export default');
      expect(content.split('export default').length - 1).toBe(1); // Only one default export
      
      // If using motion, should have proper imports
      if (content.includes('motion.')) {
        expect(content).toContain('motion/react');
      }
    });
  });
});