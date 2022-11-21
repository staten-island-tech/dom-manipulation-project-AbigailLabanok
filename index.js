const DOMSelectors = {
  button: document.querySelector(".btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
  removeButton: document.querySelector(".remove btn"),
  displayCard: document.querySelector(".display-card"),
};

function makeCard() {
  let title = DOMSelectors.title.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;
  const removeButton = document.querySelector(".remove btn");
  const displayCard = document.querySelector(".display-card");
  DOMSelectors.display.insertAdjacentHTML(
    "afterend",
    `<div class="display-card">
          <img class="display-img" src="${url}"/>
          <h2 class="display-album">${title}</h2>
          <h2 class="display-artist"> by ${artist}</h2>
          <button class="remove btn">Remove Album</button>
      </div>`
  );
  DOMSelectors.title.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
  function removeCard() {
    displayCard.remove();
  }
  removeButton.addEventListener("click", removeCard);
}

/* function removeCard() {
  DOMSelectors.display.removeChild(displayCard);
} */

DOMSelectors.button.addEventListener("click", makeCard);

/* DOMSelectors.removeButton.addEventListener("click", removeCard); */
