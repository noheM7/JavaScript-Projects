let activeplayer='X';
let selectedsquares=[];

function placeXorO(squarenumber){
    if (!selectedsquares.some(element => element.includes(squarenumber))){
        let select = document.getElementById(squarenumber);                 
        if(activeplayer==='X'){
            select.style.backgroundImage='url("images/X.png")';
        } else{                                                                             //placing images for x and o
            select.style.backgroundImage='url("images/O.png")';                                        
        }
        selectedsquares.push(squarenumber + activeplayer);
        checkwinconditions();
        if (activeplayer==='X'){
            activeplayer='O';
        }else {                                                                                     //changing players
            activeplayer='X';
        }

        var audio = new Audio('media/place.mp3');
        audio.play();


        if (activeplayer==='O'){
                                                                                                            //audio for placement of XorO




            disableclick();
            setTimeout(function(){computersturn();},1000);
        }
        return true;
    }

    function computersturn(){
        let success= false;
        let pickAsquare;
        while (!success){
            pickAsquare=String(Math.floor(Math.random()*9));                                        //computers turn for game
            if (placeXorO(pickAsquare)){
                placeXorO(pickAsquare); 
                success=true;
            };
        }

    }

}


function checkwinconditions(){

    if (arrayIncludes('0X','1X','2X')) {drawWinLine(50,100,558,100)}
    else if(arrayIncludes('3X','4X','5X')) {drawWinLine(50,304 ,558 ,304 )}
    else if(arrayIncludes('6X','7X','8X')) {drawWinLine(50,304 ,558 ,508 )}
    else if(arrayIncludes('0X','3X','6X')) {drawWinLine(100,50 ,100 ,558 )}
    else if(arrayIncludes('1X','4X','7X')) {drawWinLine(304,50 ,304 ,558 )}
    else if(arrayIncludes('2X','5X','8X')) {drawWinLine(508,50 ,508 ,558 )}
    else if(arrayIncludes('6X','4X','2X')) {drawWinLine(100,508 ,510 ,90 )}
    else if(arrayIncludes('0X','4X','8X')) {drawWinLine(100,100 ,520 ,520 )}
    else if(arrayIncludes('00','10','20')) {drawWinLine(50,100 ,558 ,100 )}
    else if(arrayIncludes('30','40','50')) {drawWinLine(50,304 ,558 ,304 )}                                             //checks if x wins func
    else if(arrayIncludes('60','70','80')) {drawWinLine(50,508 ,558 ,508 )}
    else if(arrayIncludes('00','30','60')) {drawWinLine(100, 50 , 100 , 558 )}
    else if(arrayIncludes('10','40','70')) {drawWinLine(304, 50 , 304 , 558 )}
    else if(arrayIncludes('20','50','80')) {drawWinLine(508, 50 , 508  ,558 )}
    else if(arrayIncludes('60','40','20')) {drawWinLine(100, 508 , 510 , 90 )}
    else if(arrayIncludes('00','40','80')) {drawWinLine(100, 100, 520 , 520 )}

    else if (selectedsquares.length>=9){  
                                                                              //tie checker and statement
    var audio = new Audio('media/tie.mp3');
    audio.play();
     

        setTimeout(function(){resetgame();},500);
    }




    function arrayIncludes(squareA, squareB, squareC){
        const a= selectedsquares.includes(squareA);
        const b= selectedsquares.includes(squareB);                     // check 3 in a row
        const c= selectedsquares.includes(squareC);

        if (a===true && b ===true && c===true) {return true;}

    }
}


function disableclick(){
    body.style.pointerevents= 'none';

    setTimeout(function(){body.style.pointerevents='auto';}, 1000);
}

function drawWinLine(coordx1, coordy1,coordx2, coordy2) {

    const canvas= document.getElementById('win-lines');

    const c= canvas.getContext('2d');

    let x1= coordx1,
        y1=coordy1,
        x2= coordx2,
        y2= coordy2,
        x= x1,
        y=y1;


function animatelinedrawing(){

    const animationloop= requestAnimationFrame(animatelinedrawing);

    c.clearRect(0,0,608,608);
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x,y);
    c.lineWidth=10;
    c.strokeStyle= 'rgba(70,255,33,.8)';
    c.stroke();
    if (x1<=x2 && y1<=y2){
        if(x<x2){x+=10}
        if (y<y2) {y +=10;}

        if (x>=x2 && y>=y2) {cancelAnimationFrame(animationloop);}
    }

    
    if (x1<=x2 && y1>=y2){
        if(x<x2){x+=10}
        if (y>y2) {y -=10;}

        if (x>=x2 && y<=y2) {cancelAnimationFrame(animationloop);}
}

}
function clear(){

    const animationloop= requestAnimationFrame(clear);

    c.clearRect(0,0,608,608);
    cancelAnimationFrame(animationloop);
}


disableclick();
var audio = new Audio('media/winGame.mp3');
audio.play();

animatelinedrawing();

setTimeout(function(){clear(); resetgame(); },1000);
}


function resetgame(){
    for (let i=0; i<9; i++){
        let square = document.getElementById(String(i));

        square.style.backgroundImage= '';
    }
    selectedsquares=[];
}


 


































