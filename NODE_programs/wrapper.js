//function (exports,require, module, __filename, __dirname) 
// In CommonJS modules, Node.js provides several predefined variables as parameters to the module wrapper function.

// 'exports' is an object that is initially empty. You can add properties/methods to it to make them available to other modules when they require this module.
// 'require' is a function used to load other modules or files. You can use it to import functionality from other modules.
// 'module' is an object representing the current module. It includes information about the module, such as its filename and exports.
// '__filename' is a global variable that contains the absolute path of the current module's file.
// '__dirname' is a global variable that contains the absolute path of the directory where the current module is located.

// The following line logs the 'arguments' object. In this context, 'arguments' refers to an array-like object that contains the values of the parameters passed to the module wrapper function.

console.log(arguments);
