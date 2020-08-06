const btnCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criarTarefa() {
  const lista = document.getElementById('texto-tarefa').value;
  const tarefa = document.createElement('li');
  listaTarefas.appendChild(tarefa);
  tarefa.className = 'item';
  tarefa.innerHTML = lista;
  document.getElementById('texto-tarefa').value = '';
}

btnCriarTarefa.addEventListener('click', criarTarefa);

listaTarefas.addEventListener('click', function(event) {
  const tiraSelecionado = document.querySelector('.selecionado');
  if (tiraSelecionado !== null) {
    tiraSelecionado.classList.remove('selecionado');
  }
  event.target.classList.add('selecionado');
});
