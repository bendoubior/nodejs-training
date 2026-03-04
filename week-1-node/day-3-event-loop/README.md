# Day 3 – Event Loop & Async Behavior

## Subjects
- Event loop basics
- Non-blocking I/O
- setTimeout
- Promise.resolve

## Resources
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
- Search: "Node.js Event Loop Explained" (YouTube)

---

## Coding Task

Create a script that prints:

Start
End
Promise
Timeout

### Requirements

1. Use:
   - console.log
   - setTimeout
   - Promise.resolve()
2. Ensure output order is:

Start
End
Promise
Timeout

3. Add comments explaining WHY this order happens.

### Bonus
Add process.nextTick() and explain its behavior.