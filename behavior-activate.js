#!/usr/bin/env node

/**
 * Behavior Activation Script
 *
 * This script is triggered when you use /b or @b commands
 * It loads and enforces the behavioral rules from docs/behavior/behavior.md
 */

const fs = require('fs');
const path = require('path');

function loadBehavioralRules() {
  const behaviorFile = path.join(__dirname, 'docs', 'prompts', 'behavior', 'behavior.md');

  if (!fs.existsSync(behaviorFile)) {
    console.error('❌ Behavioral rules file not found:', behaviorFile);
    console.error('Please ensure docs/prompts/behavior/behavior.md exists');
    return null;
  }

  try {
    const rules = fs.readFileSync(behaviorFile, 'utf8');
    return rules;
  } catch (error) {
    console.error('❌ Error loading behavioral rules:', error.message);
    return null;
  }
}

function activateBehaviorMode() {
  console.log('🔄 LOADING COMPLETE BEHAVIORAL RULES...');

  const rules = loadBehavioralRules();

  if (!rules) {
    return false;
  }

  console.log('✅ FULL BEHAVIORAL RULES LOADED');
  console.log('=' .repeat(60));
  console.log('🤖 AI BEHAVIOR MODE ACTIVE 🤖');
  console.log('=' .repeat(60));
  console.log('');
  console.log('📋 OUR COMPLETE ENGAGEMENT CONTRACT:');
  console.log('=' .repeat(60));

  // Display key sections from the full rules
  const lines = rules.split('\n');

  // Find and display the EFFICIENCY MODE section
  const efficiencyStart = lines.findIndex(line => line.includes('EFFICIENCY MODE + PROJECT SUCCESS PROTOCOL'));
  if (efficiencyStart !== -1) {
    console.log('');
    console.log('⚡ EFFICIENCY MODE + PROJECT SUCCESS PROTOCOL:');
    console.log('-'.repeat(50));

    for (let i = efficiencyStart + 1; i < lines.length && i < efficiencyStart + 15; i++) {
      if (lines[i].trim() && !lines[i].startsWith('#')) {
        console.log(lines[i]);
      }
    }
  }

  console.log('');
  console.log('🎯 TDD WORKFLOW:');
  console.log('-'.repeat(30));
  console.log('1. I repeat back what I understand');
  console.log('2. I write test for how you\'ll verify');
  console.log('3. You confirm "Yes, that\'s what I meant"');
  console.log('4. I code ONLY that specific thing');
  console.log('5. I provide working clickable link');
  console.log('6. You approve or request changes');

  console.log('');
  console.log('🚫 FORBIDDEN WITHOUT PERMISSION:');
  console.log('-'.repeat(35));
  console.log('❌ Creating new projects/folders/repos');
  console.log('❌ Switching working directories');
  console.log('❌ "Improving" architecture');
  console.log('❌ Changing file organization');
  console.log('❌ Installing new dependencies');
  console.log('❌ Making unrequested additions');

  console.log('');
  console.log('🎪 CONFIDENCE GATE: <90% certainty = STOP AND ASK');
  console.log('🔍 SCOPE CREEP DETECTOR: Active');
  console.log('💬 COMMUNICATION: Direct, honest, no corporate speak');
  console.log('🔗 VERIFICATION: I provide clickable working links');
  console.log('🏆 VICTORIES: Under-promise, let you declare success');

  console.log('');
  console.log('=' .repeat(60));
  console.log('📖 FULL RULES LOADED FROM docs/prompts/behavior/behavior.md');
  console.log('🤝 OUR CONTRACT IS ACTIVE - Ready to work!');
  console.log('=' .repeat(60));

  return true;
}

// Export for use in other scripts
module.exports = {
  loadBehavioralRules,
  activateBehaviorMode
};

// Run if called directly
if (require.main === module) {
  activateBehaviorMode();
}
