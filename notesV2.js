const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};
const cat = "Meow";
DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat}</h1>`);
