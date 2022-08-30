// Валидация номера телефона
const inputPhone = document.querySelectorAll(".js-number-input");
inputPhone &&
	inputPhone.forEach((item) => {
		item.addEventListener("click", () => {
			if (item.value.length <= 2) {
				item.value = "+7(";
			}
		});

		let old = 0;
		item.addEventListener("input", (e) => {
			validNumber(e);
			if (item.value.length <= 2) {
				item.value = "+7(";
			}
			if (item.value.length > 17) {
				item.value = item.value.slice(0, 17);
			}
		});
		item.addEventListener("paste", (e) => {
			e.preventDefault();
		});

		function validNumber(e) {
			let currentValue = item.value;
			let newValue = e.target.value.slice(-1);
			if (newValue.match(/[^0-9]/g)) {
				item.value = currentValue.slice(0, -1);
			}

			let curLen = item.value.length;

			if (curLen < old) {
				old--;
				return;
			}

			if (curLen <= 2) {
				item.value = "+7(";
			}
			if (curLen === 6) {
				item.value = item.value + ")-";
			}
			if (curLen === 11) {
				item.value = item.value + "-";
			}
			if (curLen === 14) {
				item.value = item.value + "-";
			}
			if (curLen > 17) {
				item.value = item.value.slice(0, 17);
			}

			old++;
		}
	});