const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const removeAllButton = document.getElementById('apaga-tudo');
let items;

button.addEventListener('click', function() {addNewItem()});
removeAllButton.addEventListener('click', function() {removeAll()});

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
  let oldBg = document.getElementsByClassName('cinza')[0];
  oldBg.classList.remove('cinza');
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
