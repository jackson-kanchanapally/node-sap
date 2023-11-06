//A method is a function on an object , or a task that an oject can perform
//A method uses this to refer to the properties of the object
//this is the same as india
const india = {
    name: 'the country India',
    independentOn: 1947,

    describe() {
        console.log(`${this.name} got its independence on ${this.independentOn}.`)
    },
}
india.describe()