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

### Coding Task 1 – Reading and Processing JSON
You are given `data.json` containing:

[
  { "name": "Alice", "age": 22 },
  { "name": "Bob", "age": 30 },
  { "name": "Charlie", "age": 25 }
]

#### Requirements:

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

### Coding Task 2 – Understanding Promises and Parallel Execution

In backend systems we often make multiple API calls at the same time.
This exercise shows the difference between sequential and parallel async execution.

#### Requirements:
1. Create a Fake Slow API
  - Create a file:
      src/slow-api.js

  - Implement a function that simulates a 3 second server request.

  Example behavior:

    Logs when the request starts

    Resolves after 3 seconds

  Function signature:

    fakeApiCall(id)

  Expected output example:

    - Request 1 started
    - Request 1 finished

  Use setTimeout and return a Promise.

2. Sequential Execution

  - Create:

    src/sequential.js

  - Call the fake API three times sequentially using await.

  Example flow:

    - Call request 1

    - Wait for it to finish

    - Call request 2

    - Wait

    - Call request 3

  Measure the runtime using:

    - console.time()
    - console.timeEnd()

  Expected runtime:

    ~9 seconds

3. Parallel Execution

  Create:

    src/parallel.js

  Call the three API requests at the same time.

  Expected runtime:

    ~3 seconds

4. Bonus Task – Use Promise.all

  Create:

    src/promise-all.js

  Use:

    Promise.all()

  to run the three API requests in parallel.

  Expected runtime:

    ~3 seconds

  Expected output example:

    [
      "Response from request 1",
      "Response from request 2",
      "Response from request 3"
    ]

#### What You Should Learn From This Exercise

After completing this task you should understand:
  - What a Promise represents
  - How async/await works
  - The difference between sequential and parallel async execution
  - Why Promise.all() is commonly used in backend services
  - How Node.js handles multiple asynchronous operations