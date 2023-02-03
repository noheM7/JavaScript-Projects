function while_loop(){
    text = "";
    x= 1;
   while (x < 11) {
     text += "<br>The number is " + x;
     x++;
   }
   document.getElementById("whileloop").innerHTML = text;
}

function let_object(){
   let x=10;
   {
    let x = 13;
   }
  document.getElementById("letobject").innerHTML=document.write(x) ;
}

function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] ="eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML= "In this pic, the cat is " + Cat_Picture[2] + ".";
}

var cars= ["Tesla", "Prius", "Camry"];
var content="";
var y;
function for_loop() {
    for (y = 0; y<cars.length; y++){
        content += cars[y] + "<br>";
    }
    document.getElementById("cars_list").innerHTML=content;
}