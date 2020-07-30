// btn to create new task

const btnNewTask = document.getElementById('criar-tarefa');

// parent element

const parentList = document.getElementById('lista-tarefas');

// create list item, get input value and push list value

function pushListItem() {
  const newListItem = document.createElement('li');
  parentList.appendChild(newListItem);
  newListItem.innerText = document.querySelector('#texto-tarefa').value;
  newListItem.className = 'item';
  document.querySelector('#texto-tarefa').value = '';
}

// select list item to set background color

function handleSelectedItem() {
  const currentItem = event.target;
  currentItem.classList.add('selected');
  currentItem.style.backgroundColor = 'rgb(128, 128, 128)';
  // currentItem.addEventListener('click', setBgColor);
  setBgColor(event);
}

function setBgColor(event) {
  const lastSelectedItem = document.querySelector(".selected");
  lastSelectedItem.classList.remove('selected');
  const currentSelectedItem = event.target;
  currentSelectedItem.classList.add("selected");
}

// risk list item

function riskListItem(event) {
  const selectedItem = event.target;
  if (selectedItem.style.textDecoration == 'line-through') {
    selectedItem.style.removeProperty('background-color');
    selectedItem.style.removeProperty('text-decoration');  
  } else {
    selectedItem.style.removeProperty("background-color");
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
//    .querySelector(".selected")
//    .addEventListener("click", function (event) {
//      const lastSelectedItem = document.querySelector(".selected");
//      const currentSelectedItem = event.target;
//      lastSelectedItem.style.removeProperty("background-color");
//      currentSelectedItem.classList.add("selected");
//    });
