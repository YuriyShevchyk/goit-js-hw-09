const startBtn = document.querySelector(`[data-start]`);
const stopBtn = document.querySelector(`[data-stop]`);

startBtn.addEventListener(`click`, startColorizer);
stopBtn.addEventListener(`click`, stopColorizer);

let btnIsActive = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorizer() {
    
    btnIsActive = false
    startBtn.setAttribute('disabled', '');
    startBtn.classList.remove(".button-switcher:hover")
    stopBtn.removeAttribute('disabled');
    const intervalId = setInterval(() => {
        if (btnIsActive === true) {
            clearInterval(intervalId);
            console.log("interval cleared")
            return
        }
        const randomColor = getRandomHexColor()
        document.body.style.backgroundColor = randomColor
    
    }, 1000)
    
}

function stopColorizer() {
    btnIsActive = true
    console.log("stop click")
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', '');
}