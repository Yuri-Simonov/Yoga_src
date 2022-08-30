// Первая буква предложения - заглавная
const noveltyItems = document.querySelectorAll(".novelties__item-about p");

function firstLetter(iterItem) {
	iterItem &&
		iterItem.forEach((item) => {
			let textArray = item.textContent.split(".");
			let timeArray = [];
			textArray.forEach((arrayItem) => {
				let someItem = arrayItem.trim().split(" ");
				let someItemText;
				if (someItem[0] === "") {
					someItemText =
						`<span class="span-big">${someItem[1]
							.slice(0, 1)
							.toUpperCase()}</span>` + someItem[1].slice(1);
					someItem[1] = someItemText;
				} else {
					someItemText =
						`<span class="span-big">${someItem[0]
							.slice(0, 1)
							.toUpperCase()}</span>` + someItem[0].slice(1);
					someItem[0] = someItemText;
				}
				arrayItem = someItem.join(" ");
				timeArray.push(arrayItem);
			});
			item.innerHTML = timeArray.join(". ").trim();
		});
}
firstLetter(noveltyItems);

// Учет регистра букв, задаваемых через админку
let regLetter = /[A-Za-zа-яёА-ЯЁ]+/;
function addLetterToUpperCase(parentItem) {
	if (typeof parentItem === "string") {
		let itemCharacterArray = parentItem.split("");
		itemCharacterArray.forEach((character, i) => {
			if (
				character === character.toUpperCase() &&
				regLetter.test(character)
			) {
				itemCharacterArray[
					i
				] = `<span class="span-big">${character}</span>`;
			}
		});
		parentItem = itemCharacterArray.join("");
		return parentItem;
	} else {
		parentItem &&
			parentItem.forEach((item) => {
				let itemCharacterArray = item.textContent.split("");
				itemCharacterArray.forEach((character, i) => {
					if (
						character === character.toUpperCase() &&
						regLetter.test(character)
					) {
						itemCharacterArray[
							i
						] = `<span class="span-big">${character}</span>`;
					}
				});
				item.innerHTML = itemCharacterArray.join("");
			});
	}
}
addLetterToUpperCase(noveltyItems)