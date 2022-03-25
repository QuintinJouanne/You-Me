const formValid = document.getElementById('button');
const inputLastName = document.getElementById('inputLastName');
const inputFirstName = document.getElementById('inputFirstName');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const currentPlayer = localStorage.getItem('currentPlayer');

function validation(event) {
  if (inputLastName.validity.valueMissing) {
    event.preventDefault();
    lastName.textContent = 'Merci de bien vouloir renseigner votre "Nom" !!';
    lastName.style.color = 'red';
  } else {
    lastName.textContent = null;
  }
  if (inputFirstName.validity.valueMissing) {
    event.preventDefault();
    firstName.textContent =
      'Merci de bien vouloir renseigner votre "Prénom" !!';
    firstName.style.color = 'red';
  } else {
    firstName.textContent = null;
  }
  localStorage.setItem(
    currentPlayer === 'one' ? 'playerOneName' : 'playerTwoName',
    inputFirstName.value
  );
}
formValid.addEventListener('click', validation);

const theme = localStorage.getItem('theme');
const contentToDisplay = {
  love: {
    background: '/img/Bg-rouge-new.png',
  },
  friend: {
    background: '/img/Bg-marron-new.png',
  },
  work: {
    background: '/img/Bg-bleu-new.png',
  },
};

const resultObject = contentToDisplay[theme];
document.body.style.backgroundImage = `url(${resultObject.background})`;
