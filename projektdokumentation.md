# Projektdokumentation

#### Navn: Dejene Daba

##### Hold: 1146521c105 / WU05

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

[Link til (min applikaton)](http://dejeneruta.github.io/newsbox-DEJENERUTA)

## Teknologier

- HTML
- CSS/SASS
- JavaScript
- Gulp
- Babel
  ...

---

### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke node-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket
"problem" hver pakke løser.)
"@babel/core": "^7.16.0",
"@babel/preset-env": "^7.16.0",
"gulp": "^4.0.2",
"gulp-babel": "^8.0.0", // vil compile mit javascript (ES6-syntaks) til gammel js-syntaks, som let til var
"gulp-sass": "^5.0.0", // vil compile min css stylesheets til scss syntax
"gulp-watch": "^5.0.1", //Vil monitorere mine kildefiler og lytte på ændringer.
"sass": "^1.43.4"

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)

(Jeg lavede animation til ikonet, som åbner og lukker sektionerne og animationen for at swipe
for at arkivere og swipe for at slette)

---

### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt,
på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

(at installere alle nodepakker var ret fint. men at installere gulp globalt blev udfordret mig, henter
api var også fint. localstorage blev også udfordret mig, men det lykkedes mig at finde ud af det.)

---

### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Du kan vise kode i markdown på følgende måder:

(indtil videre går alt godt)

```js
INBOX PAGE
//her hentede jeg data fra api og præsentere ved at bruge javascript axios
axios
		.get(
			`https://api.nytimes.com/svc/topstories/v2/${Element}.json?api-key=cLmzjWMAwmrqrU4DGnsDKAB1xXI28GvF`
		)

		.then((response) => {
			const data = response.data}); ...

ARCHIVE PAGE
// denne kode viser, hvor mange elementer der findes på arkivsiden
document
	.querySelector(".archived-number")
	.setAttribute("data-text", recycle.length);

//denne kode vil swipe et element og gemme det på arkivsiden
touchParentElement.querySelector(".deleteItem").onclick = () => {
	document
		.querySelector(".archived-number")
		.setAttribute("data-text", recycle.length);
	let userObject = {
		id: touchParentElement.id,
		section: touchParentElement.getAttribute("data-section"),
	};
	archive.push(userObject);
	if (archive.length > 0) {
		localStorage.setItem("cards", JSON.stringify(archive));
	} else {
		localStorage.removeItem("cards");
	}

	touchParentElement.classList.add("animate__fadeOutLeft");
	setTimeout(() => {
		touchParentElement.classList.add("collapsed");
	}, 800);
	setTimeout(() => {
		touchParentElement.remove();
	}, 900);
};
SETTING PAGE
// dark mode code
if (localStorage.getItem("darkModeSetting") === null) {
	localStorage.setItem("darkModeSetting", "off");
}
let darkModeSetting = localStorage.getItem("darkModeSetting") === "on";
if (darkModeSetting) {
	document.querySelector("body").classList.add("dark");
} ...
```

```css
// feature tutorial styling
#tutorial-overlay {
	position: fixed;
	inset: 0;
	background-color: #000000;
	opacity: 50%;
	z-index: 2;
}

.tutorial-message {
	position: absolute;
	background-color: #ffffff;
	color: #000;
	z-index: 3;
	padding: 10px;
	border-radius: 5px;
}
```
