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
if (localStorage.getItem("darkModeSetting") === null) {
  localStorage.setItem("darkModeSetting", "off");
}
let darkModeSetting = localStorage.getItem("darkModeSetting") === "on";
if (darkModeSetting) {
  document.querySelector("body").classList.add("dark");
};

let container = document.querySelector("#container");
let actionButton = document.querySelector(".item button");
let actionButtonWidth = actionButton.offsetWidth;
let activeItem = null;
let active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

[...document.querySelectorAll(".item button")].forEach(function (item) {
  item.addEventListener("click", function () {
    deleteItem(item.dataset.mid);
  });
});

function dragStart(e) {
  if (e.target !==e.currentTarget) {
    active = true;
    activeItem = e.target.closest(".item");

    if (!activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }
      if (e.type === "touchstart") {
        activeItem.initialX = e.touches[0] - activeItem.xOffset;
      } else {
        activeItem.initialX = e.clintX - activeItem.xOffset;
      }
    }
  }
}

function dragEnd(e) {
  if (activeItem !== null) {
    activeItem.xOffset = 0;
  }
  if (activeItem.percentOpen > 75) {
    setBack(-120, 0, activeItem);
  } else {
    setBack(0, 0, activeItem);
  }
  active = false;
  activeItem = null;
}

function drag(e) {
  if (active) {
    e.preventDefault();
    if (e.type === "touchmove") {
      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
    }
    activeItem.xOffset = activeItem.currentX;
    activeItem.percentOpen = Math.round(
      (Math.abs(activeItem.xOffset) / actionButtonWidth) * 100
    );
    setTranslate(activeItem.currentX, 0, activeItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  el.style.webkitTransition = "";
}
function setBack(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  el.style.webkitTransition = "transform .5s ease";
}
function deleteItem(item) {
  let del = document.querySelector('.item[data-mid="' + item + '"');
   del.style.display = "none";
}




/* if (localStorage.getItem("archiveCategory") === null) {
  localStorage.setItem(
    "archiveCategory",
    JSON.stringify({
      sport: true,
      travel: true,
    })
  );
}
const archiveCategory = JSON.parse(localStorage.getItem("archiveCategory")); */
