let startBtn = document.getElementById('str-btn');
let stopBtn = document.getElementById('stp-btn');
let resetBtn = document.getElementById('rest-btn');
let msec = 0;
let sec = 0;
let min = 0;
let timerId = null;

let msecElement = document.getElementById('msec');
let secElement = document.getElementById('sec');
let minElement = document.getElementById('min');

startBtn.addEventListener('click', () => {
    if (timerId !== null) {
        clearInterval(timerId);
    }

    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    msec = 0;
    sec = 0;
    min = 0;
    updateDisplay();
});

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
    }
    if (sec === 60) {
        sec = 0;
        min++;
    }
    updateDisplay();
}

function updateDisplay() {
    let mString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    msecElement.innerHTML = `${mString}:ms`;
    secElement.innerHTML = `${secString}:sec`;
    minElement.innerHTML = `${minString}min:`;
}
