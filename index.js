const buttons = document.querySelectorAll(".btn");
const arrows = document.querySelectorAll(".arrows");

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		event.preventDefault();
		const item = event.currentTarget.querySelector("#answer");
		const arrow = event.currentTarget.querySelector(".arrows");
		if (item.classList.contains("hide") === true) {
			item.classList.remove("hide");
			arrow.style.transform = "scale(-1, -1)";
		} else {
			item.classList.add("hide");
			arrow.style.transform = "scale(1, 1)";
		}
	});
});
