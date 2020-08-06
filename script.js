
// CONSTANTS
const taskInput = document.querySelector('#texto-tarefa');
const addTaskButton = document.querySelector('#criar-tarefa');
const listItemContainer = document.querySelector('#lista-tarefas');


addTaskButton.addEventListener('click', buildList);

// BUILD TASKS LIST
function buildList() {
  const listItem = document.createElement('li');
  listItemContainer.appendChild(listItem);
  listItemContainer.className = 'task';
  listItemContainer.innerHTML = taskInput.value;
  taskInput.value = '';
}

