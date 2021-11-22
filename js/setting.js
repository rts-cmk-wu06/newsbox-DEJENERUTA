if (localStorage.getItem("categorySettings") === null) {
  localStorage.setItem(
    "categorySettings",
    JSON.stringify({
      europe: true,
      health: true,
      business: true,
      sport: true,
      travel: true,
    })
  );
}
const categorySettings = JSON.parse(localStorage.getItem("categorySettings"));
console.log(categorySettings);
document.getElementById("toggle-button-europe").checked =
  categorySettings.europe;
document.getElementById("toggle-button-health").checked =
  categorySettings.health;
document.getElementById("toggle-button-business").checked =
  categorySettings.business;
document.getElementById("toggle-button-sport").checked = categorySettings.sport;
document.getElementById("toggle-button-travel").checked =
  categorySettings.travel;
document
  .getElementById("toggle-button-europe")
  .addEventListener("click", (event) => {
    categorySettings.europe = !categorySettings.europe;
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
    document.querySelector("body").classList.toggle("dark");
  });
