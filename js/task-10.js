function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

let size = 30;
const addItem = () =>
  `<div style="background-color: ${getRandomHexColor()}; width: ${size}px;  height: ${size}px;"> </div>`;
const items = ["box"];
function createBoxes(amount) {
  amount = refs.input.value;
  for (let i = 0; i < amount; i++) {
    const boxes = items.map((box) => addItem(box)).join("");
    size += 10;
    refs.boxesEl.insertAdjacentHTML("beforeend", boxes);
    console.log(amount);
  }
}

const destroyBoxes = () => {
  refs.boxesEl.innerHTML = "";
  return (size = 30);
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);
