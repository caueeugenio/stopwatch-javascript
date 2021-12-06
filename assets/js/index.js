let counter = document.getElementById("counter");
let stopwatch;
console.log(counter);

// window.onload(setInitialValues());

let minutes = 0;
let seconds = 0;
let hours = 0;

function setInitialValues() {
  minutes = 0;
  seconds = 0;
  hours = 0;
}

setInitialValues();
let startButton = document.getElementById("start-action");
let stopButton = document.getElementById("stop-action");
let clearButton = document.getElementById("clear-action");

startButton.addEventListener("click", () => {
  stopwatch = setInterval(() => {
    startTimer();
  }, 50);
  
  startButton.style.visibility = "hidden";
});


stopButton.addEventListener("click", () => {
  clearInterval(stopwatch);
  startButton.style.visibility = "visible";

});

clearButton.addEventListener("click", () => {
  counter.innerHTML = "00:00:00";
  setInitialValues();
});

function startTimer() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let format =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  counter.innerHTML = format;
}
