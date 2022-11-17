const DOMSelectors = {
  button: document.querySelector(".btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};
/*  
function makeCard(background, title, artist) {
  background.style.backgroundImage = `${DOMSelectors.url}`;
  title.textContent = `${DOMSelectors.title}`;
  artist.textContent = `${DOMSelectors.artist}`;
} 
 */
DOMSelectors.button.addEventListener("click", function () {
  DOMSelectors.display.insertAdjacentHTML("afterend", 
  `<p>${title}</p>
  <p>${artist}</p>`)
}); 
