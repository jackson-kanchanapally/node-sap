var car = {
    registrationNumber : "FT1234",
    brand : "Benz",

    //displayDetails: function(){
    //    console.log(this.registrationNumber + " " + this.brand)
    //}
    displayDetails: function(ownerName){
            console.log(ownerName + ",this is your car: " + this.registrationNumber + " " + this.brand);
    }
}

//car.displayDetails();

//but what if we want to borrow a method?
//var myCarDetails = car.displayDetails;
//myCarDetails();
//{
//this is correct code
//var myCarDetails = car.displayDetails.bind(car);
//myCarDetails(); 
//}
var myCarDetails = car.displayDetails.bind(car, "sumanth");
myCarDetails();