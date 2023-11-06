// Initialize a variable 'counter' to 0 to keep track of iterations.
let counter = 0;
// Use 'setInterval' to execute a callback function repeatedly with a specified time interval.
const inter = setInterval(() => {
    // Inside the callback function:
    // Log "Hello World" to the console.
    console.log('Hello World');
    // Increment the 'counter' variable by 1 on each iteration.
    counter += 1;
    // Check if 'counter' has reached a value of 5.
    if (counter == 5) {
        // If 'counter' is equal to 5, log "done" to the console.
        console.log("done");
        // Clear the interval by passing the interval ID ('inter') to 'clearInterval'.
        // This stops further execution of the callback function.
        clearInterval(inter);
    }
}, 1000); // The interval is set to 1000 milliseconds (1 second).
