//Menu burger=======================================================================
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let body = document.querySelector('body');
headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
})
//=======================================================================


//Slider (Нужно дополнить)=======================================================================
new Swiper('.porfolio__images', { //берется класс рядом с которым прописывается класс "swiper-container"
	//точки
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	//стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
//=======================================================================


//WEBP image=======================================================================
function testWebP(callback) {
	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
//=======================================================================


//Анимация элементов при прокрутке страницы=======================================================================
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

transform: translateX(-100%);
opacity: 0;
transition: 1.2s ease-in-out 0s;
&.active {
	opacity: 1;
	transform: translateX(0%);
}

 */
//=======================================================================


//Кнопка "наверх"========================================================

window.onscroll = function () {
	if (window.pageYOffset > 200) {
		scrollButton.classList.add('shown');
	} else {
		scrollButton.classList.remove('shown');
	}
};

scrollButton.addEventListener('click', () => {
	window.scrollTo(0, 0);
})
//=======================================================================

//валидация Email==================================================================
let subscribe = document.querySelector('.footer__submit')
let email = document.querySelector('.footer__email');
let errorSpan = document.querySelector('.span');

let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


email.addEventListener('input', () => {
	if (!reg.test(email.value)) {
		errorSpan.classList.add('error');
		subscribe.disabled = true;
	} else {
		errorSpan.classList.remove('error');
	}
	if (email.value == 0) {
		errorSpan.classList.remove('error');
	}
})
//=======================================================================