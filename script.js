window.onload = function () {
  clear();
  addTask();
  createList();
}

// Criando lista de tarefas

function clear() {
  document.querySelector('#texto-tarefa').value = '';
}

function addTask() {
  const btnAdd = document.querySelector('#criar-tarefa');
  btnAdd.addEventListener('click', addItem);
}

function addItem() {
  const list = document.querySelector('#lista-tarefas');
  const element = createList();
  list.appendChild(element);
}

function createList() {
  const item = document.createElement('li');
  const task = document.querySelector('#texto-tarefa');
  item.innerText = task.value;
  clear();
  return item;
}
