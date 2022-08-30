// Slider =======================================================================
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