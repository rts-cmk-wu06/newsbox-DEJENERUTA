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

if (localStorage.getItem("darkModeSetting") === null) {
  localStorage.setItem("darkModeSetting", "off");
}

var darkModeSetting = localStorage.getItem("darkModeSetting") === "on";

if (darkModeSetting) {
  document.querySelector("body").classList.add("dark");
}

var array = [];

if (categorySettings.world) {
  array.push("WORLD");
}

if (categorySettings.health) {
  array.push("HEALTH");
}

if (categorySettings.business) {
  array.push("BUSINESS");
}

if (categorySettings.sport) {
  array.push("SPORTS");
}

if (categorySettings.travel) {
  array.push("TRAVEL");
}

array.forEach(function (Element) {
  var section = document.createElement("section");
  document.querySelector("#main").append(section);
  section.innerHTML += " \n  <article class=\"collaps\">\n    <div class=\"inbox-category\">\n      <img class=\"diamond\" src=\"assets/icn_surfing1.svg\">\n       <h3 class=\"article-heading\">".concat(Element, "</h3> \n    </div>\n    <i class=\"fas fa-angle-down angleIcon fold fa-2x\"></i>\n  </article>\n ");
  axios.get("https://api.nytimes.com/svc/topstories/v2/".concat(Element, ".json?api-key=cLmzjWMAwmrqrU4DGnsDKAB1xXI28GvF")).then(function (response) {
    var data = response.data;
    data.results.forEach(function (article) {
      if (article.section != "admin" && article.multimedia && article["abstract"]) {
        section.innerHTML += " <article class=\"article-about-surfing card animate__animated\" id=\"".concat(article.short_url, "\" data-section=\"").concat(section.querySelector(".article-heading").textContent, "\">\n <div class=\"swipeItem\">\n <img src=\"").concat(article.multimedia[0].url, "\" class=\"images\">\n <div class=\"card-container\">\n     <h3 class=\"title\">").concat(article.title, "</h3>\n     <p class=\"desc\">\n     ").concat(article["abstract"], "\n     </p>\n   </div>\n  </div>\n<div class=\"deleteItem\" style=\"height: 100px; background-color: #87bcbf\">\n <i class=\"fas fa-box\"></i>\n</div>\n</article>");
      }
    });
  });
});
var tutorialCompleted = localStorage.getItem("tutorialCompleted") === "true";

if (tutorialCompleted) {
  document.querySelectorAll("#tutorial-overlay, .tutorial-message").forEach(function (element) {
    element.style.display = "none";
  });
} else {
  document.querySelector(".tutorial-message.message-2").style.display = "none";
  document.querySelector(".tutorial-message.message-1 button").addEventListener("click", function () {
    document.querySelector(".tutorial-message.message-1").style.display = "none";
    document.querySelector(".tutorial-message.message-2").style.display = "block";
  });
  document.querySelector(".tutorial-message.message-2 button").addEventListener("click", function () {
    window.location.replace("./archive.html");
  });
}