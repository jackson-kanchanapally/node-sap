// Import the 'fs' (file system) module, which provides functions for interacting with the file system.
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
async function main() {
    const data = await readFile(__filename);
    console.log('File data is ', data);
}
    
main();

console.log('TEST');
