const startBtn = document.querySelector(`[data-start]`);
const stopBtn = document.querySelector(`[data-stop]`);

startBtn.addEventListener(`click`, startColorizer);
stopBtn.addEventListener(`click`, stopColorizer);

let intervalId = null;
stopBtn.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorizer() {
    
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
    intervalId = setInterval(() => {
        if (intervalId === true) {
            clearInterval(intervalId);
            return
        }
        const randomColor = getRandomHexColor()
        document.body.style.backgroundColor = randomColor
    
    }, 1000)
    
}

function stopColorizer() {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', '');
}