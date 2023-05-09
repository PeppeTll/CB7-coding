// ESERCIZIO 2********************************************************
const showMessage = () => {
  h1_content.textContent = inputEl.value
  inputEl.value = ''
}


const h1_content = document.querySelector('.h1_content');
const btnSubmit = document.querySelector('.button_submit');
const inputEl = document.querySelector('.inputEl');

btnSubmit.addEventListener('click', showMessage);

// ESERCIZIO 2********************************************************