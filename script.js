
// CONSTANTS
const taskInput = document.querySelector('#texto-tarefa');
const addTaskButton = document.querySelector('#criar-tarefa');
const listItemContainer = document.querySelector('#lista-tarefas');


// BUILD TASKS LIST
function buildList() {
  const listItem = document.createElement('li');
  listItemContainer.className = 'task';
  listItemContainer.innerHTML = taskInput.value;
  listItemContainer.appendChild(listItem);
  taskInput.value = '';
}





window.onload = function () {
  addTaskButton.addEventListener('click', buildList);

}