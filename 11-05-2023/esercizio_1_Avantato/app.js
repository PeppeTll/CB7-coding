const createEL = (el, clas = '', text = '') => {
  let element = cE(el);
  element.classList.add(clas);
  element.innerHTML = text;
  body.appendChild(element);
}

const showElement = () => {
  listData.forEach(item => {
    const li_El = cE('li');
    li_El.className = 'li_el';
    li_El.dataset.value = item.id
    li_El.textContent = item.title;
    item.check ? li_El.classList.add('check') : '';
    ul_El.prepend(li_El);
  })
}

const itemCheck = () => {
  li_items = qSA('li');
  li_items.forEach(item => {
    item.addEventListener('click', e => {
      listData.forEach(obj => {
        if (obj.id === parseInt(e.target.dataset.value)) {
          obj.check = !obj.check
          item.classList.toggle('check')
        }
      })
    })
  })
}

const removeEvt = () => {
  // li_items = qSA('li');
  li_items.forEach(item => {
    item.removeEventListener('click', e => { })
  });
}

const qS = el => document.querySelector(el);
const cE = el => document.createElement(el);
const qSA = el => document.querySelectorAll(el);
const body = qS('body');

createEL('input', 'input_el');
createEL('ul', 'ul_el');
createEL('button', 'btn_del', '<i class="fa-regular fa-trash-can"></i>');

const input_El = qS('.input_el');
const ul_El = qS('.ul_el');
const btnDel = qS('.btn_del');
const listData = [
  {
    id: 1,
    title: 'lorem ipsum dolor sit amet',
    check: true,
  },
  {
    id: 2,
    title: 'lorem ipsum dolor sit amet',
    check: true,
  },
  {
    id: 3,
    title: 'lorem ipsum dolor sit amet',
    check: false,
  },
  {
    id: 4,
    title: 'lorem ipsum dolor sit amet',
    check: false,
  },
  {
    id: 5,
    title: 'lorem ipsum dolor sit amet',
    check: false,
  },
  {
    id: 6,
    title: 'lorem ipsum dolor sit amet',
    check: false,
  },
];

showElement();

let li_items = [];

itemCheck();

input_El.addEventListener('change', (e) => {
  const inputObj = {
    id: Math.floor(Math.random() * 100),
    title: e.target.value,
    check: false
  }
  ul_El.textContent = '';
  listData.push(inputObj);
  removeEvt()
  e.target.value = ''
  showElement();
  itemCheck();
});



btnDel.addEventListener('click', () => {
  listData.forEach((item, i) => {
    if (item.check) {
      listData.splice(i, 1);
    }
  })
  removeEvt()
  ul_El.textContent = ''
  showElement();
  itemCheck();
});





