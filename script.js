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

// Add backgroundColor
listaTarefas.addEventListener('click', function(event) {
  let removeClass = document.querySelector('.selected');
  if (removeClass !== null) {
    removeClass.classList.remove('selected');
  }
  let selectClass = event.target;
  selectClass.className += ' selected';
});

// Add linha riscada
listaTarefas.addEventListener('dblclick', function(event) {
  let completedClass = event.target;
  if (completedClass.classList.contains('completed')) {
    completedClass.classList.remove('completed');
  } else {
    completedClass.className += ' completed';
  }
});

// Remover tudo
const clearAllButton = document.getElementById('apaga-tudo');
clearAllButton.addEventListener('click', function() {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
});



