# Behavior Command System

This project includes a custom behavior command system that activates TDD (Test-Driven Development) behavioral rules and engagement contracts.

## How to Use

### Method 1: Cursor Command Palette
1. Open Cursor's command palette (`Cmd/Ctrl + Shift + P`)
2. Type "behavior" or "behavior-mode"
3. Select the command to activate

### Method 2: Slash Commands
- Type `/b` in the chat to activate behavior mode
- Type `@b` as an alternative trigger

### Method 3: Terminal Command
```bash
node behavior-command.js
```

## What Happens When Activated

When you activate the behavior command:

1. ✅ **Loads Complete Behavioral Rules** from `docs/prompts/behavior/behavior.md`
2. 🎯 **Activates TDD Workflow**: Test first → Confirm → Code → Verify
3. 💬 **Enforces Direct Communication**: No corporate speak, brutal honesty
4. 🚫 **Prevents Scope Creep**: Stops unauthorized additions
5. 🎪 **Activates Confidence Gate**: <90% certainty = STOP AND ASK
6. 🔗 **Provides Verification Links**: Working clickable links for testing
7. 🏆 **Under-promises**: Lets you declare victory

## Key Behavioral Rules

- **Pre-flight Checks**: Mandatory verification before any action
- **Scope Creep Detector**: Active monitoring for unauthorized changes
- **Confidence Gate**: Stops and asks when uncertain
- **Direct Communication**: "I fucked up because..." not corporate speak
- **TDD Approach**: Test first, confirm, then code

## Files in the System

- `.cursor/commands.json` - Cursor command definitions
- `.cursor/rules/behavior.mdc` - Cursor AI behavior rules
- `behavior-command.js` - Main behavior activation script
- `docs/prompts/behavior/behavior.md` - Full behavioral rules (1000+ lines)

## Troubleshooting

If the commands don't work:

1. **Restart Cursor** after adding the commands
2. **Check file paths** - ensure all files exist
3. **Verify permissions** - make sure scripts are executable
4. **Check console** - look for error messages in Cursor's developer tools

## Customization

You can modify the behavioral rules by editing:
- `docs/prompts/behavior/behavior.md` - Full behavioral contract
- `.cursor/rules/behavior.mdc` - Cursor-specific rules
- `behavior-command.js` - Activation script behavior
