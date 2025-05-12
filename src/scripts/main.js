'use strict';

const btnMenu = document.querySelector('.nav__menu-btn');
const menuList = document.querySelector('.nav__menu-list');
const btnPrev = document.querySelector('.slideshow__btn--prev');
const btnNext = document.querySelector('.slideshow__btn--next');

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('is-open');
  menuList.classList.toggle('is-open');
});

const showSlides = (n) => {
  let i;
  let slides = document.querySelectorAll('.slideshow__slide');

  if (slides.length === 0) return;

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
};

let slideIndex = 1;

showSlides(slideIndex);

btnPrev.addEventListener('click', () => showSlides((slideIndex += -1)));
btnNext.addEventListener('click', () => showSlides((slideIndex += 1)));
