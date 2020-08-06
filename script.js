const btnCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criarTarefa () {
  let lista = document.getElementById('texto-tarefa').value;
  let tarefa = document.createElement('li');
  listaTarefas.appendChild(tarefa);
  tarefa.className = 'item';
  tarefa.innerHTML = lista;  
  document.getElementById('texto-tarefa').value = "";
}

btnCriarTarefa.addEventListener ('click', criarTarefa);
