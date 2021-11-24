const fold = () => {
	document.querySelectorAll(".fold").forEach((element) => {
		console.log(element);
		element.addEventListener("click", (e) => {
			e.target.classList.toggle("active");
			let content = e.target.closest("article").nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});
	});
};
fold();

/* document.querySelector(".accordion__button").forEach((button) => {
	button.addEventListener("click", () => {
		const fold = button.nextElementSibling;
		fold.classList.toggle("");
	});
}); */
