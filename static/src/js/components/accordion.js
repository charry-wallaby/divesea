window.addEventListener('DOMContentLoaded', () => {
	const acc = document.querySelectorAll(".accordion__btn");

	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("is-active");
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.classList.remove("is-active");
				panel.style.maxHeight = null;
			} else {
				panel.classList.add("is-active");
				panel.style.maxHeight = "fit-content";
			}
		});
	}
});