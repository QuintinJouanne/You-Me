const choices = document.querySelectorAll('.choice');
const nbrChoice = choices.length;
let count = 3;

const relPro = document.querySelector('.jobImg');
const relAmi = document.querySelector('.friendshipImg');
const relAmo = document.querySelector('.loveImg');

const jobChoice = document.getElementById('jobChoice');
const loveChoice = document.getElementById('loveChoice');
const friendChoice = document.getElementById('card friend');

jobChoice.addEventListener('click', () => {
  localStorage.setItem('theme', 'job');
  window.location.href='Identification.html';
});
jobChoice.addEventListener('click', () => {
  localStorage.setItem('theme', 'love');
  window.location.href='Identification.html';
});
jobChoice.addEventListener('click', () => {
  localStorage.setItem('theme', 'friend');
  window.location.href='Identification.html';
});

const imageElements = [relPro, relAmi, relAmo];

const suivant = document.querySelector('.arrowRight');
const precedant = document.querySelector('.arrowLeft');

const bgBody = document.querySelector('body');

const titleCategories = document.querySelector('.choiceCategories');

function slidesuivante() {
  const activeElement = document.querySelector('.isActive');

  activeElement.classList.remove('isActive');

  if (count < nbrChoice - 1) {
    count++;
  } else {
    count = 0;
  }

  let nextActive = imageElements[count];

  console.log('nextActive', nextActive);

  nextActive.classList.add('isActive');

  if (relAmo.classList.contains('isActive')) {
    relAmo.classList.add('loveImgPos1');
    relPro.classList.add('jobImgPos1');
    relAmi.classList.add('friendshipImgPos1');

    relAmo.classList.remove('loveImgPos2');
    relPro.classList.remove('jobImgPos2');
    relAmi.classList.remove('friendshipImgPos2');

    relAmo.classList.remove('loveImgPos3');
    relPro.classList.remove('jobImgPos3');
    relAmi.classList.remove('friendshipImgPos3');

    titleCategories.innerHTML = 'Relations Amoureuses';

    document.body.style.backgroundImage = "url('img/Bg-rouge.png')";
  }

  if (relPro.classList.contains('isActive')) {
    relAmo.classList.add('loveImgPos2');
    relPro.classList.add('jobImgPos2');
    relAmi.classList.add('friendshipImgPos2');

    relAmo.classList.remove('loveImgPos1');
    relPro.classList.remove('jobImgPos1');
    relAmi.classList.remove('friendshipImgPos1');

    relAmo.classList.remove('loveImgPos3');
    relPro.classList.remove('jobImgPos3');
    relAmi.classList.remove('friendshipImgPos3');

    titleCategories.innerHTML = 'Relations Professionnelles';

    document.body.style.backgroundImage = "url('img/Bg-marron.png')";
  }

  if (relAmi.classList.contains('isActive')) {
    relAmo.classList.add('loveImgPos3');
    relPro.classList.add('jobImgPos3');
    relAmi.classList.add('friendshipImgPos3');

    relAmo.classList.remove('loveImgPos1');
    relPro.classList.remove('jobImgPos1');
    relAmi.classList.remove('friendshipImgPos1');

    relAmo.classList.remove('loveImgPos2');
    relPro.classList.remove('jobImgPos2');
    relAmi.classList.remove('friendshipImgPos2');

    titleCategories.innerHTML = 'Relations Amicales';

    document.body.style.backgroundImage = "url('img/Bg-bleu.png')";
  }
}

function removeOriginPos() {
  const removeElement = document.querySelectorAll('.choice');
  relAmo.classList.remove('loveImgdebase');
  relPro.classList.remove('jobImgPosdebase');
  relAmi.classList.remove('friendImgPosdebase');
}

suivant.addEventListener('click', slidesuivante);
suivant.addEventListener('click', removeOriginPos);
precedant.addEventListener('click', slidesuivante);
