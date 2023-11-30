// Описаний в документації
import flatpickr from "flatpickr";

// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const input = document.querySelector("#datetime-picker");
const buttonStart = document.querySelector("button[data-start");
const selectors = {
        days: document.querySelector("span[data-days]"),
        hours: document.querySelector("span[data-hours]"),
        minutes: document.querySelector("span[data-minutes]"),
        seconds: document.querySelector("span[data-seconds]"),
};

buttonStart.setAttribute("disabled", "");
buttonStart.addEventListener("click", handleClick);

// console.log(selectors);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
    
  };

