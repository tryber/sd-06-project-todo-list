const list = document.querySelector('#lista-tarefas');

// Criando lista de tarefas

function clear() {
  document.querySelector('#texto-tarefa').value = '';
}

function createList() {
  const item = document.createElement('li');
  const task = document.querySelector('#texto-tarefa');
  item.innerText = task.value;
  item.className = 'tasklist';
  // item.style.backgroundColor = '';
  clear();
  return item;
}

function addItem() {
  const element = createList();
  list.appendChild(element);
}


function addTask() {
  const btnAdd = document.querySelector('#criar-tarefa');
  btnAdd.addEventListener('click', addItem);
}

// Selecionar item na lista

function selectTask(item) {
  const select = document.querySelector('.selected');
  if (select) {
    select.classList.remove('selected');
  }
  item.target.classList.add('selected');
}

list.addEventListener('click', selectTask);

// Tarefa concluída

function completedTask(item) {
  item.target.classList.toggle('completed');
}

list.addEventListener('dblclick', completedTask);

// Carregar funções

window.onload = function () {
  clear();
  addTask();
  createList();
  selectTask();
  completedTask();
};
