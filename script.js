const inputButton = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// Criar tarefa na lista
function addTarefa() {
  const inputText = document.getElementById('texto-tarefa').value;
  const createListItem = document.createElement('li');
  createListItem.innerHTML = inputText;
  createListItem.className = 'list-item';
  listaTarefas.appendChild(createListItem);
  document.getElementById('texto-tarefa').value = '';
}

inputButton.addEventListener('click', addTarefa);

// Add backgroundColor
listaTarefas.addEventListener('click', function (event) {
  const removeClass = document.querySelector('.selected');
  if (removeClass !== null) {
    removeClass.classList.remove('selected');
  }
  const selectClass = event.target;
  selectClass.className += ' selected';
});

// Add linha riscada
listaTarefas.addEventListener('dblclick', function (event) {
  const completedClass = event.target;
  completedClass.classList.toggle('completed');
});

// Remover tudo
const clearAllButton = document.getElementById('apaga-tudo');
clearAllButton.addEventListener('click', function () {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
});

// Remover itens finalizados
const removeDoneButton = document.getElementById('remover-finalizados');
removeDoneButton.addEventListener('click', function () {
  let listaLength = listaTarefas.childNodes.length - 1;
  for (listaLength; listaLength >= 0; listaLength -= 1) {
    if (listaTarefas.childNodes[listaLength].classList.contains('completed')) {
      listaTarefas.removeChild(listaTarefas.childNodes[listaLength]);
    }
  }
});

// Remover itens selecionados
const removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', function () {
  const selectedClass = document.querySelector('.selected');
  listaTarefas.removeChild(selectedClass);
});
