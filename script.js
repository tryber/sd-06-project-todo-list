
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
  if (taskInput.value === '') {
    alert('Você precisa definir uma tarefa')
  } else {
    listItemContainer.appendChild(listItem);
  }
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
function selectTaskItem(event) {
  let clickedTaskItem = event.target;
  let selectedTaskItem = document.querySelector('.selected');
  if (selectedTaskItem !== null) {
    selectedTaskItem.classList.remove('selected');
  } else {
    clickedTaskItem.classList.add('selected');
  };
}
listItemContainer.addEventListener('click', selectTaskItem);

// MARK TASKS DONE
function markTaskDone(event) {
  let dblClickedTaskItem = event.target;
  dblClickedTaskItem.classList.toggle('completed');
}
listItemContainer.addEventListener('dblclick', markTaskDone);


// REMOVE DONE ITENS
function removeDoneItems() {
  let markedDoneItems = document.querySelectorAll('.completed');
  for (index = 0; index < markedDoneItems.length; index += 1) {
    markedDoneItems[index].remove();
  }
}
removeDoneButton.addEventListener('click', removeDoneItems);




window.onload = function () {


}