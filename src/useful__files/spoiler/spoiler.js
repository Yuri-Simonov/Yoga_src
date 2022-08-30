let spoilers = document.querySelector('.spoilers');

spoilers && spoilers.addEventListener('click', (event) => {
	let targetItem = event.target;
	if (targetItem.closest('.spoilers__item')) {
		targetItem.closest('.spoilers__item').classList.toggle('spoilers__item-active');
	}
})