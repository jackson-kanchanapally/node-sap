const people = [
    { name: 'Alice', age: 30},
    { name: 'Nani', age: 35},
    { name: 'Mnai', age: 25},
    { name: 'Raghu', age: 12},
];

//Example: filtering people older than 30 using arrow function
const olderThan30 = people.filter(person => person.age > 30);
console.log('People older than 30:', olderThan30) 
