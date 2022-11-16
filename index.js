const DOMSelectors = {
  button: document.querySelector(".btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};

function makeCard(backgroundimage, text) {
  backgroundimage.style.backgroundImage = `${DOMSelectors.url}`;
  text.innerHTML = `${DOMSelectors.title}`;
  text.innerHTML = `${DOMSelectors.artist}`;
}

DOMSelectors.button.addEventListener("click", function () {
  makeCard(DOMSelectors.display);
});
