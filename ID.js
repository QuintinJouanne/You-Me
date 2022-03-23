const formValid = document.getElementById('button');
const inputLastName = document.getElementById('inputLastName');
const inputFirstName = document.getElementById('inputFirstName');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

function validation(event) {
  if (inputLastName.validity.valueMissing) {
    event.preventDefault();
    lastName.textContent = 'Merci de bien vouloir renseigner votre nom';
    lastName.style.color = 'red';
  }
  if (inputFirstName.validity.valueMissing) {
    event.preventDefault();
    firstName.textContent = 'Merci de bien vouloir renseigner votre prénom';
    firstName.style.color = 'red';
  }
}
formValid.addEventListener('click', validation);
