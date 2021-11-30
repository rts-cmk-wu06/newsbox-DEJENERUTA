if (localStorage.getItem("categorySettings") === null) {
	localStorage.setItem(
		"categorySettings",
		JSON.stringify({
			world: true,
			health: true,
			business: true,
			sport: true,
			travel: true,
		})
	);
}
const categorySettings = JSON.parse(localStorage.getItem("categorySettings"));
console.log(categorySettings);
if (localStorage.getItem("darkModeSetting") === null) {
	localStorage.setItem("darkModeSetting", "off");
}
let darkModeSetting = localStorage.getItem("darkModeSetting") === "on";
if (darkModeSetting) {
	document.querySelector("body").classList.add("dark");
}
document.getElementById("toggle-button-world").checked = categorySettings.world;
document.getElementById("toggle-button-health").checked =
	categorySettings.health;
document.getElementById("toggle-button-business").checked =
	categorySettings.business;
document.getElementById("toggle-button-sport").checked = categorySettings.sport;
document.getElementById("toggle-button-travel").checked =
	categorySettings.travel;
document
	.getElementById("toggle-button-world")
	.addEventListener("click", (event) => {
		categorySettings.world = !categorySettings.world;
		localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
	});

document
	.getElementById("toggle-button-health")
	.addEventListener("click", (event) => {
		categorySettings.health = !categorySettings.health;
		localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
	});

document
	.getElementById("toggle-button-sport")
	.addEventListener("click", (event) => {
		categorySettings.sport = !categorySettings.sport;
		localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
	});

document
	.getElementById("toggle-button-business")
	.addEventListener("click", (event) => {
		categorySettings.business = !categorySettings.business;
		localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
	});

document
	.getElementById("toggle-button-travel")
	.addEventListener("click", (event) => {
		categorySettings.travel = !categorySettings.travel;
		localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
	});

document
	.getElementById("toggle-button-dark-mode")
	.addEventListener("click", (event) => {
		darkModeSetting = !darkModeSetting;
		if (darkModeSetting) {
			localStorage.setItem("darkModeSetting", "on");
			document.querySelector("body").classList.add("dark");
		} else {
			localStorage.setItem("darkModeSetting", "off");
			document.querySelector("body").classList.remove("dark");
		}
	});

let tutorialCompleted = localStorage.getItem("tutorialCompleted") === "true";
if (tutorialCompleted) {
	document
		.querySelectorAll("#tutorial-overlay, .tutorial-message")
		.forEach((element) => {
			element.style.display = "none";
		});
} else {
	document
		.querySelector(".tutorial-message.message-5 button")
		.addEventListener("click", () => {
			localStorage.setItem("tutorialCompleted", "true");
			window.location.replace("./index.html");
		});
}
