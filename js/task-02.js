const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');

const ingredientsListEl = ingredients
  .map(ingredient => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  listElement.classList.add('item');

  return listElement;
});

ingredientsEl.append(...ingredientsListEl);