window.onload = function () {
  insertButtonEvent();
};

// INSERT ITENS IN LIST
function clearText() {
  document.querySelector('#texto-tarefa').value = '';
}

function insertButtonEvent() {
  const addBtn = document.querySelector('#criar-tarefa');
  addBtn.addEventListener('click', addItensOfList);
}

function addItensOfList(event) {
  const list = document.querySelector('#lista-tarefas');
  const itemElement = createItensOfList();
  list.appendChild(itemElement);
}

function createItensOfList() {
  const itemElement = document.createElement('li');
  const textValue = document.querySelector('#texto-tarefa');
  itemElement.innerText = textValue.value;
  clearText();
  // itemElement.id = 'meme-image';
  // ImageElement.className = 'meme-image';
  return itemElement;
}

// function handleAddButtonEvent(event) {
    // const previousSelectedItem = document.querySelector('.selected');
    // const currentSelectedItem = event.target;
    // previousSelectedItem.classList.remove('selected');
    // currentSelectedItem.classList.add('selected');
    // selectedColor = nowSelectedDiv.style.backgroundColor;
//}
