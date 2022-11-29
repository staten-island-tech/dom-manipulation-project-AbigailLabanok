const DOMSelectors = {
  button: document.querySelector(".btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};

DOMSelectors.button.addEventListener("click", card);

function card() {
  makeCard();
  clearFields();
  deleteCard();
}

function makeCard() {
  let title = DOMSelectors.title.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
          <img class="display-img" src="${url}"/>
          <h2 class="display-album">${title}</h2>
          <h2 class="display-artist"> by ${artist}</h2>
          <button class="remove btn">Remove Album</button>
      </div>`
  );
};

function clearFields() {
  DOMSelectors.title.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
}

function deleteCard() {
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((removeButton) => 
   removeButton.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  }))
}
