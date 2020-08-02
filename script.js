window.onload = function () {
  insertButtonEvent();
  clearAllButtonEvent();
  oneClickListEvent();
  doubleClickListEvent();
  clearCompletedButtonEvent();
};

// INSERT ITEMS IN TO-DO LIST
function clearText() {
  document.querySelector('#texto-tarefa').value = '';
}

function insertButtonEvent() {
  const addBtn = document.querySelector('#criar-tarefa');
  addBtn.addEventListener('click', addItemsOfList);
}

function addItemsOfList(event) {
  const list = document.querySelector('#lista-tarefas');
  const itemElement = createItemsOfList();
  list.appendChild(itemElement);
}

function createItemsOfList() {
  const itemElement = document.createElement('li');
  const textValue = document.querySelector('#texto-tarefa');
  itemElement.innerText = textValue.value;
  clearText();
  return itemElement;
}

// CLEAR ALL ITEMS IN TO-DO LIST
function clearAllButtonEvent() {
  const clearBtn = document.querySelector('#apaga-tudo');
  clearBtn.addEventListener('click', ClearAllItems);
}

function ClearAllItems() {
  const allList = document.querySelector('#lista-tarefas');

  while (allList.hasChildNodes()) {
    allList.removeChild(allList.firstChild);
  }
}

// SELECTION ('click') ITEMS IN TO-DO LIST
function oneClickListEvent () {
  const listWrap = document.querySelector('#lista-tarefas');
  listWrap.addEventListener('click', handleOneClickListEvent);
}

function handleOneClickListEvent(event) {
  const previousSelectedItem = document.querySelector('.selected');
  
  if (previousSelectedItem !== null) {
    previousSelectedItem.classList.remove('selected');
  }
  
  const selectedItem = event.target;

  if (selectedItem.classList.contains('selected')) {
    selectedItem.classList.remove('selected');
  } else {
    selectedItem.classList.add('selected');
  }
}
// SELECTION ('double click') ITEMS IN TO-DO LIST
function doubleClickListEvent () {
  const listWrap = document.querySelector('#lista-tarefas');
  listWrap.addEventListener('dblclick', handleDoubleClickListEvent);
}

function handleDoubleClickListEvent(event) {
  const previousSelectedItem = document.querySelector('.selected');
  
  if (previousSelectedItem !== null) {
    previousSelectedItem.classList.remove('selected');
  }
  
  const selectedItem = event.target;

  if (selectedItem.classList.contains('completed')) {
    selectedItem.classList.remove('completed');
  } else {
    selectedItem.classList.add('completed');
  }
}

// CLEAR COMPLETED ITEMS IN TO-DO LIST
function clearCompletedButtonEvent() {
  const completedBtn = document.querySelector('#remover-finalizados');
  completedBtn.addEventListener('click', ClearCompletedItems);
}

function ClearCompletedItems() {
  const allList = document.querySelector('#lista-tarefas');
  let listSize = allList.childNodes.length -1;

  for (listSize; listSize >=0; listSize -= 1) {
    if (allList.childNodes[listSize].classList.contains('completed')) {
      allList.removeChild(allList.childNodes[listSize]);
    }
  }
}