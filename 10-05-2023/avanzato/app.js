const qS = (el) => document.querySelector(el);
const qSA = (el) => document.querySelectorAll(el);
const cE = (el) => document.createElement(el);
const cA = (el) => document.createAttribute(el);

const listCalcButton = ['AC', '<-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '=']
const listOpt = ['-', '*', '%', '/', '+']
const inputWrapper = qS('.input_wrapper')
const lightButton = qS('.light_button')
const darkButton = qS('.dark_button')
const visualMode = qS('.visualMode_wrapper')
const calcWrapper = qS('.calc_wrapper')
const btnLight = qS('.light_button')
const btnDark = qS('.dark_button')
const list = qS('.list')

// let inputOne = 0;
// let inputTwo = 0;
// let opt = '';;

for (let i = 0; i < listCalcButton.length; i++) {
  const calcBtn = cE('div')
  calcBtn.dataset.value = listCalcButton[i]
  calcBtn.textContent = listCalcButton[i]
  calcBtn.classList.add('calc_button')
  inputWrapper.appendChild(calcBtn)
  // console.log(calcBtn)
}

visualMode.addEventListener('click', (e) => {
  if (e.target.dataset.value === "1") {
    calcWrapper.classList.remove('dark');
    calcWrapper.classList.add('light');
    btnLight.classList.remove('dark');
    btnLight.classList.add('light');
    btnDark.classList.remove('dark');
    btnDark.classList.add('light');
  } else {
    calcWrapper.classList.remove('light');
    calcWrapper.classList.add('dark');
    btnLight.classList.remove('light');
    btnLight.classList.add('dark');
    btnDark.classList.remove('light');
    btnDark.classList.add('dark');
  }
});


inputWrapper.addEventListener('click', (e) => {
  e.target.dataset.value != '=' ? list.textContent += e.target.dataset.value : ''
  switch (e.target.dataset.value) {
    case '=':
      list.textContent = eval(list.textContent)
      break;
    case 'AC':
      list.textContent = ''
      break;
    case '<-':
      list.textContent = list.textContent.slice(0, -3)
      break;
  };
  // if (e.target.dataset.value === "=") {
  //   list.textContent = eval(list.textContent)
  // } else if (e.target.dataset.value === 'AC') {
  //   list.textContent = ''
  // }
});