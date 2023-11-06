// Import the EventEmitter class from the 'events' module.
const EventEmitter = require('events');

// Create a new instance of EventEmitter.
const myEmitter = new EventEmitter();

// Define a listener function that we want to be able to remove.
function testEventListener() {
    console.log("TEST_Event was fired");
}

// Register the listener function for the "TEST_EVENT" event.
myEmitter.on("TEST_EVENT", testEventListener);

// Emit the "TEST_EVENT" event, which triggers the registered listener.
myEmitter.emit("TEST_EVENT");

// To remove the listener, call the removeListener method.
myEmitter.removeListener("TEST_EVENT", testEventListener);

// Emit the "TEST_EVENT" event again. This time, the listener has been removed, so nothing will happen.
myEmitter.emit("TEST_EVENT");
