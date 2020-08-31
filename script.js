const list = document.querySelector('#lista-tarefas');
const btnUndoList = document.querySelector('#apaga-tudo');
const btnDoneCompleted = document.querySelector('#remover-finalizados');
const btnSave = document.querySelector('#salvar-tarefas');

// Criando lista de tarefas

function clear() {
  document.querySelector('#texto-tarefa').value = '';
}

function createList() {
  const item = document.createElement('li');
  const task = document.querySelector('#texto-tarefa');
  item.innerText = task.value;
  item.className = 'tasklist';
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

// Apagar lista

function undoList() {
  list.innerHTML = '';
}

btnUndoList.addEventListener('click', undoList);

// Remover finalizados

function removeCompleted() {
  const doneTask = document.getElementsByClassName('completed');
  const length = doneTask.length;
  if (doneTask) {
    for (let i = length - 1; i >= 0; i -= 1) {
      doneTask[i].remove();
    }
  }
}

btnDoneCompleted.addEventListener('click', removeCompleted);

// Salvar no Storage

function saveLocalStorage() {
  localStorage.setItem('list', list.innerHTML);
}

btnSave.addEventListener('click', saveLocalStorage);

// Buscar lista salva no Storage

function returnListStorage() {
  const listStorage = window.localStorage.getItem('list', list.innerHTML);
  list.innerHTML = listStorage;
}

returnListStorage();

// Carregar funções

window.onload = function () {
  clear();
  addTask();
  createList();
};
