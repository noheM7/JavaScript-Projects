function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds=seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout (tick, 1000);
        if (seconds== -1) {
            alert ("time's Up!");                             //countdown timer func 
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

