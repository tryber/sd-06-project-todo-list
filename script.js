const addTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function addTaskToList() {
  const inputTask = document.querySelector('#texto-tarefa');
  let taskElement = document.createElement('li');
  taskElement.innerText = inputTask.value;
  inputTask.value = '';
  taskList.appendChild(taskElement);
}

function changeTaskToGrey(event) {
  event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

addTask.addEventListener('click', addTaskToList);
taskList.addEventListener('click', changeTaskToGrey);
