"use strict";

if (localStorage.getItem("categorySettings") === null) {
  localStorage.setItem("categorySettings", JSON.stringify({
    world: true,
    health: true,
    business: true,
    sport: true,
    travel: true
  }));
}

var categorySettings = JSON.parse(localStorage.getItem("categorySettings"));
console.log(categorySettings);

if (localStorage.getItem("darkModeSetting") === null) {
  localStorage.setItem("darkModeSetting", "off");
}

var darkModeSetting = localStorage.getItem("darkModeSetting") === "on";

if (darkModeSetting) {
  document.querySelector("body").classList.add("dark");
}

document.getElementById("toggle-button-world").checked = categorySettings.world;
document.getElementById("toggle-button-health").checked = categorySettings.health;
document.getElementById("toggle-button-business").checked = categorySettings.business;
document.getElementById("toggle-button-sport").checked = categorySettings.sport;
document.getElementById("toggle-button-travel").checked = categorySettings.travel;
document.getElementById("toggle-button-world").addEventListener("click", function (event) {
  categorySettings.world = !categorySettings.world;
  localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
});
document.getElementById("toggle-button-health").addEventListener("click", function (event) {
  categorySettings.health = !categorySettings.health;
  localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
});
document.getElementById("toggle-button-sport").addEventListener("click", function (event) {
  categorySettings.sport = !categorySettings.sport;
  localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
});
document.getElementById("toggle-button-business").addEventListener("click", function (event) {
  categorySettings.business = !categorySettings.business;
  localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
});
document.getElementById("toggle-button-travel").addEventListener("click", function (event) {
  categorySettings.travel = !categorySettings.travel;
  localStorage.setItem("categorySettings", JSON.stringify(categorySettings));
});
document.getElementById("toggle-button-dark-mode").addEventListener("click", function (event) {
  darkModeSetting = !darkModeSetting;

  if (darkModeSetting) {
    localStorage.setItem("darkModeSetting", "on");
    document.querySelector("body").classList.add("dark");
  } else {
    localStorage.setItem("darkModeSetting", "off");
    document.querySelector("body").classList.remove("dark");
  }
});
var tutorialCompleted = localStorage.getItem("tutorialCompleted") === "true";

if (tutorialCompleted) {
  document.querySelectorAll("#tutorial-overlay, .tutorial-message").forEach(function (element) {
    element.style.display = "none";
  });
} else {
  document.querySelector(".tutorial-message.message-5 button").addEventListener("click", function () {
    localStorage.setItem("tutorialCompleted", "true");
    window.location.replace("./index.html");
  });
}