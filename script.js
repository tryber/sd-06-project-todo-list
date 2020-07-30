const addTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const removeCompletedButton = document.querySelector('#remover-finalizados')

function addTaskToList() {
  const inputTask = document.querySelector('#texto-tarefa');
  const taskElement = document.createElement('li');
  taskElement.innerText = inputTask.value;
  inputTask.value = '';
  taskList.appendChild(taskElement);
}

function changeTaskToGrey(event) {
  const oldSelected = document.querySelector('.selectedItem');
  if (oldSelected != null) {
    oldSelected.classList.remove('selectedItem');
  }
  if (event.target !== taskList) {
    event.target.classList.add('selectedItem');
  }
}

function isClassCompleted(classList) {
  for (const index in classList) {
    if (classList[index] === 'completed') {
      return true;
    }
  }
  return false;
}

function crossOutItem(event) {
  const classList = event.target.classList;
  const isCompleted = isClassCompleted(classList);
  if (isCompleted) {
    classList.remove('completed');
    return;
  }
  classList.add('completed');
}

function cleanTaskList() {
  while (taskList.firstElementChild !== null) {
    taskList.removeChild(taskList.firstElementChild);
  }
}

function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  if (completedTasks.length !== 0) {
    for (let index = 0; index < completedTasks.length; index += 1) {
      taskList.removeChild(completedTasks[index]);
    }
  }
}

addTask.addEventListener('click', addTaskToList);
taskList.addEventListener('click', changeTaskToGrey);
taskList.addEventListener('dblclick', crossOutItem);
clearButton.addEventListener('click', cleanTaskList);
removeCompletedButton.addEventListener('click', removeCompletedTasks);
