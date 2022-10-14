const buttons = document.querySelectorAll(".btn");
const hidden = document.querySelectorAll(".hide");

function myDisplay(answer) {
	let show = document.getElementById(answer);
	if (show.display === "none") {
		console.log(answer);
		show.display = "block";
	} else {
		console.log(answer);
	}
}
