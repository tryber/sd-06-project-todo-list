const inputButton = document.getElementById('criar-tarefa');
inputButton.addEventListener('click', addTarefa);

function addTarefa() {
  let inputText = document.getElementById('texto-tarefa').value;
  let listaTarefas = document.getElementById('lista-tarefas');
  let createListItem = document.createElement('li');
  createListItem.innerHTML = inputText;
  listaTarefas.appendChild(createListItem);
  document.getElementById('texto-tarefa').value = '';
}
