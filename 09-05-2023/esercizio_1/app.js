// ESERCIZIO 1********************************************************
const sayHi = () => {
  h1Hello.textContent = 'Hello World';
}

const deleteHi = () => {
  h1Hello.textContent = '';
};


const btnHello = document.querySelector('.button_hello');
const btnDelete = document.querySelector('.button_delete');
const h1Hello = document.querySelector('.h1_content');

btnHello.addEventListener('click', sayHi);
btnDelete.addEventListener('click', deleteHi);
// ESERCIZIO 1********************************************************