let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector('.value-container');

let progressValue = 0;
let progressEndValue = 55;
let speed = 100;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #DFB462 ${progressValue * 3.6}deg,
    #FDE5B6 ${progressValue * 3.6}deg
  )`;
  if (progressValue === progressEndValue) {
    clearInterval(progress);
  }
}, speed);
