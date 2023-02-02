var x= 10;
function Add_numbers_1(){
    document.write(20+ x + "<br>");
}                                                       //Global variable
function Add_numbers_2() {
    document.write(x+ 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1(){
    var x=10;
    document.write("<br>");
    document.write(20 + x + "<br>");
}
function Add_numbers_2(){
    document.write(x+100);
}
Add_numbers_1();
Add_numbers_2();
document.write("<br>");


function Add_numbers_1() {
    var x= 10;
    console.log(15 +x);
}
function Add_numbers_2() {
    console.log(y +100);
}
Add_numbers_1();
Add_numbers_2();

function Age_Function() {
    Age= document.getElementById("Age").value;
    if (Age>=18) {
        Vote = "You are old enough to vote"
    }
    else {
        Vote = "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML= Vote;
}

function Time_function() {
    var Time =new Date().getHours();
    var Reply;
    if (Time <12 == Time < 18) {
        Reply= "It is afternoon.";
    }
    else{
        Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}