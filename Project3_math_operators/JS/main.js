function myAdd() {
  var addition = 2 + 2;
  document.getElementById("Math").innerHTML= "2 + 2 = " + addition; //addition func
}


function mySub() {
  var subtraction = 2 - 2;
  document.getElementById("Sub").innerHTML= "2 - 2 = " + subtraction; //subtraction func
}

function myMultiply() {
  var multiplication = 2 * 2;
  document.getElementById("Multiply").innerHTML= "2 * 2 = " + multiplication; //multiply func
}
function myDiv() {
  var division = 2/2;
  document.getElementById("div").innerHTML= "2 / 2 = " + division; //division func
}

function myI() {
  var x= 5;
  x++;
  document.getElementById("Inc").innerHTML="incremation= " + x;  //incremate func
}


function myD() {
  var x= 5;
  x--;
  document.getElementById("Dec").innerHTML="Decremation= " + x;  //decremate func
}

window.alert(Math.random()*50); // random number func

