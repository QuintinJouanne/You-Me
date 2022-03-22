const form = document.getElementById('form');
const name = document.getElementById('username');
const firstName = document.getElementById('firstname');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
    
    const usernameValue = username.value.trim();
    const firstnameValue = firstname.value.trim();

        if(usernameValue === '') {
            setErrorFor(username,'Username ne peut pas être vide');
        }  else {
            setSuccessFor(username);
        }

        if(firstnameValue === '') {
            setErrorFor(firstname, 'firstname ne peut pas être vide');
        } else {
            setSuccessFor(firsname); {
        }
}

function setErrorFor(input, message) {
	const inputs = input.parentElement;
	const small = inputs.querySelector('small');
	inputs.className = 'inputs error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const inputs = input.parentElement;
	inputs.className = 'inputs success';
}