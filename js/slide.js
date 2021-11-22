let recycle = JSON.parse(localStorage.getItem(".deleteItem"));
let swipeItem = document.querySelector(".swipeItem");
let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;
let deleteButtonWidth = (window.screen.width * 40) / 100;
let touchParentElement;
let touchElement;
let deleteStorage = window.localStorage;
let trash = recycle;

recycle.forEach((user) => {
  const main = document.querySelector("#main");
  const section = document.createElement("section");
  section.classList.add("animate__animated");
  section.setAttribute("id", user.id);

  const deleteItem = document.createElement("div");
  deleteItem.classList.add("deleteItem");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas");
  deleteIcon.classList.add("fa-");
  deleteItem.appendChild(deleteIcon);

  const swipeItem = document.createElement("article");
  swipeItem.classList.add("swipeItem");
  swipeItem.textContent = user.name;

  section.appendChild(deleteItem);
  section.appendChild(swipeItem);
  main.appendChild(section);
});

document.querySelector("main").addEventListener("touchstart", (e) => {
  if (e.target.tagName == "ARTICLE") {
    touchParentElement = e.target.parentElement;
    touchElement = e.target;
    touchCordinateStart = e.touches[0].clientX;

    touchElement.addEventListener("touchmove", (e) => {
      if (touchElement.tagName == "ARTICLE") {
        touchCordinateMove = Math.floor(e.touches[0].clientX);

        if (
          touchCordinateMove < touchCordinateStart &&
          touchCordinateMove > touchCordinateStart - deleteButtonWidth
        ) {
          touchElement.style.transform = `translateX(${
            touchCordinateMove - touchCordinateStart
          }px)`;
        }
      }
    });

    touchElement.addEventListener("touchend", (e) => {
      if (touchElement.tagName == "ARTICLE") {
        touchCordinateEnd = Math.floor(e.changedTouches[0].clientX);
        if (touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
          touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;
        } else {
          touchElement.style.transform = `translateX(${e.target.offsetLeft})`;
        }
      }
    });

    touchParentElement.querySelector(".deleteItem").onclick = () => {
      let userObject = {
        id: touchParentElement.id,
        name: touchParentElement.querySelector(".swipeItem").textContent,
      };
      trash = trash.filter((item) => userObject.id != item.id);

      if (trash.length > 0) {
        localStorage.setItem("deleteItem", JSON.stringify(trash));
      } else {
        localStorage.clear();
      }

      touchParentElement.classList.add("animate__fadeOutLeft");
      setTimeout(() => {
        touchParentElement.classList.add("collapsed");
      }, 800);
      setTimeout(() => {
        touchParentElement.remove();
      }, 900);
    };
  }
});

button.addEventListener("click", () => {
  localStorage.clear();
});
