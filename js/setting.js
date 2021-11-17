document
  .getElementById("toggle-button-1")
  .addEventListener("click", (event) => {
    console.log("Toggle button 1 was toggled", event.target.checked);
  });

document
  .getElementById("toggle-button-2")
  .addEventListener("click", (event) => {
    console.log("Toggle button 2 was toggled", event.target.checked);
  });

document
  .getElementById("toggle-button-3")
  .addEventListener("click", (event) => {
    console.log("Toggle button 3 was toggled", event.target.checked);
  });

document
  .getElementById("toggle-button-4")
  .addEventListener("click", (event) => {
    console.log("Toggle button 4 was toggled", event.target.checked);
  });

document
  .getElementById("toggle-button-5")
  .addEventListener("click", (event) => {
    console.log("Toggle button 5 was toggled", event.target.checked);
  });

document
  .getElementById("toggle-button-dark-mode")
  .addEventListener("click", (event) => {
    document.querySelector("body").classList.toggle("dark");
  });
