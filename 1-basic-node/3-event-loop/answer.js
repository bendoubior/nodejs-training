
function main(){

    // Node.js runs synchronous code first, then clears microtasks in order: process.nextTick (highest priority) → Promises.
    // Only after those queues are empty does it move to the event loop phases (like setTimeout and setImmediate).
    // That’s why nextTick and Promises always run before timers, even if the timers are set to 0ms

    console.log("Start");
    setTimeout(() => console.log("timeout"), 0);
    Promise.resolve().then(() => {
    console.log("promise");
    process.nextTick(() => console.log("nextTick1"));
    });
    process.nextTick(() => console.log("nextTick2"));
    console.log("End");
}

main();