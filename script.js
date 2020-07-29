const addTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

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
  for (let index in classList) {
    if (classList[index] === 'completed') {
      return true;
    }
    return false;
  }
}

function crossOutItem(event) {
  let classList = event.target.classList;
  let isCompleted = isClassCompleted(classList);
  if (isCompleted) {
    classList.remove('completed');
    return
  } 
  classList.add('completed');
}

addTask.addEventListener('click', addTaskToList);
taskList.addEventListener('click', changeTaskToGrey);
taskList.addEventListener('dblclick', crossOutItem);
