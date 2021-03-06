const choices = document.querySelectorAll('.choice');
const nbrChoice = choices.length;
let count = 3;

const relPro = document.querySelector('.jobImg');
const relAmi = document.querySelector('.friendshipImg');
const relAmo = document.querySelector('.loveImg');

const imageElements = [relPro, relAmi, relAmo];

const suivant = document.querySelector('.arrowRight');
const precedant = document.querySelector('.arrowLeft');

const bgBody = document.querySelector('body');

const titleCategories = document.querySelector('.choiceCategories');

const tips = document.querySelector('.tips');

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

    document.body.style.backgroundImage = "url('img/Bg-rouge-new.png')";

    if (window.matchMedia('(min-width: 600px)').matches) {
      document.body.style.backgroundImage =
        "url('img/Bg-rouge-new-deskstop.png')";
    }
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

    document.body.style.backgroundImage = "url('img/Bg-bleu-new.png')";

    if (window.matchMedia('(min-width: 600px)').matches) {
      document.body.style.backgroundImage =
        "url('img/Bg-bleu-new-deskstop.png')";
    }
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

    document.body.style.backgroundImage = "url('img/Bg-marron-new.png')";

    if (window.matchMedia('(min-width: 600px)').matches) {
      document.body.style.backgroundImage =
        "url('img/Bg-marron-new-deskstop.png')";
    }
  }
}

function removeOriginPos() {
  relAmo.classList.remove('loveImgdebase');
  relPro.classList.remove('jobImgPosdebase');
  relAmi.classList.remove('friendImgPosdebase');
}

suivant.addEventListener('click', slidesuivante);
suivant.addEventListener('click', removeOriginPos);

// Relie les images aux bonnes pages

const jobChoice = document.getElementById('jobChoice');
const loveChoice = document.getElementById('loveChoice');
const friendChoice = document.getElementById('friendChoice');

function redirectToIdentification() {
  window.location.href = 'Identification.html';
  localStorage.setItem('currentPlayer', 'one');
}

jobChoice.addEventListener('click', () => {
  localStorage.setItem('theme', 'work');
  redirectToIdentification();
});
loveChoice.addEventListener('click', () => {
  localStorage.setItem('theme', 'love');
  redirectToIdentification();
});
friendChoice.addEventListener('click', () => {
  localStorage.setItem('theme', 'friend');
  redirectToIdentification();
});

// G??re le local storage
