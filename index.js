const buttons = document.querySelectorAll(".btn");
const arrows = document.querySelectorAll(".arrows");

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		event.preventDefault();
		const item = event.currentTarget.querySelector("#answer");
		const arrow = event.currentTarget.querySelector(".arrows");
		const header = event.currentTarget.querySelector("h2");
		if (item.classList.contains("hide") === true) {
			item.classList.remove("hide");
			arrow.style.transform = "scale(-1, -1)";
			header.style.fontWeight = "700";
		} else {
			item.classList.add("hide");
			arrow.style.transform = "scale(1, 1)";
			header.style.fontWeight = "400";
		}
	});
});
