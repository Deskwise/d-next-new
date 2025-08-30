#!/usr/bin/env node

/**
 * Behavior Command for Cursor
 * 
 * This script activates the TDD behavioral rules and engagement contract.
 * It can be triggered via Cursor's command palette or slash commands.
 */

const fs = require('fs');
const path = require('path');

// Load the full behavioral rules
function loadBehavioralRules() {
  const behaviorFile = path.join(__dirname, 'docs', 'prompts', 'behavior', 'behavior.md');
  
  if (!fs.existsSync(behaviorFile)) {
    console.error('❌ Behavioral rules file not found:', behaviorFile);
    return null;
  }

  try {
    return fs.readFileSync(behaviorFile, 'utf8');
  } catch (error) {
    console.error('❌ Error loading behavioral rules:', error.message);
    return null;
  }
}

// Display the behavior activation message
function displayBehaviorActivation() {
  console.log('\n🔄 BEHAVIOR MODE ACTIVATED');
  console.log('='.repeat(60));
  console.log('🤖 TDD ENGAGEMENT CONTRACT LOADED 🤖');
  console.log('='.repeat(60));
  console.log('');
  console.log('📋 KEY BEHAVIORAL RULES:');
  console.log('-'.repeat(40));
  console.log('🎯 TDD WORKFLOW: Test → Confirm → Code → Verify');
  console.log('💬 DIRECT COMMUNICATION: No corporate speak');
  console.log('🚫 SCOPE CREEP DETECTOR: Active');
  console.log('🎪 CONFIDENCE GATE: <90% = STOP AND ASK');
  console.log('🔍 PRE-FLIGHT CHECKS: Mandatory before any action');
  console.log('');
  console.log('📖 Full rules loaded from: docs/prompts/behavior/behavior.md');
  console.log('🤝 Ready for TDD-driven development!');
  console.log('='.repeat(60));
  console.log('');
}

// Main execution
function main() {
  const rules = loadBehavioralRules();
  
  if (!rules) {
    console.error('Failed to load behavioral rules');
    process.exit(1);
  }

  displayBehaviorActivation();
  
  // Return success
  console.log('✅ Behavior mode ready');
  process.exit(0);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  loadBehavioralRules,
  displayBehaviorActivation,
  main
};
