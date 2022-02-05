const html = document.getElementsByTagName('html')[0];
const navMenu = document.querySelector('.desktop-nav');
const showBtn = document.querySelector('nav .menu-bars');
const closedBtn = document.querySelector('nav .closed-menu-bars');
const navLinks = document.querySelectorAll('nav ul li');

function showMenu() {
  navMenu.classList.add('open');
  closedBtn.style.display = 'block';
  html.style.overflow = 'hidden';
}

showBtn.addEventListener('click', showMenu);

