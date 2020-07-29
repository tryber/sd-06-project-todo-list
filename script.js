// declarando as variáveis globais e os botões
const createTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const removeAllTasksButton = document.querySelector('#apaga-tudo');
const removeCompletedTasksButton = document.querySelector('#remover-finalizados');
const saveTaskListButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeSelectedTaskButton = document.querySelector('#remover-selecionado');


// Organizado em par função / evento

function createNewTask() {
  const textInput = document.querySelector('#texto-tarefa');
  const newTask = document.createElement('li');
  newTask.innerHTML = textInput.value;
  taskList.appendChild(newTask);
  textInput.value = '';
}
createTaskButton.addEventListener('click', createNewTask);

function selectedTask() {
  const taskSelected = event.target;
  const allTasksArray = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < allTasksArray.length; i += 1) {
    if (allTasksArray[i].classList.contains('selectedTask')) {
      allTasksArray[i].classList.remove('selectedTask');
    }
  }
  taskSelected.classList.add('selectedTask');
}
taskList.addEventListener('click', selectedTask);

function scratchTask() {
  const doubleClickedTask = event.target;
  if (doubleClickedTask.classList.contains('completed')) {
    doubleClickedTask.classList.remove('completed');
  } else {
    doubleClickedTask.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', scratchTask);

function removeAll() {
  const allTasksList = document.querySelector('#lista-tarefas');
  while (allTasksList.firstChild) {
    allTasksList.firstChild.remove();
  }
}
removeAllTasksButton.addEventListener('click', removeAll);

function removeCompletedTasks() {
  const allTasksArray = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < allTasksArray.length; i += 1) {
    if (allTasksArray[i].classList.contains('completed')) {
      allTasksArray[i].remove();
    }
  }
}
removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);

function saveTasks() {
  const allTasksList = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('List of all Tasks', allTasksList);
}
saveTaskListButton.addEventListener('click', saveTasks);

function recoverSavedTasks() {
  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('List of all Tasks');
}
window.onload = recoverSavedTasks;

function selectedTasksCount() {
  let selectedTasksCounter = 0;
  const allTasksArray = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < allTasksArray.length; i += 1) {
    if (allTasksArray[i].classList.contains('selectedTask')) {
      selectedTasksCounter += 1;
    }
  }
  return selectedTasksCounter;
}

function moveUp() {
  if (selectedTasksCount() !== 1) {
    alert('Select a task to move up!');
  } else {
    const taskSelected = document.getElementsByClassName('selectedTask')[0];
    if (taskSelected.previousElementSibling !== null) {
      const previousItem = taskSelected.previousElementSibling;
      const textPreviousItem = previousItem.innerHTML;
      previousItem.innerHTML = taskSelected.innerHTML;
      taskSelected.innerHTML = textPreviousItem;
      taskSelected.classList.remove('selectedTask');
      previousItem.classList.add('selectedTask');
    }
  }
}
moveUpButton.addEventListener('click', moveUp);

function moveDown() {
  if (selectedTasksCount() !== 1) {
    alert('Select a task to move down!');
  } else {
    const taskSelected = document.getElementsByClassName('selectedTask')[0];
    if (taskSelected.nextElementSibling !== null) {
      const nextItem = taskSelected.nextElementSibling;
      const textNextItem = nextItem.innerHTML;
      nextItem.innerHTML = taskSelected.innerHTML;
      taskSelected.innerHTML = textNextItem;
      taskSelected.classList.remove('selectedTask');
      nextItem.classList.add('selectedTask');
    }
  }
}
moveDownButton.addEventListener('click', moveDown);

function removeSelectedTask() {
  const allTasksArray = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < allTasksArray.length; i += 1) {
    if (allTasksArray[i].classList.contains('selectedTask')) {
      allTasksArray[i].remove();
    }
  }
}
removeSelectedTaskButton.addEventListener('click', removeSelectedTask);
