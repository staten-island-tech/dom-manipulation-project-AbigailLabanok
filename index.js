const DOMSelectors = {
  button: document.querySelector(".btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};

function makeCard() {
  let title = DOMSelectors.title.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;
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

  const removeButton = document.querySelector(".remove");
  removeButton.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const button = event.target;
      const card = button.parentNode;
      const display = card.parentNode;
      if (button.textContent === "Remove Album") {
        display.removeChild(card);
      }
    }
  });
}

DOMSelectors.button.addEventListener("click", makeCard);
