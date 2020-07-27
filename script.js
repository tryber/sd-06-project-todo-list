// declarando as variáveis globais e os botões
const createTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const removeAllTasksButton = document.querySelector('#apaga-tudo');
const removeCompletedTasksButton = document.querySelector('#remover-finalizados');
const saveTaskListButton = document.querySelector('#salvar-tarefas');

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
