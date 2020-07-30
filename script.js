// buttons

const btnNewTask = document.getElementById('criar-tarefa');
const btnDeleteSelected = document.getElementById('remover-selecionado');
const btnDeleteDone = document.getElementById('remover-finalizados');
const btnDeleteAll = document.getElementById('apaga-tudo');

// create list item, get input value and push list value

function pushListItem() {
  const parentList = document.getElementById('lista-tarefas');
  const userInput = document.querySelector('#texto-tarefa').value;
  if (userInput !== '') {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = userInput;
    parentList.appendChild(newListItem);
    newListItem.className = 'item';
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

// add class to risk item

function riskListItem(event) {
  const selectedItem = event.target;
  if (selectedItem.style.textDecoration === 'line-through') {
    selectedItem.classList.remove('selected');
    selectedItem.style.removeProperty('text-decoration');
  } else {
    selectedItem.classList.remove('selected');
    selectedItem.style.textDecoration = 'line-through';
  }
}

btnNewTask.addEventListener('click', pushListItem);

btnDeleteSelected.addEventListener('click', function () {
  const getSelected = document.querySelector('.selected');
  getSelected.remove();
});

btnDeleteDone.addEventListener('click', function () {
  const doneItem = document.querySelectorAll('.line-through');
  for (let i = 0; i < doneItem.length; i += 1) {
    doneItem[i].remove();
  }
});

btnDeleteDone.addEventListener('click', function () {
  const doneItem = document.querySelectorAll('.item');
  for (let i = 0; i < doneItem.length; i += 1) {
    if (doneItem[i].style.textDecoration === 'line-through') {
      doneItem[i].remove();
    }
  }
});

btnDeleteAll.addEventListener('click', function () {
  const allList = document.querySelectorAll('.item');
  for (let i = 0; i < allList.length; i += 1) {
    allList[i].remove();
  }
});

document
  .querySelector('#lista-tarefas')
  .addEventListener('click', handleSelectedItem);

document
  .querySelector('#lista-tarefas')
  .addEventListener('dblclick', riskListItem);
