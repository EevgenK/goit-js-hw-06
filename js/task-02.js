const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

const makeNamePicker = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("ingredients-item");
    itemEl.textContent = ingredient;
    return itemEl;
  });
};

const items = makeNamePicker(ingredients);
listEl.append(...items);

console.log(listEl);
