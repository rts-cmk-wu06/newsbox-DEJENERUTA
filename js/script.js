const array = ["health", "sports", "travel"];
array.forEach((Element) => {
  let section = document.createElement("section");
  document.querySelector("#main").append(section);
  section.innerHTML += `
  <article>
    <div class="health-category">
      <i class="fas fa-box"></i>
       <h3 class="article-heading">${Element}</h3> 
    </div>
    <div><i class="fas fa-angle-down angle-icon"></i></div>
  </article> 
 
 `;
  axios
    .get(
      `https://api.nytimes.com/svc/topstories/v2/${Element}.json?api-key=cLmzjWMAwmrqrU4DGnsDKAB1xXI28GvF`
    )

    .then((response) => {
      const data = response.data;
      console.log(data.results[0].abstract);
      data.results.forEach((article) => {
        section.innerHTML += ` <article class="article-about-surfing">
<h3 class="title">Headline</h3>
<p class="desc">
  Surfing is a surface water sport in which the wave rider, referred
  to as...
</p>
 
</article>`;
      });
    });
});
