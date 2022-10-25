const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = ingredients.map((option) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("ingredients-item");
  itemEl.textContent = option;
  return itemEl;
});

const listEl = document.querySelector("#ingredients");
listEl.append(...items);

console.log(listEl);
