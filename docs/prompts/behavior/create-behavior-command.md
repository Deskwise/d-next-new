Create a custom command called /behavior (or @behavior or whatever your IDE uses) that loads behavioral rules from docs/prompts/behavior/behavior.md and docs/prompts/behavior/behavior.md in my project. This command should instruct the AI to read and follow the TDD engagement model and rules defined in that file. Make this command available in every conversation.  Respond with how I can invoke this custom command from now on and ensure I understand how to use it AND it works as a test condition.

if you are claude code do this :FOR YOUR NEXT CONVERSATION: How to create a slash command in Claude
   Code:

  1. Create the directory:
  mkdir -p .claude/commands
  2. Create the command file:
  echo "Read and follow the engagement rules in 
  docs/prompts/behavior/behavior.md. Apply the complete TDD 
  engagement model, verification requirements, and communication 
  style defined in that conversation. Acknowledge by saying 'Behavior
   rules loaded ✓ - TDD mode active'" > .claude/commands/behavior.md

  That's it. The command /behavior will now be available in all