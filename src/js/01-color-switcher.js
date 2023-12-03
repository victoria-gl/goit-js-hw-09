const buttonStart = document.querySelector(".button-start");
const buttonStop = document.querySelector(".button-stop");
const bodyBtn = document.querySelector("body")

buttonStart.addEventListener("click", handleStart);
buttonStop.addEventListener("click", handleStop);

buttonStop.setAttribute("disabled", "");

let timerId = 0;

function handleStart(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
      }
    
     timerId = setInterval(() => {
        bodyBtn.style.backgroundColor = getRandomHexColor();
    }, 1000);

    buttonStart.setAttribute("disabled", "");
    buttonStop.removeAttribute("disabled");
}

function handleStop(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  clearInterval(timerId);
  buttonStop.setAttribute("disabled", "");
  buttonStart.removeAttribute("disabled");
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
   }







