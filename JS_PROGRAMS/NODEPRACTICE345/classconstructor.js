class country{
    constructor(name, independentOn) {
        this.name = name
        this.independentOn = independentOn
    }
    describe() {
        console.log(`${this.name} got its independence on ${this.independentOn}.`)
        }
}    

const india = new country('The country india',1947)

india.describe()