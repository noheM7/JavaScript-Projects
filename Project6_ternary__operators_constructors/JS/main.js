function Ride_Function() {
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_ride= (Height<52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {

    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2015, "White and red");
var Erik= new Vehicle("Ford", "Pinto", 1970, "Mustard");
function myFunction(){                                                                       //   constructor func
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " +Erik.Vehicle_Color +"-colored " +Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


const Car2 = new Vehicle("tesla", "x", 2015, "blue");


function myfunction(){

document.getElementById("New_and_This").innerHTML ="My new tesla is model  " + Car2.Vehicle_Model + ".";   //new costruct func
}

function count_Function(){           
    document.getElementById("Counting").innerHTML= Count();                     // Nested function
    function Count(){
        var Starting_point= 9;
        function Plus_one() {Starting_point += 10;}
        Plus_one();
        return Starting_point;
    }
}
