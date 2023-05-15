const createCardFnc = () => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      data.products.forEach(el => {
        cardWrapper.appendChild(createCard(el));
      });
    });
};

const createCard = (obj) => {
  const cardEl = cE('div');
  const figureEl = cE('figure');
  const imgEl = cE('img');
  const textWrapEl = cE('div');
  const cardTitleEL = cE('h2');
  const descriptionEl = cE('p');
  const starsWrap = cE('h2');
  const cardPriceWrap = cE('div');
  const price = cE('h2');
  const cardButton = cE('button');

  cardEl.className = 'card';
  figureEl.className = 'card__figure';
  imgEl.className = 'card__img';
  textWrapEl.className = 'card__text';
  cardPriceWrap.className = 'card__price';

  imgEl.src = obj.thumbnail;
  imgEl.alt = obj.title;

  cardTitleEL.textContent = obj.title;
  descriptionEl.textContent = obj.description;

  for (let i = 0; i <= Math.floor(obj.rating); i++) {
    starsWrap.innerHTML += '<i class="fa-regular fa-star"></i>'
  };

  cardButton.className = 'card__button';
  cardButton.innerHTML = '<i class="fa-solid fa-cart-plus card__cart">';

  price.textContent = `${obj.price} €`;

  figureEl.appendChild(imgEl);
  cardPriceWrap.append(price, cardButton)
  textWrapEl.append(cardTitleEL, descriptionEl, starsWrap, cardPriceWrap);
  cardEl.append(figureEl, textWrapEl);

  return cardEl;
}

const qS = el => document.querySelector(el);
const cE = el => document.createElement(el);

const cardWrapper = qS('.card_wrapper');
const filterForm = qS('.filter__form');
const selectCategory = qS('.filter__select');
const searchbar = qS('.navbar__input');
const burgher = qS('.burgher');
const navLinks = qS('.navbar__links__ul');

fetch('https://dummyjson.com/products/categories')
  .then(res => res.json())
  .then(data => {
    const opt = cE('option');
    opt.value = '';
    opt.textContent = 'seleziona una categoria'
    selectCategory.appendChild(opt)
    for (let i in data) {
      const opt = cE('option');
      opt.value = data[i]
      opt.textContent = data[i]
      selectCategory.appendChild(opt);
      filterForm.appendChild(selectCategory)
    }
  });

createCardFnc();

selectCategory.addEventListener('change', (e) => {
  if (e.target.value === '') {
    createCardFnc();
  } else {
    const category = e.target.value;
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        cardWrapper.textContent = '';
        data.products.forEach(el => {
          cardWrapper.appendChild(createCard(el));
        })
      });
  }
});

searchbar.addEventListener('change', (e) => {
  e.preventDefault();
  if (e.target.value === '') {
    createCardFnc();
    e.preventDefault();
  } else {
    const query = e.target.value;
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        cardWrapper.textContent = '';
        data.products.forEach(el => {
          cardWrapper.appendChild(createCard(el));
          e.preventDefault();
        })
      });
  }
})

burgher.addEventListener('click', (e) => {
  navLinks.classList.toggle('active');
});