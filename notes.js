const DOMSelectors = {
  button: document.getElementById("btn"), // getElementById looks for the id that is passed through it, in this case being "btn"
  text: document.querySelector("#text"), // queryselectors look for elements based on parameters, being '.' or '#'
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"), //node list
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "This is now a big red box";
  text.style.fontSize = "4rem";
};

DOMSelectors.button.addEventListener("click", function(){ //use addEventLister to an an event listener (eventListner, call a function)
  backgroundAndText(DOMSelectors.box, DOMSelectors.text)
});

function changeLi(){
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => { //use forEach to iterate through a nodelist rather than copy pasting code
    point.addEventListener("click", function(){
      point.textContent = `Hello I am point ${pointIndex}`; //textcontent changes what our html is showing (so does innerHTML)
      pointIndex++; //as you repeat the array, the pointIndex will keep increasing
    });
  });
}
changeLi();
//you can get elements from html into js even if they do not exist
//you can use getElementById when selecting an element by its id//you can use querySelector when selecting an element by its class
//css is the styling so stating .style acceses the style of an element
//when changing what the text says, you'd use innerHTML instead of style
//you can add and remove classes using java
//node list - an array like type/list
//iterating through an array/nodelist requires using forEach
//when changing something from your html using java, remember to use an equals sign
