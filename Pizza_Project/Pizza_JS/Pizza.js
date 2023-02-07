function getreceipt(){

    var text1= "<h3> you order:</h3>";
    var runningtotal= 0;
    var sizetotal= 0;
    var sizeArray= document.getElementsByClassName("size");
    for (var i =0;i <sizeArray.length; i++) {                                   //the receipt function
        if (sizeArray[i].checked) {
            var selectedsize= sizeArray[i].value;
            text1= text1+selectedsize+"<br>";
        }
    }
    if (selectedsize==="personal pizza"){
        sizetotal=6;
    } else if(selectedsize==="small pizza"){
        sizetotal=8;
    } else if(selectedsize==="medium pizza"){
        sizetotal=10;
         
    }else if(selectedsize==="large pizza"){                                     //make total for sizes
         sizetotal=14;
    }else if(selectedsize==="extra large pizza"){
        sizetotal=16;
}
runningtotal=sizetotal;
console.log(selectedsize+" = $" +sizetotal+".00");
console.log("size text1: "+text1);
console.log("subtotal: $"+runningtotal+".00");

gettopping(runningtotal,text1);
};

function gettopping(runningtotal,text1){
    var toppingtotal= 0;
    var selectedtopping = [];
    var toppingarray = document.getElementsByClassName("toppings");
    for (var j= 0; j <toppingarray.length; j ++) {
        if (toppingarray[j].checked) {
            selectedtopping.push(toppingarray[j].value);
            console.log("selected topping item: ("+toppingarray[j].value+")");                   //get topping function
            text1=text1+toppingarray[j].value+"<br>";
        }
    }
    var toppingcount= selectedtopping.length;
    if (toppingcount > 1) {
        toppingtotal= (toppingcount - 1);
    
    } else{
        toppingtotal=0;
    }
    runningtotal= (runningtotal + toppingtotal);
    console.log("total selected topping item: "+toppingcount);
    console.log(toppingcount+ "topping -1 free topping= " +"$"+toppingtotal+ ".00");
    console.log("topping text1: "+text1);                                                               
    console.log("Purchase Total: " +"$"+runningtotal+".00");
    document.getElementById("showtext").innerHTML=text1;
    document.getElementById("totalprice").innerHTML= "<h3> Total: <strong>$" +
        runningtotal+".00"+ "</strong></h3>";
};
