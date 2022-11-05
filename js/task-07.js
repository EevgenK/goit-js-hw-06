const refs = {
  contol: document.querySelector("#font-size-control"),
  text: document.querySelector("span"),
};

refs.contol.addEventListener("input", (e) => {
  refs.text.style.fontSize = `${e.currentTarget.value}px`;
});
