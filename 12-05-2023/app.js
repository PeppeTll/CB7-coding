/**
 * Ritorna un elemento del dom, con il primo parametro di specifica
 * quale elemento si intende creare.
 * Con il secondo parametro si ha la possibilità di associare una classe,
 * é un parametro opzionale.
 * @date 13/5/2023 - 00:24:31
 *
 * @param {string} el
 * @param {string} [cls='']
 * @returns {*}
 */
const createEl = (el, cls = '') => {
  const element = cE(el);
  element.classList.add(cls);
  return element;
};

const qS = el => document.querySelector(el);
const cE = el => document.createElement(el);

const imageSlideEl = qS('.imageSlide');
const boxWrapperEl = qS('.box_wrapper');
const imageList = [
  './img/demon-slayer-kimetsu-no-yaiba-kokushibo-in-front-of-the-crescent-wallpaper-640x960_169.jpg',
  './img/desktop-wallpaper-demon-slayer-high-quality-demon-slayer-demon-slayer-phone.jpg',
  './img/EIr3lB8XkAMYKBf.jpg',
  './img/HD-wallpaper-zenitsu-art-anime-anime-demon-slayer-demon-slayer-demon-slayers.jpg'
];
let index = 0

// assegnazione immagine iniziale allo slider
imageSlideEl.src = imageList[index]

// creazione mini slide
for (let i in imageList) {
  const element1 = createEl('figure', 'minislide_wrapper');
  const element2 = createEl('img', 'miniSlide')
  element2.src = imageList[i];
  element2.dataset.id = i
  element1.appendChild(element2);
  boxWrapperEl.appendChild(element1);
}

// Cambia immagine con il click
boxWrapperEl.addEventListener('click', (e) => {
  clearInterval(slideInterval);
  const i = parseInt(e.target.dataset.id);
  console.log(e.target.dataset.id);
  imageSlideEl.src = imageList[i];
})

// intervallo di che cambia immagine nello slider
const slideInterval = setInterval(() => {
  imageSlideEl.src = imageList[index]
  imageSlideEl.alt = 'Demon Slayer Art'
  index++;
  index > imageList.length - 1 ? index = 0 : index
}, 3000);