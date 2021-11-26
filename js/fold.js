/* const fold = () => {
	document.querySelectorAll(".fold").forEach((element) => {
		console.log(element);
		element.addEventListener("click", (e) => {
			e.target.classList.toggle("active");
			let content = e.target.closest("article").nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = content.scrollHeight + "px";
			} else {
				content.style.maxHeight = 0;
			}
		});
	});
};
fold(); */
