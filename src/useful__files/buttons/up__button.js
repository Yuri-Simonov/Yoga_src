// Кнопка "наверх" ========================================================
let scrollButton = document.querySelector('.scroll-button');

window.onscroll = function () {
	if (scrollButton) {
		if (window.pageYOffset > 200) {
			scrollButton.classList.add('shown');
		} else {
			scrollButton.classList.remove('shown');
		}
	}
};

scrollButton && scrollButton.addEventListener('click', () => {
	window.scrollTo(0, 0);
})
//=======================================================================