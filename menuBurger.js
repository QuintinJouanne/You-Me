const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const displayNone = document.querySelector('.displayNone');

burger.addEventListener('click', () => {
  navbar.classList.toggle('show-nav');

  if (getComputedStyle(displayNone).display !== 'none') {
    displayNone.style.display = 'none';
  } else {
    displayNone.style.display = 'block table';
  }
});
