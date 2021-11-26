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

const array = ["world", "health", "business", "sports", "travel"];
array.forEach((Element) => {
	let section = document.createElement("section");
	document.querySelector("#main").append(section);
	section.innerHTML += `
  <article class="archive-collaps">
    <div class="archive-category">
       <i class="fas fa-box"></i> 
       <h3 class="article-heading">${Element}</h3> 
    </div>
    <div class="fold"><i class="fas fa-angle-down angle-icon  fa-2x"></i></div>
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
				if (article.section != "admin" && article.multimedia) {
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
