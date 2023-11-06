let fruits = ["pine", "banana", "watermelon"]; 
console.log( "list of fruits: "+fruits );
//calculate the index of the middle element
let middleIndex = Math.floor(fruits.length / 2); 
//use splice to remove the middle element
fruits.splice(middleIndex, 1);
console.log( "list of fruits: "+fruits );


