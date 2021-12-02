"use strict";

axios.get("https://api.nytimes.com/svc/topstories/v2/${Element}.json?api-key=cLmzjWMAwmrqrU4DGnsDKAB1xXI28GvF/").then(function (response) {
  var users = response.data;
  users.forEach(function (user) {
    var main = document.querySelector("main");
    var section = document.createElement("section");
    section.classList.add("animate__animated");
    section.setAttribute("id", user.id);
    var deleteItem = document.createElement("div");
    deleteItem.classList.add("deleteItem");
    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-trash");
    deleteItem.appendChild(deleteIcon);
    var swipeItem = document.createElement("article");
    swipeItem.classList.add("swipeItem");
    swipeItem.textContent = user.name;
    section.appendChild(deleteItem);
    section.appendChild(swipeItem);
    main.appendChild(section);
  });
});