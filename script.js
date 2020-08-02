window.onload = function () {
  insertButtonEvent();
  clearAllButtonEvent();
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
  // itemElement.id = 'meme-image';
  // ImageElement.className = 'meme-image';
  return itemElement;
}

// CLEAR ALL ITENS IN TO-DO LIST
function clearAllButtonEvent() {
  const clearBtn = document.querySelector('#apaga-tudo');
  clearBtn.addEventListener('click', ClearAllItems);
} 

function ClearAllItems(){
  const list = document.querySelector('#lista-tarefas');

  while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
  }
}

// function handleAddButtonEvent(event) {
    // const previousSelectedItem = document.querySelector('.selected');
    // const currentSelectedItem = event.target;
    // previousSelectedItem.classList.remove('selected');
    // currentSelectedItem.classList.add('selected');
    // selectedColor = nowSelectedDiv.style.backgroundColor;
// }

//<button onclick="ClearAllItens()" id='apaga-tudo'>Limpar Lista</button>
