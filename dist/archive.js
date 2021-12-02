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

recycle = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : [];

function shortenArr(arr) {
  var filtered = [];
  arr.forEach(function (item) {
    if (!filtered.includes(item)) filtered.push(item);
  });
  return filtered;
}

var sections = [];
recycle.forEach(function (card) {
  return sections.push(card.section);
});
var array = shortenArr(sections);
var idArray = [];
recycle.forEach(function (card) {
  return idArray.push(card.id);
});
array.forEach(function (Element) {
  var section = document.createElement("section");
  document.querySelector("#main").append(section);
  section.innerHTML += "\n  <article class=\"archive-collaps\">\n    <div class=\"archive-category\">\n    <img class=\"diamond\" src=\"assets/icn_surfing1.svg\">\n       <h3 class=\"article-heading\">".concat(Element, "</h3> \n    </div>\n    <i class=\"fas fa-angle-down angle-icon fold fa-2x\"></i>\n  </article> \n \n ");
  axios.get("https://api.nytimes.com/svc/topstories/v2/".concat(Element, ".json?api-key=cLmzjWMAwmrqrU4DGnsDKAB1xXI28GvF")).then(function (response) {
    var data = response.data;
    console.log(data.results);
    data.results.forEach(function (article) {
      if (article.section != "admin" && idArray.includes(article.short_url)) {
        section.innerHTML += " <article class=\"article-about-surfing card animate__animated\" id=\"".concat(article.short_url, "\" data-section=\"").concat(article.section, "\">\n          <div class=\"swipeItem\">\n          <img src=\"").concat(article.multimedia[0].url, "\" class=\"images\">\n          <div class=\"card-container\">\n              <h3 class=\"title\">").concat(article.title, "</h3>\n              <p class=\"desc\">\n              ").concat(article["abstract"], "\n              </p>\n            </div>\n           </div>\n         <div class=\"deleteItem\" style=\"height: 100px; background-color: #d97d54\">\n          <i class=\"fas fa-trash\"></i>\n         </div> \n         </article>");
      }
    });
  });
});
var categorySettings = JSON.parse(localStorage.getItem("categorySettings"));

if (localStorage.getItem("darkModeSetting") === null) {
  localStorage.setItem("darkModeSetting", "off");
}

var darkModeSetting = localStorage.getItem("darkModeSetting") === "on";

if (darkModeSetting) {
  document.querySelector("body").classList.add("dark");
}

if (localStorage.getItem("archiveCategory") === null) {
  localStorage.setItem("archiveCategory", JSON.stringify({
    sport: true,
    travel: true
  }));
}

var archiveCategory = JSON.parse(localStorage.getItem("archiveCategory"));
var tutorialCompleted = localStorage.getItem("tutorialCompleted") === "true";

if (tutorialCompleted) {
  document.querySelectorAll("#tutorial-overlay, .tutorial-message").forEach(function (element) {
    element.style.display = "none";
  });
} else {
  document.querySelector(".tutorial-message.message-4").style.display = "none";
  document.querySelector(".tutorial-message.message-3 button").addEventListener("click", function () {
    document.querySelector(".tutorial-message.message-3").style.display = "none";
    document.querySelector(".tutorial-message.message-4").style.display = "block";
  });
  document.querySelector(".tutorial-message.message-4 button").addEventListener("click", function () {
    window.location.replace("./settings.html");
  });
}