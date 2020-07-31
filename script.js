const addTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const removeCompletedButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');

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
  for (let index = 0; index < classList.length; index += 1) {
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
      completedTasks[index].remove();
    }
  }
}

function saveTasks() {
  localStorage.setItem('taskList', taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem('taskList');
}

loadTasks();

addTask.addEventListener('click', addTaskToList);
taskList.addEventListener('click', changeTaskToGrey);
taskList.addEventListener('dblclick', crossOutItem);
clearButton.addEventListener('click', cleanTaskList);
removeCompletedButton.addEventListener('click', removeCompletedTasks);
saveTasksButton.addEventListener('click', saveTasks);
