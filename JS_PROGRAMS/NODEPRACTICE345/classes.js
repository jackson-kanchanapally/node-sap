class User {
    _name = "";//we may remove it 
    constructor(_name)
    {
        this._name = _name;
    }
    sayHi()
    {
        console.log(this._name);
    }
}
var user = new User("Sumanth");
user.sayHi();