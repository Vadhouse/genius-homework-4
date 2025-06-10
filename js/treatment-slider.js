const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 56,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.treatment-section__button.next',
    prevEl: '.treatment-section__button.prew',
  },
});
