const btnAddTask = document.querySelector('#criar-tarefa');
const btnEraseAllTask = document.querySelector('#apaga-tudo');
const btnEraseAllTaskFineshed = document.querySelector('#remover-finalizados');
const btnSaveAllTasks = document.querySelector('#salvar-tarefas');
const btnRemoveSelected = document.querySelector('#remover-selecionado');
const btnSetUp = document.querySelector('#mover-cima');
const btnSetDown = document.querySelector('#mover-baixo');

// Criar 'ol' no html para inserir a lista
const createList = () => {
  const taskListDiv = document.querySelector('.taskList');
  const listElement = document.createElement('ol');
  listElement.id = 'lista-tarefas';
  taskListDiv.appendChild(listElement);
}
createList();

// Acrescentado tarefas a lista
const addTask = () => {
  const taskList = document.querySelector('#lista-tarefas');
  const taskTxt = document.querySelector('#texto-tarefa');
  const itemLi = document.createElement('li');
  itemLi.innerHTML = taskTxt.value;
  taskTxt.value = '';
  taskList.appendChild(itemLi);
}
btnAddTask.addEventListener('click', addTask);

// Apagando todas as tarefas
btnEraseAllTask.addEventListener('click', function () {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

// Mudando para cinza a tarefa em um click
const taskList = document.querySelector('#lista-tarefas');
taskList.addEventListener('click', function (event) {
  const ifTaskSelected = document.querySelector('.selected');
  const newSelected = event.target;
  if (ifTaskSelected) {
    ifTaskSelected.classList.remove('selected');
    newSelected.classList.add('selected');
  } else {
    newSelected.classList.add('selected');
  }
});

// Riscando tarefa com duplo click
taskList.addEventListener('dblclick', function () {
  const listItem = event.target;
  listItem.classList.toggle('completed');
});

// Remover todos as tarefas finalizadas
const removeTaskFineshed = () => {
  const fineshedTasks = document.querySelectorAll('.completed');
  if (fineshedTasks) {
    for (let index = 0; index < fineshedTasks.length; index += 1) {
      fineshedTasks[index].remove();
    }
  }
};
btnEraseAllTaskFineshed.addEventListener('click', removeTaskFineshed);

// Salvando tarefas no local storage
const saveTaskLocalStorage = () => {
  window.localStorage.setItem('taskList', taskList.innerHTML);
};
btnSaveAllTasks.addEventListener('click', saveTaskLocalStorage);

// Recuperando tarefas salvas no local Stage
function recoverTaskList() {
  const taskListStorage = window.localStorage.getItem('taskList');
  taskList.innerHTML = taskListStorage;
}
recoverTaskList();

// Remover tarefa selecionada/fundo cinza 
const removeSelected =  () => {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected) {
    itemSelected.remove();
  }
};
btnRemoveSelected.addEventListener('click', removeSelected);

// Mover para cima e para baixo a tarefa usando setas
btnSetUp.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if ((selected) && (selected.previousSibling)) {
    taskList.insertBefore(selected, selected.previousSibling);
  }
});
btnRemoveSelected.addEventListener('click', removeSelected);


btnSetDown.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if ((selected) && (selected.nextSibling)) {
    taskList.insertBefore(selected, selected.nextSibling.nextSibling);
  }
});
btnRemoveSelected.addEventListener('click', removeSelected);
