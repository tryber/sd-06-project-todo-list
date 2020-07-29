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
}

button.addEventListener('click', function() {addNewItem()});



