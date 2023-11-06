//Import the 'fs' (file system) module, which provides functions for interacting with the file system.
const fs = require('fs');
// Use the asynchronous 'fs.readFile' method to read the contents of the current file (__filename).
// This method takes a callback function (cb1) as its second argument.
fs.readFile(__filename, function cb1(err, data) {
    // This is the first callback function, executed once the file reading is complete.
    // Inside the first callback, use the asynchronous 'fs.writeFile' method to write the data read from the file to a new file.
    // The new file will have the same name as the current file with '.copy' appended to it.
    // This method takes a callback function (cb2) as its second argument.
    fs.writeFile(__filename + '.copy', data, function cb2(err) {
        // This is the second callback function, executed once the file writing is complete.
        // You can nest more callbacks here to perform additional operations if needed.
        // Any code inside this callback function will execute after the 'fs.writeFile' operation is finished.
        // Note: Error handling should be implemented as needed in each callback function.
    });
});
// Print 'TEST' to the console. This line executes immediately without waiting for the file reading and writing to finish.
console.log('TEST');
