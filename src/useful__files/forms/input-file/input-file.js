let input = document.querySelector("input[name='file']");
let span = document.querySelector(".form__file span");

input.addEventListener("change", function (event) {
	let countFiles = 0;
	if (this.files && this.files.length >= 1) countFiles = this.files.length;

	if (countFiles) span.innerText = "Выбрано файлов: " + countFiles;
	else span.innerText = labelVal;
});

// Для одного файла, чтобы учитывалось название файла

// let input = document.querySelector("input[name='file']");
// let span = document.querySelector(".form__file span");

// input.addEventListener("change", function (event) {
// 	let countFiles = 0;
// 	console.log("this.files", this.files);
// 	if (this.files && this.files.length >= 1) countFiles = this.files.length;

// 	if (countFiles) {
// 		if (this.files[0].name.length > 20) {
// 			console.log(1);
// 			let finalText = this.files[0].name.slice(0, 17);
// 			span.innerText = finalText + "...";
// 		} else {
// 			span.innerText = this.files[0].name;
// 		}
// 	}
// });
