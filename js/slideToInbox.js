let recycle = localStorage.getItem("cards")
	? JSON.parse(localStorage.getItem("cards"))
	: [];

let swipeItem = document.querySelector(".swipeItem");
let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;
let touchParentElement;
let touchElement;
let archive = recycle;

document.querySelector("main").addEventListener("touchstart", (e) => {
	if (e.target.parentElement.classList.contains("card-container")) {
		touchParentElement = e.target.closest(".card");
		let deleteButtonWidth =
			touchParentElement.querySelector(".deleteItem").offsetWidth;
		touchElement = e.target.closest(".swipeItem");
		touchCordinateStart = e.touches[0].clientX;

		touchElement.addEventListener("touchmove", (e) => {
			touchCordinateMove = Math.floor(e.touches[0].clientX);

			if (
				touchCordinateMove < touchCordinateStart &&
				touchCordinateMove > touchCordinateStart - deleteButtonWidth
			) {
				touchElement.style.transform = `translateX(${
					touchCordinateMove - touchCordinateStart
				}px)`;
			}
		});

		touchElement.addEventListener("touchend", (e) => {
			touchCordinateEnd = Math.floor(e.changedTouches[0].clientX);
			if (touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
				touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;
			} else {
				touchElement.style.transform = `translateX(0px)`;
			}
		});

		touchParentElement.querySelector(".deleteItem").onclick = () => {
			let userObject = {
				id: touchParentElement.id,
				section: touchParentElement.getAttribute("data-section"),
			};
			archive.push(userObject);
			if (archive.length > 0) {
				localStorage.setItem("cards", JSON.stringify(archive));
			} else {
				localStorage.removeItem("cards");
			}

			touchParentElement.classList.add("animate__fadeOutLeft");
			setTimeout(() => {
				touchParentElement.classList.add("collapsed");
			}, 800);
			setTimeout(() => {
				touchParentElement.remove();
			}, 900);
		};
	} else if (e.target.classList.contains("fold")) {
		let content = e.target.closest("section").querySelectorAll(".card");
		content.forEach((card) => {
			if (card.style.height) {
				card.style.removeProperty("height");
				card.style.removeProperty("border");
				card.style.removeProperty("opacity");
				e.target.style.transform = "rotate(0deg)";
			} else {
				card.style.height = 0;
				card.style.border = 0;
				card.style.opacity = 0;
				e.target.style.transform = "rotate(-90deg)";
			}
		});
	}
});
