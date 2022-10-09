const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const names = ingredients.map((ingredient) => {

const itemEl = document.createElement('li');
itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
})

const navListEl = document.querySelector('#ingredients');
navListEl.append(...names);

console.log(names)

