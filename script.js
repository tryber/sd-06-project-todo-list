// btn to create new task

const btnNewTask = document.getElementById('criar-tarefa');

// parent element

const parentList = document.getElementById('lista-tarefas');

// create list item, get input value and push list value

function pushListItem() {
  const newListItem = document.createElement('li');
  parentList.appendChild(newListItem);
  newListItem.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
}

btnNewTask.addEventListener('click', pushListItem);

function selectListItem(event) {
  const selectedItem = event.target;
  selectedItem.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riskListItem(event) {
  const selectedItem = event.target;
  selectedItem.style.removeProperty('background-color');
  selectedItem.style.textDecoration = 'line-through';
}

document
  .querySelector('#lista-tarefas')
  .addEventListener('click', selectListItem);

document
  .querySelector('#lista-tarefas')
  .addEventListener('dblclick', riskListItem);
