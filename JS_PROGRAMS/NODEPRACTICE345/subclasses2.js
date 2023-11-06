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
class Dog extends Animal {
    constructor(name)
    {
        super(name);
    }
    Bark()
    {
        console.log(`${this.name} barks.`);//back tick consider as string 
    }
}
var d = new Dog ("pug");
d.speak();
d.Bark();