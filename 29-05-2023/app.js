import { navLink } from './mok.js'

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

const createTwitterPage = () => {
  const wrapperEl = createEl('div', 'wrapperPage', null, mainEl);
  // navbar
  const navEl = createEl('div', 'nav_asaide', null, wrapperEl);
  const wrapLinkNav = createEl('div', 'wrap_link_nav', null, navEl);
  const icon = createEl('i', 'fa-brands fa-twitter nav_icon', null, wrapLinkNav);
  const ulLinkEl = createEl('ul', 'ul_link', null, wrapLinkNav);
  const tweetButtonEl = createEl('button', 'tweet_button', 'tweet', wrapLinkNav);
  const tweetButtonMobile = createEl('button', 'fa-solid fa-feather tweet_mobile', null, wrapLinkNav);
  const userInfoEl = createEl('div', 'user_info', null, navEl);
  const user_avatarEl = createEl('img', 'user_avatar', null, userInfoEl, { name: 'src', value: '' })
  const wrapNameUser = createEl('div', 'wrap_name_user', null, userInfoEl);
  const optUserInfoEl = createEl('i', 'fa-solid fa-ellipsis', null, userInfoEl);
  //central content
  const contentWrappEl = createEl('div', 'contentTwitter', null, wrapperEl);
  const homeWrapperEl = createEl('div', 'home_wrapper', null, contentWrappEl);
  const homeH2 = createEl('h2', null, 'home', homeWrapperEl);
  const PerTeWrappEl = createEl('div', 'wrapper_for_you', null, homeWrapperEl);
  const PerTeP = createEl('p', 'for_you', 'for you', PerTeWrappEl);
  const followinfP = createEl('p', 'follow', 'following', PerTeWrappEl);
  const tweetWrapperForm = createEl('div', 'tweer_wrapper', null, contentWrappEl)
  const userAvatarInput = createEl('img', 'user_avatar', null, tweetWrapperForm, { name: 'src', value: 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' })
  const tweetForm = createEl('form', 'form_wrapp', null, tweetWrapperForm);
  const tweetInputEl = createEl('textarea', 'tweet_input', null, tweetForm, { name: 'row', value: '3' }, { name: 'placeholder', value: 'what is happening?!' });
  const tweetSubmit = createEl('input', 'tweet_submit', 'tweet', tweetForm, { name: 'type', value: 'submit' });
  const wrapperCardEl = createEl('div', 'wrapper_card', null, contentWrappEl);
  // aside content
  const dxWrapperEl = createEl('div', 'dxWrapper', null, wrapperEl);
  const searchBarEl = createEl('input', 'search_bar', null, dxWrapperEl, { name: 'type', value: 'search' }, { name: 'placeholder', value: 'search twitter' });
  const trendsEl = createEl('div', 'trends', null, dxWrapperEl);
  const whoToFollowEl = createEl('div', 'who_to_follow', null, dxWrapperEl);

  //forEach mok list for nav link elements
  navLink.forEach(el => {
    const liEl = createEl('li', 'li_item', null, ulLinkEl);
    const liIconEl = createEl('i', el.icon, null, liEl);
    const liTextEl = createEl('p', 'li_text', el.text, liEl);
  })
}

const mainEl = qS('body');

createTwitterPage();