const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Adding a markup list without function
//-----------------------
// const ingredientsEl = document.querySelector('ul#ingredients');

// const ingredientsListEl = ingredients.map(ingredient => {
//   const listElement = document.createElement('li');
//   listElement.textContent = ingredient;
//   listElement.classList.add('item');

//   return listElement;
// });

// ingredientsEl.append(...ingredientsListEl);
//-----------------------

// Adding a markup list with function
//-----------------------
const ingredientsEl = document.querySelector('ul#ingredients');

const makeIngredientCard = ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;

  return ingredientEl;
};

const elements = ingredients.map(makeIngredientCard);

ingredientsEl.append(...elements);
//-----------------------