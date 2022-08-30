// Валидация Email ==================================================================
let subscribe = document.querySelector('.footer__submit')
let email = document.querySelector('.footer__email');
let errorSpan = document.querySelector('.span');

let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email && email.addEventListener('input', () => {
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