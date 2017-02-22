"use strict";

var timer = document.getElementById("timer");
var buttonStart = document.getElementById("start");
var buttonClear = document.getElementById("clear");
var hour = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    play = false,
    period = 5;

var stopwatch = setInterval(function () {

    if (!play) return;

    milliseconds += period;

    if (milliseconds > 999) {
        seconds += 1;
        milliseconds = 0;
    }

    if (seconds > 59) {
        minutes += 1;
        seconds = 0;
    }

    if (minutes > 59) {
        hour += 1;
        minutes = 0;
    }

    if (hour > 24) {
        hour = 0;
    }

    update();
}, period);

function update() {
    var outMs = milliseconds > 99 ? (milliseconds > 9 ? milliseconds : '00' + milliseconds) : '0' + milliseconds;
        outMs = milliseconds === 0 ? "000" : outMs;
    var outSec = seconds > 9 ? seconds : '0' + seconds;
    var outMin = minutes > 9 ? minutes : '0' + minutes;
    var outHour = hour > 9 ? hour : '0' + hour;

    timer.innerHTML = outHour + ":" + outMin + ":" + outSec + "." + outMs;
}

buttonStart.addEventListener('click', function(){
    play = !play;
    if (play) {
        buttonStart.innerHTML = "Pause";
    } else {
        buttonStart.innerHTML = "Start";
    }
});
buttonClear.addEventListener('click', function () {
    hour = minutes = seconds = milliseconds = 0;
    play = false;
    update();
});




