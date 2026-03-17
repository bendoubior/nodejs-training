1. What is the event loop?
    answer - The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that a single JavaScript thread is used by default — by offloading operations to the system kernel whenever possible.This is a mechanism that Node.js uses to simulate asynchronous operations on a single process.
2. Why is Node.js considered non-blocking?
    answer - Node.js is non-blocking because it offloads I/O operations to the OS instead of waiting for them to finish.
    This lets the main thread keep running other code and handle results later via callbacks or Promises.