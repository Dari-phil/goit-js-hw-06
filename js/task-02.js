const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  const text = document.createElement("p");
  text.textContent = ingredient;
  liItem.classList.add("item");
  liItem.append(text);
  return liItem;
});
list.append(...ingredientsList);
