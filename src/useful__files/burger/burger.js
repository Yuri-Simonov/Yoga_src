// Menu burger =======================================================================
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let body = document.querySelector('body');
headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
})
//=======================================================================