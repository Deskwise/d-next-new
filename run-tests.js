#!/usr/bin/env node

// Test Runner for Archy Landing Page Project
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Archy Landing Page - Test Results Dashboard\n');

const testGroups = [
  { 
    name: 'Group 1: Motion Animation System', 
    file: 'tests/group1-motion-animations.test.js',
    tasks: 7 
  },
  { 
    name: 'Group 2: Archy Rebranding', 
    file: 'tests/group2-archy-rebranding.test.js',
    tasks: 4 
  },
  { 
    name: 'Group 3: Performance Optimization', 
    file: 'tests/group3-performance-optimization.test.js',
    tasks: 4 
  },
  { 
    name: 'Group 4: Final Validation', 
    file: 'tests/group4-final-validation.test.js',
    tasks: 1 
  }
];

let overallPassed = 0;
let overallTotal = 0;

testGroups.forEach((group, index) => {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${group.name}`);
  console.log(`${'='.repeat(60)}`);
  
  try {
    // Run the specific test file
    const result = execSync(`npx jest ${group.file} --verbose`, { 
      encoding: 'utf8',
      cwd: '/home/richard/code/d-next-new'
    });
    
    // Count passed/failed tests from jest output
    const lines = result.split('\n');
    const passedTests = lines.filter(line => line.includes('✓')).length;
    const failedTests = lines.filter(line => line.includes('✕')).length;
    const totalTests = passedTests + failedTests;
    
    overallPassed += passedTests;
    overallTotal += totalTests;
    
    if (totalTests === passedTests) {
      console.log(`\n✅ ALL TESTS PASSED (${passedTests}/${totalTests})`);
      console.log(`📋 Tasks completed: ${group.tasks}`);
    } else {
      console.log(`\n❌ SOME TESTS FAILED (${passedTests}/${totalTests})`);
      console.log(`📋 Tasks remaining: ${group.tasks - passedTests}`);
    }
    
    // Show individual test results
    console.log('\nDetailed Results:');
    lines.forEach(line => {
      if (line.includes('✓')) {
        console.log(`  ✅ ${line.trim()}`);
      } else if (line.includes('✕')) {
        console.log(`  ❌ ${line.trim()}`);
      } else if (line.includes('Task')) {
        console.log(`  📝 ${line.trim()}`);
      }
    });
    
  } catch (error) {
    console.log(`\n❌ GROUP FAILED TO RUN`);
    console.log(`📋 Tasks remaining: ${group.tasks}`);
    console.log('\nError Details:');
    
    const errorOutput = error.stdout || error.message;
    const lines = errorOutput.split('\n');
    
    lines.forEach(line => {
      if (line.includes('✓')) {
        console.log(`  ✅ ${line.trim()}`);
        overallPassed++;
      } else if (line.includes('✕')) {
        console.log(`  ❌ ${line.trim()}`);
      } else if (line.includes('FAIL') || line.includes('Error')) {
        console.log(`  💥 ${line.trim()}`);
      }
    });
    
    overallTotal += group.tasks;
  }
});

// Overall Summary
console.log(`\n${'='.repeat(60)}`);
console.log('📊 OVERALL PROJECT PROGRESS');
console.log(`${'='.repeat(60)}`);
console.log(`✅ Passed: ${overallPassed}`);
console.log(`❌ Failed: ${overallTotal - overallPassed}`);
console.log(`📈 Progress: ${Math.round((overallPassed / overallTotal) * 100)}%`);

if (overallPassed === overallTotal) {
  console.log(`\n🎉 ALL TASKS COMPLETE! Project ready for deployment.`);
} else {
  console.log(`\n⚠️  Tasks remaining: ${overallTotal - overallPassed}`);
}

console.log(`\n💻 Run individual groups:`);
testGroups.forEach((group, index) => {
  console.log(`   npx jest ${group.file}`);
});

console.log(`\n📁 Working directory: /home/richard/code/d-next-new`);
console.log(`🌐 Dev server: npm run dev (http://localhost:3000)`);