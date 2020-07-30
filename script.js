// buttons

const btnNewTask = document.getElementById('criar-tarefa');
const btnDeleteSelected = document.getElementById('remover-selecionado');
const btnDeleteCompleted = document.getElementById('remover-finalizados');
const btnDeleteAll = document.getElementById('apaga-tudo');

// create list item, get input value and push list value

function pushListItem() {
  const parentList = document.getElementById('lista-tarefas');
  const userInput = document.querySelector('#texto-tarefa').value;
  if (userInput !== '') {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = userInput;
    parentList.appendChild(newListItem);
    document.querySelector('#texto-tarefa').value = '';
  } else {
    alert('Not valid!');
  }
}

// select list item to set background color

function handleSelectedItem(event) {
  const lastSelected = document.querySelector('.selected');
  const currentItem = event.target;
  if (lastSelected !== null) {
    lastSelected.classList.remove('selected');
    currentItem.classList.add('selected');
  } else {
    currentItem.classList.add('selected');
  }
}

// add completed class to completed tasks

function addCompletedTask(event) {
  const selectedItem = event.target;
  if (selectedItem.classList.contains('completed')) {
    selectedItem.classList.remove('completed');
  } else {
    selectedItem.classList.add('completed');
  }
}

btnNewTask.addEventListener('click', pushListItem);

btnDeleteSelected.addEventListener('click', function () {
  const getSelected = document.querySelector('.selected');
  getSelected.remove();
});

btnDeleteCompleted.addEventListener('click', function () {
  const completedItem = document.querySelectorAll('.completed');
  for (let i = 0; i < completedItem.length; i += 1) {
    if (completedItem[i].classList.contains('completed')) {
      completedItem[i].remove();
    }
  }
});

btnDeleteAll.addEventListener('click', function () {
  const allList = document.querySelectorAll('#lista-tarefas');
  for (let i = 0; i < allList.length; i += 1) {
    allList[i].remove();
  }
});

document
  .querySelector('#lista-tarefas')
  .addEventListener('click', handleSelectedItem);

document
  .querySelector('#lista-tarefas')
  .addEventListener('dblclick', addCompletedTask);
