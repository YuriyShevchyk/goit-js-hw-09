import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

const inputEl = document.querySelector("#datetime-picker");
const timerEl = document.querySelector(".timer");
const startBtn = document.querySelector("[data-start]");


startBtn.addEventListener('click', onStart)
inputEl.addEventListener('input', onInput)


const countDate = flatpickr("#datetime-picker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
})

function pad(value) {
    return String(value).padStart(2, '0')
}


function onInput() {
    const today = new Date();
    if (today >= countDate.selectedDates[0]) {
        Notiflix.Notify.failure('Choose the future date, please');
        return 
    }
    startBtn.removeAttribute('disabled')
}


function onStart() {
    Notiflix.Notify.success('Сountdown has started');
    const intervalId = setInterval(() => {
        const today = new Date();
        const countDowndDifference = countDate.selectedDates[0] - today
        const countDown = convertMs(countDowndDifference)
        daysEl.textContent = pad(countDown.days)
        hoursEl.textContent = pad(countDown.hours)
        minutesEl.textContent = pad(countDown.minutes)
        secondsEl.textContent = pad(countDown.seconds)
    }, 1000)
}