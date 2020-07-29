const listaTarefas = document.getElementById('lista-tarefas');
const addTarefaButton = document.getElementById('criar-tarefa');
const item;

function item() {
  const addTarefa;
  const inputTarefa = document.createElement('li');
  inputTarefa.innerText = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(inputTarefa);
  document.getElementById('texto-tarefa').value = '';
}
addTarefaButton.addEventListener('click', addTarefa);
