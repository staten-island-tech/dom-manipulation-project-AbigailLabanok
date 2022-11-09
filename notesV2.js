const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};
/* const cat = "Meow";
DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat}</h1>`); */
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value; //used toget the value of the input tg (textbox)
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = ""; //you can reset values using an empty string
});
