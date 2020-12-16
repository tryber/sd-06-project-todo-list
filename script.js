const olElement = document.getElementById('lista-tarefas');
const removeAllTasksButton = document.getElementById('apaga-tudo');
const createTaskButton = document.getElementById('criar-tarefa');
const removeCompletedTasksButton = document.getElementById('remover-finalizados');
const removeSelectedTasksButton = document.getElementById('remover-selecionado');
const moveUpSelectedTaskButton = document.getElementById('move-cima');
const moveDownSelectedTaskButton = document.getElementById('move-baixo');
const saveStatusButton = document.getElementById('salvar-tarefas');
const localStorageList = localStorage.getItem('toDoList');

if (localStorageList) {
  document.getElementById('lista-tarefas').innerHTML = localStorageList;
}

function selectedTask(event) {
  const liSelectedTask = event.target;
  if (document.querySelector('.selectedTask') !== null) {
    document.querySelector('.selectedTask').classList.remove('selectedTask');
  }
  liSelectedTask.classList.add('selectedTask');
}

function completedTask(event) {
  const liCompletedTask = event.target;
  if (liCompletedTask.classList.contains('completed')) {
    liCompletedTask.classList.remove('completed');
  } else {
    liCompletedTask.classList.add('completed');
  }
}

function createTask() {
  const liElement = document.createElement('li');
  const task = document.getElementById('texto-tarefa').value;
  liElement.innerHTML = task;
  olElement.appendChild(liElement);
  document.getElementById('texto-tarefa').value = '';
}

function removeAllTasks() {
  const liElements = document.getElementsByTagName('li');
  for (let i = liElements.length - 1; i >= 0; i -= 1) {
    liElements[i].remove();
  }
}

function removeCompletedTasks() {
  const liCompleted = document.querySelectorAll('.completed');
  for (let i = liCompleted.length - 1; i >= 0; i -= 1) {
    liCompleted[i].remove();
  }
}

function removeSelectedTasks() {
  if (document.querySelector('.selectedTask') !== null) {
    document.querySelector('.selectedTask').remove();
  }
}

// function moveUpSelectedTask() {
//   if (document.querySelector('.selectedTask') !== null) {
    
//   }

// }

// function moveDownSelectedTask() {
//   if (document.querySelector('.selectedTask') !== null) {
    
//   }
// }

function saveStatus() {
  const taskList = document.getElementById('lista-tarefas');
  localStorage.setItem('toDoList', taskList.innerHTML);
}

olElement.addEventListener('click', selectedTask);
olElement.addEventListener('dblclick', completedTask);
createTaskButton.addEventListener('click', createTask);
removeAllTasksButton.addEventListener('click', removeAllTasks);
removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);
removeSelectedTasksButton.addEventListener('click', removeSelectedTasks);
// moveUpSelectedTaskButton.addEventListener('click', moveUpSelectedTask);
// moveDownSelectedTaskButton.addEventListener('click', moveDownSelectedTask);
saveStatusButton.addEventListener('click', saveStatus);
