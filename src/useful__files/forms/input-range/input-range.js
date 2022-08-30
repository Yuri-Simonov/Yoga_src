const inputRange = document.querySelector('input[type="range"]');
const rangePercent = document.querySelector(".range-percent span");

inputRange &&
	inputRange.addEventListener("input", (event) => {
		rangePercent.textContent = inputRange.value;
		inputRange.style.background = `linear-gradient(to right,green 0%,green ${inputRange.value}%,red ${inputRange.value}%,red 100%)`;
	});
