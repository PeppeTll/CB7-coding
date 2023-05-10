const qS = (el) => document.querySelector(el);
const qSA = (el) => document.querySelectorAll(el);
const cE = (el) => document.createElement(el);
const cA = (el) => document.createAttribute(el);

const inputWrapper = qS('.input_wrapper')
const lightButton = qS('.light_button')
const darkButton = qS('.dark_button')
const visualMode = qS('.visualMode_wrapper')
const calcWrapper = qS('.calc_wrapper')
const btnLight = qS('.light_button')
const btnDark = qS('.dark_button')
const inputOne = qS('#first_num')
const inputTwo = qS('#second_num')
const optInput = qS('#opt_input')
const btnSub = qS('.submit')
const resultWrapper = qS('.result_wrapper')

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

const somma = (num1, num2) => num1 + num2;
const moltp = (num1, num2) => num1 * num2;
const sotrz = (num1, num2) => num1 - num2;
const div = (num1, num2) => num1 / num2;
const prod = (num1, num2) => num1 % num2;


btnSub.addEventListener('click', () => {
  switch (optInput.value) {
    case '+':
      resultWrapper.textContent = somma(parseInt(inputOne.value), parseInt(inputTwo.value))
      break;
    case '*':
      resultWrapper.textContent = moltp(inputOne.value, inputTwo.value)
      break;
    case '-':
      resultWrapper.textContent = sotrz(inputOne.value, inputTwo.value)
      break;
    case '/':
      resultWrapper.textContent = div(inputOne.value, inputTwo.value)
      break;
    case '%':
      resultWrapper.textContent = prod(inputOne.value, inputTwo.value)
      break;
  }
})
