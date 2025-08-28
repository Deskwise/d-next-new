# 🤖 Multi-Agent Collaboration Protocol

## **Quick Start for New Agent**

### **1. Immediate Status Check**
```bash
cd /home/richard/code/d-next-new
node run-tests.js
```
👆 This shows you EXACTLY where to pick up

### **2. Read Current Context**
```bash
cat HANDOFF.md | head -50  # Current status section
```

### **3. Verify Environment**
```bash
npm run dev    # Should start successfully
npm run build  # Should build without errors
```

---

## **Agent Handoff Rules**

### **🔥 CRITICAL: Before Starting Work**
1. **Run full test dashboard**: `node run-tests.js`
2. **Verify build works**: `npm run build` 
3. **Screenshot/copy test results** for before/after comparison
4. **Read the "NEXT UP" section** in HANDOFF.md

### **💼 While Working**
1. **One group at a time** - complete all tasks in current group before moving on
2. **Test after each task** - run the specific group test file
3. **Maintain build status** - ensure `npm run build` always passes
4. **Document issues** - note any problems encountered

### **✅ Before Handoff to Next Agent**
1. **All group tests must pass** 
2. **Update HANDOFF.md** with completion status
3. **Run full dashboard**: `node run-tests.js` 
4. **Document any issues** encountered and solutions found
5. **Clear "NEXT UP" section** for next agent

---

## **Communication Protocol**

### **Status Update Template**
```markdown
## AGENT HANDOFF - [DATE] - [AGENT_NAME]

### ✅ COMPLETED
Group X: [Name] (X/X tasks)
- ✅ Task details...

### 🔄 NEXT AGENT STARTS HERE
Group X: [Name] (0/X tasks)
- [ ] Specific first task...
- Test command: npx jest tests/groupX-xxx.test.js

### 🐛 ISSUES ENCOUNTERED
- Problem: [Description]
- Solution: [How fixed]
- Prevention: [How to avoid]

### 📊 FINAL STATE
- Build status: ✅ Passing
- Dev server: ✅ Working
- Test dashboard: [X/Y groups complete]
```

---

## **Quality Gates**

### **Group Completion Criteria**
```bash
# All tests in group must pass
npx jest tests/groupX-[name].test.js

# Build must still work  
npm run build

# Previous groups must still pass
node run-tests.js | grep "ALL TESTS PASSED"
```

### **Project Handoff Criteria**
```bash
# All 4 groups complete
node run-tests.js | grep "100%"

# Production ready
npm run build && npm start

# All animations working
# (manual verification in browser)
```

---

## **Emergency Recovery**

### **If Build Breaks**
```bash
# 1. Check specific error
npm run build 2>&1 | head -10

# 2. Verify file syntax
npx eslint components/ app/ lib/

# 3. Check imports
grep -r "import.*from.*['\"]@" components/ app/ lib/

# 4. Reset if needed
git stash  # if using git
```

### **If Tests Fail Unexpectedly**
```bash
# 1. Clear Jest cache
npx jest --clearCache

# 2. Reinstall dependencies (if needed)
rm -rf node_modules package-lock.json
npm install

# 3. Check file permissions
ls -la tests/
```

### **If Dev Server Won't Start**
```bash
# 1. Check port availability
lsof -ti:3000 | xargs kill -9

# 2. Clear Next.js cache
rm -rf .next

# 3. Restart
npm run dev
```

---

## **Agent-Specific Notes**

### **For Cursor AI**
- Use built-in terminal for running tests
- Leverage file tree view to understand structure
- Use "Generate tests" feature cautiously - we have specific test suites

### **For Claude Code**
- Use `Read` tool to examine failing tests
- Use `Bash` tool to run test commands
- Always verify file changes with `Read` after `Edit`

### **For Other Agents**
- Follow the test-driven approach
- Update HANDOFF.md religiously 
- When in doubt, run `node run-tests.js`

---

## **Success Metrics**

### **Individual Task Success**
- ✅ Specific test passes
- ✅ Build still works
- ✅ No regressions in previous tests

### **Group Success** 
- ✅ All group tests pass
- ✅ Full test dashboard shows progress
- ✅ Handoff documentation updated

### **Project Success**
- ✅ All 4 groups complete (16 tasks)
- ✅ Site loads and works at localhost:3000
- ✅ All animations functional
- ✅ Performance optimized
- ✅ Ready for production deployment

---

*Remember: This is a relay race. Each agent completes their segment perfectly and hands off cleanly to the next agent.*