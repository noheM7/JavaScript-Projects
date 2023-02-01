document.write("10"+ 5 + " = " );
document.write( typeof 42) ; 
document.write( "<br> "+ 20 + " years of age" +"<br>");   //<br> creates line seperation
document.write (10>5);
document.write("<br>") ;
document.write(10<5);
document.write("<br>") ;
document.write(20 == 20);
document.write("<br>") ;

x=20;
z=20;
document.write(x===z);
document.write("<br>") ;
document.write(5>20 && 20>5);
document.write("<br>") ;
document.write(5>10 ||  20>3);

function not_Function() {
    document.getElementById("Not").innerHTML= !(10>15); // should be true
}