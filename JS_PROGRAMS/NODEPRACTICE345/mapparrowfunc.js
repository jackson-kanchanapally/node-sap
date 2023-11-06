const people = [
    { name: 'Alice', age: 30},
    { name: 'Nani', age: 35},
    { name: 'Mnai', age: 25},
    { name: 'Raghu', age: 12},
];

//Example: mapping names to uppercase using arrow function
const uppercaseNames = people.map(person => person.name.toUpperCase());
console.log('People older than 30:', uppercaseNames); 
