document.querySelectorAll(".fold").forEach((element) => {
  /*  console.log(element); */
  element.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    let content = e.target.closest("article").nextElementSibling;
    /*  console.log(content); */
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
