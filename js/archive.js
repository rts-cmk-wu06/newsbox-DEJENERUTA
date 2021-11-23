if (localStorage.getItem("archiveCategory") === null) {
  localStorage.setItem(
    "archiveCategory",
    JSON.stringify({
      sport: true,
      travel: true,
    })
  );
}
const archiveCategory = JSON.parse(localStorage.getItem("archiveCategory"));
