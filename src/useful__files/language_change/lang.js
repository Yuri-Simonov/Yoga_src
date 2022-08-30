//МУльтиязычность сайта==============================================================================
let btnLang = document.querySelector(".btn-lang");
let allLang = ["ru", "en", "de"];

const title = {
	titleOfPage: {
		ru: "Arter Asset Management AG - Art of Wealth Solutions",
		en: "Arter Asset Management AG - Art of Wealth Solutions",
		de: "Arter Asset Management AG - Art of Wealth Solutions",
	},
};

const langArr = {
	"menu-1": {
		ru: "Услуги",
		en: "Services",
		de: "Dienstleistungen",
	},
	"1-1": {
		ru: "Качественное управление активами на финансовых рынках для состоятельных (HNW) и ультра-состоятельных (UHNW) клиентов, их семей и компаний.",
		en: "High-quality asset management for HNW and UHNW individuals, their families, and companies.",
		de: "Hochwertige Vermögensverwaltung für HNW- und UHNW-Personen, deren Familien und Unternehmen",
	},
	"2-1-1-slider": {
		ru: "какой-то текст на русском",
		en: "какой-то текст на англ",
		de: "какой-то текст на немецком",
	},
};

btnLang.addEventListener("click", changeUrlLanguage);
function changeUrlLanguage() {
	let buttonRu = document.querySelector(".btn-lang-ru");
	let buttonEn = document.querySelector(".btn-lang-en");
	let buttonDe = document.querySelector(".btn-lang-de");
	buttonRu.classList.toggle("btn-lang-ru-active");
	buttonEn.classList.toggle("btn-lang-en-active");
	buttonDe.classList.toggle("btn-lang-de-active");

	buttonRu.addEventListener("click", () => {
		location.href = window.location.pathname + "#" + "ru";
		btnLang.textContent = "RU";
		localStorage.setItem('language', 'ru');
		location.reload();
	});
	buttonEn.addEventListener("click", () => {
		location.href = window.location.pathname + "#" + "en";
		localStorage.setItem('language', 'en');
		btnLang.textContent = "EN";
		location.reload();
	});
	buttonDe.addEventListener("click", () => {
		location.href = window.location.pathname + "#" + "de";
		localStorage.setItem('language', 'de');
		btnLang.textContent = "DE";
		location.reload();
	});
}

// console.log(localStorage.language);

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.slice(1);
	if (!allLang.includes(hash)) {
		if (localStorage.language) {
			location.href = window.location.pathname + "#" + localStorage.getItem('language');
		} else {
			location.href = window.location.pathname + "#" + "en";
		}
		console.log('location.href', location.href);
		location.reload();
	}
	btnLang.textContent = hash.toUpperCase();
	document.querySelector("title").textContent = title["titleOfPage"][hash];

	for (const key in langArr) {
		let elem = document.querySelector(".lang-" + key);
		if (elem) {
			document.querySelector(".lang-" + key).textContent = langArr[key][hash];
		}
	}
}

changeLanguage();