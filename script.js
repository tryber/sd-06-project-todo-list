// buttons

const btnNewTask = document.getElementById('criar-tarefa');
const btnDeleteSelected = document.getElementById('remover-selecionado');
const btnDeleteCompleted = document.getElementById('remover-finalizados');
const btnDeleteAll = document.getElementById('apaga-tudo');
const saveTaskList = document.getElementById('salvar-tarefas');

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

// add events to page buttons

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
  const allList = document.querySelector('#lista-tarefas');
  while (allList.firstChild) {
    allList.removeChild(allList.lastChild);
  }
  localStorage.clear();
});

document.querySelector('#lista-tarefas').addEventListener('click', handleSelectedItem);

document.querySelector('#lista-tarefas').addEventListener('dblclick', addCompletedTask);

// call event to store list items

saveTaskList.addEventListener('click', () => {
  const tasks = document.getElementsByTagName('li');
  if (localStorage !== null) {
    localStorage.clear();
  }
  for (let i = 0; i < tasks.length; i += 1) {
    localStorage.setItem(i, tasks[i].innerHTML);
    localStorage.setItem(tasks[i].innerHTML, tasks[i].className);
  }
});

// load stored items after page load

window.onload = () => {
  const parentList = document.getElementById('lista-tarefas');
  for (let key = 0; key < localStorage.length / 2; key += 1) {
    const loadListItem = document.createElement('li');
    loadListItem.innerHTML = localStorage.getItem(key);
    loadListItem.className = localStorage.getItem(localStorage[key]);
    parentList.appendChild(loadListItem);
  }
};
