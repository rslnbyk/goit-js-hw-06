const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const liItems = [];

ingredients.forEach((el) => {
  const liItem = document.createElement("li");
  liItem.textContent = el;
  liItem.setAttribute("class", "item");
  liItems.push(liItem);
});

list.append(...liItems);
