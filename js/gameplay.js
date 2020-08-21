function timedOut() {
    alert("Some error message");
}

// set a timer
setTimeout( timedOut , 60000 );

function countdown() {
    var seconds = 59;
    function tick() {
        var counter = document.getElementById("timeClock");
        seconds--;
        counter.innerHTML =(seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            alert("You twat!");
        }
    }
    tick();
}

countdown();