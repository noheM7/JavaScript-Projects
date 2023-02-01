function slice_Method(){
    var sentence= "All work and no play makes johnny a dull boy.";
    var section=sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=section;                                 //slice func
}

function string_method(){
    var x = 182                                                                             //to string funct
    document.getElementById("numbers_to_string").innerHTML=x.toString();
}

function precision_method(){
    var x= 12345.6789043215;
document.getElementById("precision").innerHTML=x.toPrecision(10);                        //  to precision func
}

function full_sentence() {
    var part1= "I have made this ";
    var part2= "into a ";                                                                                                                                   
    var part3= "complete sentence.";
    var wholesentence= part1.concat(part2, part3);                                      //concatenate func
    document.getElementById("concatenate").innerHTML= wholesentence;
}