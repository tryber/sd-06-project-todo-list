const list = document.querySelector('#lista-tarefas');
const doneTask = document.getElementsByClassName('completed');
const btnUndoList = document.querySelector('#apaga-tudo');
const btnDoneCompleted = document.querySelector('#remover-finalizados');

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
  if (doneTask) {
    for (let i = 0; i < doneTask.length; i += 1) {
      doneTask[i].remove();
    }
  }
}

btnDoneCompleted.addEventListener('click', removeCompleted);

// Carregar funções

window.onload = function () {
  clear();
  addTask();
  createList();
  selectTask();
  completedTask();
};
