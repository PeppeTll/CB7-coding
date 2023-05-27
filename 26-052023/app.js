import { userMok } from "./userMok.js";

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

const getTodoList = (parent) => {
  try {
    localList = JSON.parse(localStorage.getItem('localList')) || [];
    if (localList.length > 0) {
      localList.forEach(todo => createTodoEl(todo, parent));
    }
  } catch (err) {
    console.warn({
      success: false,
      message: err.message
    })
  }
};

const postTodo = (todo) => {
  try {
    localList.push(todo);
    localStorage.setItem('localList', JSON.stringify(localList))
  } catch (err) {
    console.warn({
      success: false,
      message: err.message
    });
  };
}

const deleteTodo = (id) => {
  try {
    localList = localList.filter(todo => todo.id !== id);
    localStorage.setItem('localList', JSON.stringify(localList));
  } catch (err) {
    console.warn({
      success: false,
      message: err.message
    });
  };
};

const createTodoList = (userName) => {
  const todoWrap = createEl('div', 'wrapTodo', null, mainEl);
  const todoUser = createEl('h1', 'titleTodo', `todo di ${userName}`, todoWrap);
  const addTodoForm = createEl('form', 'addTodoForm', null, todoWrap);
  const addTodo = createEl('input', 'addTodo', null, addTodoForm, { name: 'type', value: 'text' }, { name: 'placeholder', value: 'Inserisci una todo' }, { name: 'autocomplete', value: 'off' });
  const submitForm = createEl('input', 'submitTodo', 'aggiungi todo', addTodoForm, { name: 'type', value: 'submit' });
  const todoList = createEl('div', 'wrapTodoList', null, todoWrap);

  getTodoList(todoList)

  addTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      todo: e.target[0].value,
      completed: false
    }
    postTodo(todo);
    e.target[0].value = '';
    todoList.textContent = '';
    getTodoList(todoList)
  });

  return todoWrap;
}


const createTodoEl = (obj, parent) => {
  const todoEl = createEl('div', 'todoEl', null, parent);
  const checkTodoEl = createEl('i', obj.completed ? 'fa-solid fa-check-double' : 'fa-solid fa-clipboard-list', null, todoEl);
  const todoDescriptionEl = createEl('p', 'todoDescription', obj.todo, todoEl);
  const deleteTodoEl = createEl('i', 'fa-solid fa-trash', null, todoEl);

  const todoList = qS('.wrapTodoList');

  deleteTodoEl.addEventListener('click', (e) => {
    deleteTodo(obj.id);
    parent.textContent = '';
    getTodoList(todoList)
  });

  checkTodoEl.addEventListener('click', (e) => {
    const localTodoEl = localList.find(todo => todo.id === obj.id);
    deleteTodo(localTodoEl.id);
    localTodoEl.completed = !localTodoEl.completed;
    postTodo(localTodoEl)
    parent.textContent = '';
    getTodoList(todoList)
  });

  return todoEl;
}

const createLoginForm = () => {
  const formEl = createEl('form', 'card', null, mainEl);
  const titleForm = createEl('a', 'login', 'logIn', formEl);
  const wrapUserName = createEl('div', 'inputBox', null, formEl);
  const userNameInput = createEl('input', null, null, wrapUserName, { name: 'required', value: 'required' }, { name: 'type', value: 'text' }, { name: 'autocomplete', value: 'off' });
  const spanUserName = createEl('span', 'user', 'userName', wrapUserName);
  const wrapPassword = createEl('div', 'inputBox', null, formEl);
  const passwordInput = createEl('input', null, null, wrapPassword, { name: 'required', value: 'required' }, { name: 'type', value: 'password' }, { name: 'autocomplete', value: 'off' });
  const spanPassword = createEl('span', null, 'password', wrapPassword);
  const enterButton = createEl('input', 'enter', 'enter', formEl, { name: 'type', value: 'submit' });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const userLog = userMok.find(({ username, password }) =>
      username.toLowerCase() === e.target[0].value.toLowerCase() &&
      password.toLowerCase() === e.target[1].value.toLowerCase()
    );
    if (userLog) {
      mainEl.textContent = '';
      createTodoList(userLog.username)
    }
  })

  return formEl;
}

const mainEl = qS('.main');
let localList = [];



createLoginForm();