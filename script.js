
// CONSTANTS
const taskInput = document.querySelector('input#texto-tarefa');
const addTaskButton = document.querySelector('button#criar-tarefa');
const listItemContainer = document.querySelector('ol#lista-tarefas');
const removeDoneButton = document.querySelector('button#remover-finalizados');
const removeSelectedButton = document.querySelector('button#remover-selecionado');


// BUILD TASKS LIST
function buildList() {
  let listItem = document.createElement('li');
  listItem.className = 'task';
  listItem.innerHTML = taskInput.value;
  listItemContainer.appendChild(listItem);
  taskInput.value = '';
}
addTaskButton.addEventListener('click', buildList);

// REMOVE SELECTED ITEM
function removeSelected() {
  let selectedClassItem = document.querySelector('.selected');
  selectedClassItem.remove()
}
removeSelectedButton.addEventListener('click', removeSelected);

// SELECT ITEMS
function selectTask(event) {
  let clickedTaskItem = event.target;
  let selectedTaskItem = document.querySelector('.selected');
  if (selectedTaskItem !== null) {
    selectedTaskItem.classList.remove('selected');
  } else {
    clickedTaskItem.classList.add('selected');
  };
}
listItemContainer.addEventListener('click', selectTask);






window.onload = function () {


}