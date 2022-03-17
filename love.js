let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector('.value-container');

let progressValue = 0;
let progressEndValue = 55;
let speed = 100;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #E94F4F ${progressValue * 3.6}deg,
    #F3A0A0 ${progressValue * 3.6}deg
  )`;
  if (progressValue === progressEndValue) {
    clearInterval(progress);
  }
}, speed);
