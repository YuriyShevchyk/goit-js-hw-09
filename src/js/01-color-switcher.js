const startBtn = document.querySelector(`[data-start]`);
const stopBtn = document.querySelector(`[data-stop]`);

startBtn.addEventListener(`click`, startColorizer);
stopBtn.addEventListener(`click`, stopColorizer);

let intervalId = null;
// stopBtn.setAttribute('disabled', true);
stopBtn.disabled = true;



function startColorizer() {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    // startBtn.setAttribute('disabled', true);
    // stopBtn.removeAttribute('disabled');
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopColorizer() {
    clearInterval(intervalId);
    // startBtn.removeAttribute('disabled');
    // stopBtn.setAttribute('disabled', true);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };