// declarando as variáveis e os botões
const createTaskButton = document.querySelector('#criar-tarefa');
const textInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const removeAllTasksButton = document.querySelector('#apaga-tudo');

// Organizado em par função / evento

function createNewTask() {
  const newTask = document.createElement('li');
  newTask.innerHTML = textInput.value;
  taskList.appendChild(newTask);
  textInput.value = '';
}
createTaskButton.addEventListener('click', createNewTask);

function selectedTask() {
  const taskSelected = event.target;
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < allTasks.length; i += 1) {
    if (allTasks[i].classList.contains('selectedTask')) {
      allTasks[i].classList.remove('selectedTask');
    }
  }
  taskSelected.classList.add('selectedTask');
}
taskList.addEventListener('click', selectedTask);

function scrachTask() {
  const doubleClickedTask = event.target;
  if (doubleClickedTask.classList.contains('completed')) {
    doubleClickedTask.classList.remove('completed');
  } else {
    doubleClickedTask.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', scrachTask);

function removeAll() {
  const allTasks = document.querySelector('#lista-tarefas');
  while (allTasks.firstChild) {
    allTasks.firstChild.remove();
  }
}
removeAllTasksButton.addEventListener('click', removeAll);
