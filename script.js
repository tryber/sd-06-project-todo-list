const inputButton = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
inputButton.addEventListener('click', addTarefa);

function addTarefa() {
  let inputText = document.getElementById('texto-tarefa').value;
  const createListItem = document.createElement('li');
  createListItem.innerHTML = inputText;
  createListItem.className = 'list-item';
  listaTarefas.appendChild(createListItem);
  document.getElementById('texto-tarefa').value = '';
}

const listItems = document.querySelectorAll('.list-item');
listItems.addEventListener('click', addNewBackgroundColor);

function addNewBackgroundColor() {
  for (item in listItems) {
    item.className = 'selected';
  }
}


