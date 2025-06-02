const mobileMenu = document.querySelector('.mobile-menu');
const modalBtnOpen = document.querySelector('.menu-btn-open');
const modalBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-open');
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
