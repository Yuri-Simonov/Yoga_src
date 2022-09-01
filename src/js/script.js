// Импорт функции проверки поддержки браузера формата WEBP для картинок
import "./modules/support_Webp.js";
//=====================================================================

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const menuOverlay = document.querySelector(".menu__overlay");
// Открытие и закрытие бокового меню на ширине <1500px
const toggleBurger = () => {
	if (menu.classList.contains("menu_active")) {
		menu.classList.remove("menu_active");
	} else {
		menu.classList.add("menu_active");
	}
};
burger.addEventListener("click", (event) => {
	toggleBurger();
});
menuOverlay.addEventListener("click", (event) => {
	toggleBurger();
});
