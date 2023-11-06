// Define a function called dynamicArgsFunction with no formal parameters.
function dynamicArgsFunction() {
    // Inside the function, use the special 'arguments' object, which is an array-like object
    // containing all the arguments passed to the function.
    console.log(arguments);
}

// Call the dynamicArgsFunction with multiple arguments (3, 7, 5, 4).
dynamicArgsFunction(3, 7, 5, 4);
