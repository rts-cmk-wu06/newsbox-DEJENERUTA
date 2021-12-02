"use strict";

var recycle = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : [];
var swipeItem = document.querySelector(".swipeItem");
var touchCordinateStart;
var touchCordinateMove;
var touchCordinateEnd;
var touchParentElement;
var touchElement;
var archive = recycle;
document.querySelector("main").addEventListener("touchstart", function (e) {
  if (e.target.parentElement.classList.contains("card-container")) {
    touchParentElement = e.target.closest(".card");
    var deleteButtonWidth = touchParentElement.querySelector(".deleteItem").offsetWidth;
    touchElement = e.target.closest(".swipeItem");
    touchCordinateStart = e.touches[0].clientX;
    touchElement.addEventListener("touchmove", function (e) {
      touchCordinateMove = Math.floor(e.touches[0].clientX);

      if (touchCordinateMove < touchCordinateStart && touchCordinateMove > touchCordinateStart - deleteButtonWidth) {
        touchElement.style.transform = "translateX(".concat(touchCordinateMove - touchCordinateStart, "px)");
      }
    });
    touchElement.addEventListener("touchend", function (e) {
      touchCordinateEnd = Math.floor(e.changedTouches[0].clientX);

      if (touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
        touchElement.style.transform = "translateX(-".concat(deleteButtonWidth, "px)");
      } else {
        touchElement.style.transform = "translateX(0px)";
      }
    });

    touchParentElement.querySelector(".deleteItem").onclick = function () {
      var userObject = {
        id: touchParentElement.id,
        section: touchParentElement.getAttribute("data-section")
      };
      archive = archive.filter(function (item) {
        return userObject.id != item.id;
      });

      if (archive.length > 0) {
        localStorage.setItem("cards", JSON.stringify(archive));
      } else {
        localStorage.removeItem("cards");
      }

      touchParentElement.classList.add("animate__fadeOutLeft");
      setTimeout(function () {
        touchParentElement.classList.add("collapsed");
      }, 800);
      setTimeout(function () {
        touchParentElement.remove();
      }, 900);
    };
  } else if (e.target.classList.contains("fold")) {
    var content = e.target.closest("section").querySelectorAll(".card");
    content.forEach(function (card) {
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