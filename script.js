// btn to create new task

const btnNewTask = document.getElementById('criar-tarefa');

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

// function setBgColor() {
//   const lastSelectedItem = document.querySelector('.selected');
//   lastSelectedItem.classList.remove('selected');
//   const currentSelectedItem = event.target;
//   currentSelectedItem.classList.add('selected');
// }

// risk list item

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

document
.querySelector('#lista-tarefas')
  .addEventListener('click', handleSelectedItem);

document
.querySelector('#lista-tarefas')
.addEventListener('dblclick', riskListItem);

//  document
//    .querySelector('.selected')
//    .addEventListener('click', function (event) {
//      const lastSelectedItem = document.querySelector('.selected');
//      const currentSelectedItem = event.target;
//      lastSelectedItem.style.removeProperty('background-color');
//      currentSelectedItem.classList.add('selected');
//    });
