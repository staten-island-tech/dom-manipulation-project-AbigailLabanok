const DOMSelectors = {
    button: document.getElementById("btn"), //you can use getElementById when selecting an element by its id
    text: document.querySelector("#text"), //you can use querySelector when selecting an element by its class
    point: document.querySelector(".point"),
}
console.log(DOMSelectors.point);

//you can get elements from html into js even if they do not exist