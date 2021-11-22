axios
  .get(
    "https://api.nytimes.com/svc/topstories/v2/${Element}.json?api-key=cLmzjWMAwmrqrU4DGnsDKAB1xXI28GvF/"
  )
  .then((response) => {
    const users = response.data;

    users.forEach((user) => {
      const main = document.querySelector("main");
      const section = document.createElement("section");
      section.classList.add("animate__animated");
      section.setAttribute("id", user.id);

      const deleteItem = document.createElement("div");
      deleteItem.classList.add("deleteItem");
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fas");
      deleteIcon.classList.add("fa-trash");
      deleteItem.appendChild(deleteIcon);

      const swipeItem = document.createElement("article");
      swipeItem.classList.add("swipeItem");
      swipeItem.textContent = user.name;

      section.appendChild(deleteItem);
      section.appendChild(swipeItem);
      main.appendChild(section);
    });
  });
