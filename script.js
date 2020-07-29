const inputButton = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
inputButton.addEventListener('click', addTarefa);

// Criar tarefa na lista
function addTarefa() {
  let inputText = document.getElementById('texto-tarefa').value;
  const createListItem = document.createElement('li');
  createListItem.innerHTML = inputText;
  createListItem.className = 'list-item';
  listaTarefas.appendChild(createListItem);
  document.getElementById('texto-tarefa').value = '';
}

// Remover tudo
let listItems = document.getElementById('lista-tarefas');
const clearAllButton = document.getElementById('apaga-tudo');
clearAllButton.addEventListener('click', function() {
  while (listItems.firstChild) {
    listItems.removeChild(listItems.firstChild);
  }
});



