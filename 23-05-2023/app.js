const qS = el => document.querySelector(el);
const cE = el => document.createElement(el);

const createEl = (type, cls = null, textContent = null, parent = null, ...attrs) => {
  const element = cE(type);
  element.className = cls
  element.textContent = textContent;
  attrs.length > 0 ? attrs.forEach(attr => element.setAttribute(attr?.name, attr?.value)) : '';
  element
  parent?.appendChild(element);
  return element;
};


/**
 * creare la modale del Login.
 * 
 * @date 23/5/2023 - 17:22:31
 *
 * @returns {*}
 */
const createLoginForm = () => {
  const overlayLoginForm = createEl('div', 'overlay-login-form', null, mainEl);
  const formEl = createEl('form', 'form', null, mainEl);
  const titleForm = createEl('p', 'heading', 'login', formEl);
  const wrapUserName = createEl('div', 'field', null, formEl);
  const userNameInput = createEl('input', 'input-field', null, wrapUserName, { name: 'placeholder', value: 'username' }, { name: 'type', value: 'text' }, { name: 'autocomplete', value: 'off' });
  const wrapPassword = createEl('div', 'field', null, formEl);
  const passwordInput = createEl('input', 'input-field', null, wrapPassword, { name: 'placeholder', value: 'password' }, { name: 'type', value: 'password' }, { name: 'autocomplete', value: 'off' });
  const wrapButton = createEl('div', 'btn', null, formEl);
  const btnLogin = createEl('button', 'button1', 'login', wrapButton);
  const btnSignUp = createEl('button', 'button2', 'sign up', wrapButton);
  const btnForgotPass = createEl('button', 'button3', 'forgot password', formEl);

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    mainEl.textContent = '';
    getCartFromRandomId().then((data) => {
      userId = data.userId;
      total = data.total;
      data.products.forEach(cart => createCartCard(cart, userId))
    });
  })

  return formEl;
}

const createCartCard = (obj, userId) => {
  const wrapCard = createEl('div', 'wrap-card-cart', null, mainEl);
  const wrapImg = createEl('div', 'card-img', null, wrapCard);
  const wrapInfo = createEl('div', 'card-info', null, wrapCard);
  const titleCard = createEl('p', 'text-title', obj.title, wrapInfo);
  const cardFooter = createEl('div', 'card-footer', null, wrapCard);
  const cardPrice = createEl('h2', 'text-title', `${obj.price} €`, cardFooter);

  console.log(obj);


  fetch(`https://dummyjson.com/user/${userId}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      const imgUser = createEl('img', 'img-user', null, wrapImg, { name: 'src', value: data.image })
    })

  return wrapCard;
};

const randomId = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mainEl = qS('.main');
let userId;
let total;


createLoginForm();

const getCartFromRandomId = async () => {
  const id = randomId(1, 20)
  const res = await fetch(`https://dummyjson.com/carts/${id}`);
  const data = await res.json();

  return data;
}

const getUserFromId = async (id) => {
  const res = await fetch(`https://dummyjson.com/user/${id}`);
  const data = await res.json();

  return data;
};