// Group 2: Archy Rebranding Tests
const fs = require('fs');
const path = require('path');

describe('Group 2: Archy Rebranding', () => {
  const projectPath = '/home/richard/code/d-next-new';
  
  // Task 8: Update all component text content from Deskwise to Archy
  test('Task 8: Components contain Archy branding, no Deskwise references', () => {
    const componentsDir = path.join(projectPath, 'components');
    expect(fs.existsSync(componentsDir)).toBe(true);
    
    const componentFiles = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));
    let hasArchyBranding = false;
    
    componentFiles.forEach(file => {
      const filePath = path.join(componentsDir, file);
      const content = fs.readFileSync(filePath, 'utf8').toLowerCase();
      
      // Should not contain Deskwise
      expect(content).not.toContain('deskwise');
      
      // At least one component should mention Archy
      if (content.includes('archy')) {
        hasArchyBranding = true;
      }
    });
    
    expect(hasArchyBranding).toBe(true);
  });
  
  // Task 9: Update content-mapping.ts email domains to archy.com
  test('Task 9: Email addresses updated to archy.com domain', () => {
    const contentMappingPath = path.join(projectPath, 'lib', 'content-mapping.ts');
    expect(fs.existsSync(contentMappingPath)).toBe(true);
    
    const content = fs.readFileSync(contentMappingPath, 'utf8');
    expect(content).toContain('@archy.com');
    expect(content.toLowerCase()).not.toContain('deskwise.com');
  });
  
  // Task 10: Update layout.tsx metadata for Archy
  test('Task 10: Layout metadata uses Archy branding', () => {
    const layoutPath = path.join(projectPath, 'app', 'layout.tsx');
    expect(fs.existsSync(layoutPath)).toBe(true);
    
    const content = fs.readFileSync(layoutPath, 'utf8');
    expect(content).toContain('Archy');
    expect(content.toLowerCase()).not.toContain('deskwise');
    
    // Check metadata specifically
    expect(content).toMatch(/title.*Archy/);
    expect(content).toMatch(/description.*AI Automation/);
  });
  
  // Task 11: Search and replace remaining Deskwise references
  test('Task 11: No Deskwise references remain in any project files', () => {
    const filesToCheck = [
      'package.json',
      'README.md',
      'next.config.ts'
    ];
    
    filesToCheck.forEach(filename => {
      const filePath = path.join(projectPath, filename);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8').toLowerCase();
        expect(content).not.toContain('deskwise');
      }
    });
    
    // Check all TypeScript/JavaScript files in key directories
    const dirsToCheck = ['app', 'components', 'lib'];
    dirsToCheck.forEach(dir => {
      const dirPath = path.join(projectPath, dir);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath, { recursive: true });
        files.forEach(file => {
          if (typeof file === 'string' && (file.endsWith('.ts') || file.endsWith('.tsx'))) {
            const filePath = path.join(dirPath, file);
            if (fs.existsSync(filePath)) {
              const content = fs.readFileSync(filePath, 'utf8').toLowerCase();
              expect(content).not.toContain('deskwise');
            }
          }
        });
      }
    });
  });
});