const DOMSelectors = {
  button: document.getElementById("btn"), // getElementById looks for the id that is passed through it, in this case being "btn"
  text: document.querySelector("#text"), // queryselectors look for elements based on parameters, being '.' or '#'
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};
console.log(DOMSelectors.pointTwo);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "This is now a big red box";
  text.style.fontSize = "4rem";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);

//you can get elements from html into js even if they do not exist
//you can use getElementById when selecting an element by its id//you can use querySelector when selecting an element by its class
//css is the styling so stating .style acceses the style of an element
//when changing what the text says, you'd use innerHTML instead of style
//you can add and remove classes using java
//node list - an array like type/list
