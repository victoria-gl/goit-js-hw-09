import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

btnStart.disabled = true;
let timerId = null;

Notiflix.Notify.init({
  width: '300px',
  position: 'center-top',
  closeButton: false,
});

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');

      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      inputDate.disabled = true;
    }
  },
});

btnStart.addEventListener('click', onClickStart);

function onClickStart(event) {
  timerId = setInterval(() => {
    const choosenDate = new Date(inputDate.value);
    const timeToFinish = choosenDate - Date.now();

    let { days, hours, minutes, seconds } = convertMs(timeToFinish);
    btnStart.disabled = true;
    day.textContent = days < 10 ? '0' + days : days;
    hour.textContent = hours < 10 ? '0' + hours : hours;
    minute.textContent = minutes < 10 ? '0' + minutes : minutes;
    second.textContent = seconds < 10 ? '0' + seconds : seconds;

    if (timeToFinish < 1000) {
      clearInterval(timerId);
      btnStart.disabled = true;
    }
  });
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}