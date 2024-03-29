"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function checker(string) {
		if (string === "") {
			display("???", "String must not be empty");
		} else if (!(/[a-zA-Z0-9]/.test(string))) {
			display("???", "String must contain at least one alphanumeric character");
		} else {
			let newString = string.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();

			if (newString === newString.split("").reverse().join("")) {
				display(newString, "true");
			} else {
				display(newString, "false");
			}
		}
	}

	function display(string, check) {
		document.getElementById("string-value").textContent = string;
		document.getElementById("result-value").textContent = check;
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		checker(this.children[0].value);
	});
};