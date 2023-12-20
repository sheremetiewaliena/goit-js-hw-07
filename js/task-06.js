function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const formInputEl = document.querySelector("input");
const controlsEl = document.querySelector("#controls");
let boxesEl = document.querySelector("#boxes");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");

function destroyElement() {
  boxesEl.textContent = "";
}

createEl.addEventListener("click", (event) => {
  if (formInputEl.value > 0 && formInputEl.value <= 100) {
    destroyElement();
    let initialSize = 30;
    const numberOfBoxes = formInputEl.value;
    for (let i = 1; i <= numberOfBoxes; i++) {
      const squareHTML = `<div style="width: ${initialSize}px; height: ${initialSize}px; background-color: ${getRandomHexColor()}; margin: 5px;"></div>`;
      boxesEl.insertAdjacentHTML("beforeend", squareHTML);
      initialSize += 10;
    }
    formInputEl.value = "";
  }
});
destroyEl.addEventListener("click", destroyElement);
