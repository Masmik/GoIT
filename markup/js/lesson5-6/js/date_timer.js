"use strict";

var buttonStart = document.getElementById("start");
var buttonClear = document.getElementById("clear");
var timer = document.getElementById("timer");
var play = false;

buttonStart.addEventListener('click', function () {
    play = !play;
    if (play) {
        buttonStart.innerHTML = "Pause";
        start();
    } else {
        buttonStart.innerHTML = "Start";
        pause();
    }
});
buttonClear.addEventListener('click', function () {
    clear();
});


var timerStart = null,
    timerEnd = null,
    startId = null,
    timerPause = null,
    timePauseDuration = 0,
    firstStart = null;


function start() {

    if (firstStart === null) {
        firstStart = new Date().getTime();
    }

    timerStart = new Date(new Date() - firstStart).getTime();

    console.log("timerStart",timerStart);
    //
    if (timerPause != null) {
        timePauseDuration += new Date(timerStart - timerPause).getTime();
    }
    console.log("timePauseDuration",timePauseDuration);

    startId = setInterval(calcTime, 10);

}

function pause() {
    timerPause = new Date(new Date() - firstStart).getTime();
    clearInterval(startId);
}

function clear() {
    timerEnd = new Date(new Date() - new Date());
    timePauseDuration = 0;
    clearInterval(startId);
    drawTimer(timerEnd);
}

function calcTime() {
    var currentTime = new Date().getTime();
    var outputTime = new Date(currentTime - firstStart- timePauseDuration);
    drawTimer(outputTime);
}

function drawTimer(time) {

    var milliseconds = time.getUTCMilliseconds();
    var seconds = time.getUTCSeconds();
    var minutes = time.getUTCMinutes();
    var hours = time.getUTCHours();

    var outMs = milliseconds > 99 ? (milliseconds > 9 ? milliseconds : '00' + milliseconds) : '0' + milliseconds;
    outMs = milliseconds === 0 ? "00" : outMs;
    var outSec = seconds > 9 ? seconds : '0' + seconds;
    var outMin = minutes > 9 ? minutes : '0' + minutes;
    var outHours = hours > 9 ? hours : '0' + hours;

    timer.innerHTML = outHours + ":" + outMin + ":" + outSec + "." + outMs;
}
