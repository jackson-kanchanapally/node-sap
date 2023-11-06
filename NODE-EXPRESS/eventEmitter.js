// Import the EventEmitter class from the 'events' module.
const EventEmitter = require('events');

// Create a new instance of EventEmitter.
const myEmitter = new EventEmitter();

// Register multiple event listeners for the "TEST_EVENT" event.

// Event listener 1: When "TEST_EVENT" is emitted, this function will be called.
myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_Event was fired");
});

// Event listener 2: Another function to be called when "TEST_EVENT" is emitted.
myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_Event was fired");
});

// Event listener 3: Yet another function for the same event.
myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_Event was fired");
});

// Emit the "TEST_EVENT" event, which triggers all registered listeners.
myEmitter.emit("TEST_EVENT");
