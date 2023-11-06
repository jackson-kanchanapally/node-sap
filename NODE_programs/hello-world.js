// Import the built-in 'http' module to create an HTTP server.
const http = require('http');

// Create an HTTP server using the 'http.createServer' method.
// The server takes a callback function that will be executed for each incoming request.
const server = http.createServer((req, res) => {
    // Inside the callback function:
    
    // Set the response content to 'HELLO WORLD' using the 'res.end' method.
    // This text will be sent to the client (web browser) as the response.
    res.end('HELLO WORLD');
});

// Listen for incoming connections on port 4242.
server.listen(4242, () => {
    // Once the server is listening, this callback function will be executed.
    // It simply logs a message to the console indicating that the server is running.
    console.log('Server is running.......');
});

//to kill the servers we should use ctrl+c