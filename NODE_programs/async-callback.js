const fs = require('fs');

fs.readFile(__filename, function cb(err, data) {
    // This function is the callback that will be executed once the file reading is complete.    
    // Only keep the code that prints the data when there is no error.
    console.log('File data is ', data);
});
// Print 'TEST' to the console. This line executes immediately without waiting for the file reading to finish.
console.log('TEST');
