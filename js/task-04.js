const value = document.querySelector("#value");
const decreseCountBtn = document.querySelector(`[data-action = "decrement"]`);
const increseCountBtn = document.querySelector(`[data-action = "increment"]`);

increseCountBtn.addEventListener("click", handleClickIncrese);
decreseCountBtn.addEventListener("click", handleClickDecrese);

let counterValue = 0;

function handleClickIncrese() {
  counterValue += 1;
  value.innerHTML = `${counterValue}`;
}
function handleClickDecrese() {
  counterValue -= 1;
  value.innerHTML = `${counterValue}`;
}
