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
