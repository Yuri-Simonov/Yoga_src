// Анимация элементов при прокрутке страницы =======================================================================
let animItems = document.querySelectorAll('.anim-items'); //нужно добавить этот класс html-элементу.

if (animItems.length > 0) {
	console.log(animItems.length);
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItems.classList.contain('repeat-anim-items')) //если у элемента есть еще и класс 'repeat-anim-items' вдобавок к 'anim-items', то при пролистывании сайта наверх, будет повторная анимация
					animItem.classList.remove('active');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect();
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}

/* Пример кода анимации для SCSS:

//animation----------------------------------------
transform: translateX(-100%);
opacity: 0;
transition: 1.2s ease-in-out 0s;
&.active {
	opacity: 1;
	transform: translateX(0%);
}
//-------------------------------------------------

 */
//=======================================================================