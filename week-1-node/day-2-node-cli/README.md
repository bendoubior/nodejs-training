# Day 2 – Node.js CLI Tool

## Subjects
- Node.js runtime
- process.argv
- Modules
- Input validation

## Resources
- https://nodejs.org/en/docs
- https://nodejs.org/api/process.html
- https://nodejs.org/api/modules.html

---

## Coding Task

Create a CLI calculator tool.

Run example:

node app.js add 5 3
node app.js subtract 10 4
node app.js multiply 6 7

### Requirements

1. Read arguments from process.argv
2. Support 3 commands:
   - add
   - subtract
   - multiply
3. Validate:
   - Exactly 2 numbers
   - Numbers must be valid
4. Print result clearly:
   Result: 8
5. If invalid input:
   Print a clear error message

### Bonus (Optional)
Add divide command with division-by-zero protection.