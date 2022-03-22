function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', (e) => {
    navbar.classList.toggle('show-nav');
  });
}
toggleMenu();
