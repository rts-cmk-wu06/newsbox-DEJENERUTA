if (localStorage.getItem("categorySettings") === null) {
  localStorage.setItem(
    "categorySettings",
    JSON.stringify({
      europe: true,
      health: true,
      business: true,
      sport: true,
      travel: true,
    })
  );
}
const categorySettings = JSON.parse(localStorage.getItem("categorySettings"));
console.log(categorySettings);
const array = ["HEALTH", "SPORTS", "TRAVEL"];
array.forEach((Element) => {
  let section = document.createElement("section");
  document.querySelector("#main").append(section);
  section.innerHTML += `
  <article class="collaps">
    <div class="health-category">
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
        if (article.section != "admin") {
          section.innerHTML += ` <article class="article-about-surfing card">
 <div class="swipeItem">
     <h3 class="title">${article.title}</h3>
   <p class="desc">
    ${article.abstract}
    </p>
</div>
<div class="deleteItem" style="height: 100px; background-color: #87bcbf">
 <i class="fas fa-box"></i>
</div> 
</article>`;
        }
      });
    });
});
