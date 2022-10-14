const buttons = document.querySelectorAll(".btn");
const hidden = document.querySelectorAll(".hide");

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		event.preventDefault();
		let item = event.currentTarget.querySelector("#answer");
		console.log(item.classList.contains("hide"));
		if (item.classList.contains("hide") === true) {
			item.classList.remove("hide");
		} else {
			item.classList.add("hide");
		}
	});
});
