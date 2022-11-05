function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  text: document.querySelector(".color"),
};
const setNewBg = (e) => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.text.innerHTML = randomColor;
};
refs.button.addEventListener("click", setNewBg);
