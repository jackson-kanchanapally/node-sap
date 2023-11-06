// Import the 'fs' (file system) module, which provides functions for interacting with the file system.
const fs = require('fs');

// Read the contents of the current file (__filename) synchronously.
const data = fs.readFileSync(__filename);

// Print the data read from the file to the console.
console.log('File data is ', data);

// Print 'TEST' to the console.
console.log('TEST');
