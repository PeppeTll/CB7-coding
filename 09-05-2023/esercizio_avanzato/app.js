// ESERCIZIO 2********************************************************
const addListItem = () => {
  const listItem = document.createElement('li');
  listItem.textContent = `list item ${num}`;
  num++;
  listEl.appendChild(listItem);
}

const btnAdd = document.querySelector('.button_add');
const listEl = document.querySelector('.list');
let num = 0


btnAdd.addEventListener('click', addListItem);

// ESERCIZIO 2********************************************************