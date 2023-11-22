const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((ingredient) => {
  const list = document.querySelector("#ingredients");
  const liItem = document.createElement("li");
  const text = document.createElement("p");
  text.textContent = ingredient;
  liItem.append(text);
  list.append(liItem);
});