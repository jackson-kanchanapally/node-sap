class Animal {
    //_name = "";//we may remove it 
    constructor(name)
    {
        this.name = name;
    }
    speak()
    {
        console.log(`${this.name} makes a noise.`);//back tick consider as string 
    }
}
var ani = new Animal("Dog");
ani.speak();