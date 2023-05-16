const createCardFnc = () => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      data.products.forEach(el => {
        listEl.push(el);
        cardWrapper.appendChild(createCard(el));
      })
    })
    .then((data) => {
      cardWrapper.addEventListener('click', (e) => {
        for (let el of listEl) {
          if (el.id === parseInt(e.target.closest(".card").id)) {
            showCardInfo(el)
          }
        }
      });
    });;
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
  cardTitleEL.className = 'card_title';
  descriptionEl.className = 'description';
  textWrapEl.className = 'card__text';
  cardPriceWrap.className = 'card__price';
  starsWrap.className = 'stars_el'

  imgEl.src = obj.thumbnail;
  imgEl.alt = obj.title;

  cardEl.setAttribute('id', obj.id);

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

const showCardInfo = (obj) => {
  const wrapShowEl = cE('div');
  const wrapImageEl = cE('div');
  const figureThumbEl = cE('figure');
  const thumbnailEl = cE('img');
  const wrapMiniSliderEl = cE('div');
  const wrapInfoEl = cE('div');
  const wrapTextEl = cE('div');
  const titleEl = cE('h1');
  const descriptionEl = cE('p');
  const starsEl = cE('h2');
  const stockEl = cE('p');
  const brandEL = cE('h2');
  const categoryEl = cE('h3');
  const wrapButtonEl = cE('div');
  const inputstockEl = cE('input');
  const buttonBuyEl = cE('button');
  const buttonReturn = cE('button');

  wrapShowEl.className = 'wrap_show';
  wrapImageEl.className = 'wrap_image';
  figureThumbEl.className = 'figure_thumb';
  thumbnailEl.className = 'thumbnail';
  wrapMiniSliderEl.className = 'wrap_miniSlide';
  wrapInfoEl.className = 'wrap_info';
  wrapTextEl.className = 'wrap_text';
  titleEl.className = '';
  descriptionEl.className = '';
  starsEl.className = 'stars';
  stockEl.className = '';
  brandEL.className = '';
  categoryEl.className = '';
  wrapButtonEl.className = 'wrap_button';
  inputstockEl.className = 'stock_input';
  buttonBuyEl.className = 'button_buy';
  buttonReturn.className = 'button_return';

  titleEl.textContent = obj.title;
  descriptionEl.textContent = obj.description;
  stockEl.textContent = `disponibilità n. ${obj.stock}`;
  brandEL.textContent = `brand: ${obj.brand}`;
  categoryEl.textContent = `categoria: ${obj.category}`;
  buttonBuyEl.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'
  buttonReturn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
  inputstockEl.type = 'number';

  thumbnailEl.src = obj.thumbnail;
  thumbnailEl.alt = obj.title;

  for (let i in obj.images) {
    const miniImage = cE('img');
    miniImage.className = 'mini_image';
    miniImage.src = obj.images[i];
    miniImage.alt = obj.images[i];
    wrapMiniSliderEl.appendChild(miniImage);
  }

  for (let i = 0; i <= Math.floor(obj.rating); i++) {
    starsEl.innerHTML += '<i class="fa-solid fa-star"></i>'
  };


  wrapButtonEl.append(inputstockEl, buttonBuyEl);
  wrapTextEl.append(titleEl, descriptionEl, starsEl, stockEl, brandEL, categoryEl);
  wrapInfoEl.append(wrapTextEl, wrapButtonEl);
  figureThumbEl.appendChild(thumbnailEl);
  wrapImageEl.append(figureThumbEl, wrapMiniSliderEl);
  wrapShowEl.append(wrapImageEl, wrapInfoEl, buttonReturn);
  cardWrapper.appendChild(wrapShowEl);

  wrapMiniSliderEl.addEventListener('click', (e) => {
    thumbnailEl.src = e.target.src;
  })

  if (cardWrapper) {
    buttonReturn.addEventListener('click', () => cardWrapper.removeChild(wrapShowEl));
  }
};

const qS = el => document.querySelector(el);
const cE = el => document.createElement(el);

const cardWrapper = qS('.card_wrapper');
const filterForm = qS('.filter__form');
const selectCategory = qS('.filter__select');
const searchbar = qS('.navbar__input');
const burgher = qS('.burgher');
const navLinks = qS('.navbar__links__ul');
const listEl = []

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
      })
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

