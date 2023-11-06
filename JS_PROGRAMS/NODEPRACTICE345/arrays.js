//there are two syntax for creating an empty arry:
let arr = new Array();
let arr1 = [];

//almost all the time ,the second syntax is used. we can supply initial elemnets in the brackets:
let fruits1 = ["pine", "banana", "watermelon"];

//we can get an element by its number in square brackets:
let fruits = ["pine", "banana", "watermelon"];
console.log( "list of fruits: " );
console.log( fruits[0] );
console.log( fruits[1] );
console.log( fruits[2] );

//replace the item
console.log( "before replace: "+fruits[1] );
console.log( "list of fruits: "+fruits );
fruits[1] = 'cherry';
console.log( "After replace: "+fruits[1] );
console.log( "list of fruits: "+fruits );

//to add an item
fruits[3] = 'papaya';
console.log( "After adding a new item ")
console.log("The list of fruits are "+fruits);

//remove an item

