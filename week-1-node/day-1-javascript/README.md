# Day 1 – JavaScript & Async/Await

## Subjects
- Variables
- Arrays & objects
- Promises
- Async/Await

## Resources
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

---

## Coding Task

You are given `data.json` containing:

[
  { "name": "Alice", "age": 22 },
  { "name": "Bob", "age": 30 },
  { "name": "Charlie", "age": 25 }
]

### Requirements:

1. Create a function `loadUsers()` that:
   - Reads the JSON file
   - Returns a Promise

2. Create an async function `printUsersOver25()` that:
   - Waits for the file to load
   - Filters users over age 25
   - Prints:
     Name: Bob | Age: 30

3. Handle file errors properly.

Run with:
node solution.js