const progressBar = document.querySelector('.circular-progress');
const valueContainer = document.querySelector('.value-container');

let progressValue = 0;
const progressEndValue = 55;
const speed = 100;

const progress = setInterval(() => {
  progressValue += 1;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #E94F4F ${progressValue * 3.6}deg,
    #F3A0A0 ${progressValue * 3.6}deg
  )`;
  if (progressValue === progressEndValue) {
    clearInterval(progress);
  }
}, speed);
