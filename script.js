
let tasksList = document.querySelector('#tasks ol');
let itemTxt = '';
let createItemBtn = document.querySelector('#criar-tarefa');
createItemBtn.addEventListener('click', createItem);

function itemClickBg(event) {
  let listItems = document.querySelectorAll('#tasks ol li');
  for (const i of listItems) {
    if (i.classList.contains('selected')) {
      i.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function itemCompleted(event) {
  if(event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');  
  } else {
    event.target.classList.add('completed');
  }
}

function createItem() {
  let createItemElement = document.createElement('li');
  itemTxt = document.querySelector('#texto-tarefa').value;
  createItemElement.innerText = itemTxt;
  tasksList.appendChild(createItemElement);
  createItemElement.addEventListener('click', itemClickBg);
  createItemElement.addEventListener('dblclick', itemCompleted);
  document.querySelector('#texto-tarefa').value = '';
}