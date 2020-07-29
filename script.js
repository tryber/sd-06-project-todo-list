const header = document.getElementsByClassName('header')[0];
const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function addNewItem() {
  let input = document.getElementById('texto-tarefa');
  if (input.value === "") {
    return
  }
  let newItem = document.createElement('li');
  newItem.appendChild(document.createTextNode(input.value));
  list.appendChild(newItem);
  input.value = "";
  listListItems();
}

function listListItems() {
  let items = document.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {changeBackground(items[i])});
  }
}

function changeBackground(item) {
  let oldBg = document.getElementsByClassName('cinza')[0];
  oldBg.classList.remove('cinza');
  oldBg.style.backgroundColor = "";
  item.classList.add('cinza');
  item.style.backgroundColor = "rgb(128, 128, 128)";
}

button.addEventListener('click', function() {addNewItem()});
