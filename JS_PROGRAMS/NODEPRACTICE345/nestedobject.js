//in this nested object,this to refer to the current scope of the method 
//this.symbol within the details object refers to details.symbol
const india = {
    name: 'the country India',
    independentOn: 1947,
    
    details: {
        flag: 'tricoloured',
        currency: 'INR',
        printDetails(){
            console.log(`The flag is ${this.flag} and the currency is ${this.currency}.`)    
        }
    }
}
india.details.printDetails()