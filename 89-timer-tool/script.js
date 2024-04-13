const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let timer = null;
let time = 25 * 60; // 25 minutes

const updateTimeDisplay = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const startTimer = () => {
    if (!timer) {
        timer = setInterval(() => {
            time--;
            updateTimeDisplay();
            if (time === 0) {
                clearInterval(timer);
                timer = null;
                alert('Time is up!');
            }
        }, 1000);
    }
};

const stopTimer = () => {
    clearInterval(timer);
    timer = null;
};

const resetTimer = () => {
    stopTimer();
    time = 25 * 60; // reset to 25 minutes
    updateTimeDisplay();
};

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

window.onload = updateTimeDisplay;