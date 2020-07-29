const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const removeAllButton = document.getElementById('apaga-tudo');
const removeCheckedButton = document.getElementById('remover-finalizados');
let items;
let listChecked;

button.addEventListener('click', function() {addNewItem()});
removeAllButton.addEventListener('click', function() {removeAll()});
removeCheckedButton.addEventListener('click', function() {removeChecked()});

function addNewItem() {
  let input = document.getElementById('texto-tarefa');
  if (input.value === "") {
    return
  }
  let newItem = document.createElement('li');
  newItem.appendChild(document.createTextNode(input.value));
  list.appendChild(newItem);
  newItem.addEventListener('click', function() {changeBackground(newItem)});
  newItem.addEventListener('dblclick', function() {completed(newItem)});
  input.value = "";
}

function changeBackground(item) {
  temp = document.getElementsByClassName('cinza');
  if (temp.length) {
    temp[0].classList.remove('cinza');
  }
  item.classList.add('cinza');
}

function completed(item) {
  let temp = document.getElementsByClassName('completed');
  if (findItemInElements(item, temp)) {
    item.classList.remove('completed');
    return 0;
  } else {
    item.classList.add('completed');
    return 1;
  }
}

function findItemInElements(item, elements) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] == item) {
      return 1;
    }
  }

  return 0;

}

function removeAll() {
  while(list.firstChild){
    list.removeChild(list.firstChild);
  }
}

function removeChecked() {
  listChecked = document.getElementsByClassName('completed');
  let temp = document.getElementById('lista-tarefas')
  for (let i = 0; listChecked.length; i++) {
    temp.removeChild(listChecked[0]);
  }
}
