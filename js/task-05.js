const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
let colorEl = document.querySelector(".color");
btnEl.addEventListener("click", (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
  console.log(getRandomHexColor());
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
