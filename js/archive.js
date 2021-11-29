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
recycle = localStorage.getItem("cards")
	? JSON.parse(localStorage.getItem("cards"))
	: [];
/* const array = ["world", "health", "business", "sports", "travel"]; */
function shortenArr(arr) {
	const filtered = [];

	arr.forEach((item) => {
		if (!filtered.includes(item)) filtered.push(item);
	});

	return filtered;
}
const sections = [];

recycle.forEach((card) => sections.push(card.section));

let array = shortenArr(sections);

const idArray = [];

recycle.forEach((card) => idArray.push(card.id));
array.forEach((Element) => {
	let section = document.createElement("section");
	document.querySelector("#main").append(section);
	section.innerHTML += `
  <article class="archive-collaps">
    <div class="archive-category">
    <img class="diamond" src="assets/icn_surfing1.svg">
       <h3 class="article-heading">${Element}</h3> 
    </div>
    <i class="fas fa-angle-down angle-icon fold fa-2x"></i>
  </article> 
 
 `;
	axios
		.get(
			`https://api.nytimes.com/svc/topstories/v2/${Element}.json?api-key=cLmzjWMAwmrqrU4DGnsDKAB1xXI28GvF`
		)

		.then((response) => {
			const data = response.data;
			console.log(data.results);
			data.results.forEach((article) => {
				if (article.section != "admin" && idArray.includes(article.short_url)) {
					section.innerHTML += ` <article class="article-about-surfing card" id="${article.short_url}" data-section="${article.section}">
          <div class="swipeItem">
          <img src="${article.multimedia[0].url}" class="images">
          <div class="card-container">
              <h3 class="title">${article.title}</h3>
              <p class="desc">
              ${article.abstract}
              </p>
            </div>
           </div>
         <div class="deleteItem" style="height: 100px; background-color: #d97d54">
          <i class="fas fa-trash"></i>
         </div> 
         </article>`;
				}
			});
		});
});

const categorySettings = JSON.parse(localStorage.getItem("categorySettings"));
if (localStorage.getItem("darkModeSetting") === null) {
	localStorage.setItem("darkModeSetting", "off");
}
let darkModeSetting = localStorage.getItem("darkModeSetting") === "on";
if (darkModeSetting) {
	document.querySelector("body").classList.add("dark");
}
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
