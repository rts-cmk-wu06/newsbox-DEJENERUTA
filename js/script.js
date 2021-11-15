axios
  .get(
    "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=cLmzjWMAwmrqrU4DGnsDKAB1xXI28GvF"
  )

  .then((response) => {
    const data = response.data;
    console.log(data);
  });
const array = ["travel", "health", "sport"];
array.forEach((Element) => console.log(Element));
