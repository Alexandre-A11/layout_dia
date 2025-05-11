'use strict';

const btnMenu = document.querySelector('.nav__menu-btn');
const menuList = document.querySelector('.nav__menu-list');

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('is-open');
  menuList.classList.toggle('is-open');
});
