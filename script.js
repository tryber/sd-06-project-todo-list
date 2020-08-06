const btnCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const btnApagarTudo = document.getElementById('apaga-tudo');
const btnRemoveFin = document.getElementById('remover-finalizados')
const completados = document.getElementsByClassName('completed')

function criarTarefa(event) {
  const lista = document.getElementById('texto-tarefa').value;
  const tarefa = document.createElement('li');
  listaTarefas.appendChild(tarefa);
  tarefa.className = 'item';
  tarefa.innerHTML = lista;
  document.getElementById('texto-tarefa').value = '';
};

function seleciona(event) {
  const tiraSelecionado = document.querySelector('.selecionado');
  if (tiraSelecionado !== null) {
    tiraSelecionado.classList.remove('selecionado');
  }
  event.target.classList.add('selecionado');
};

function feito(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};

function apagaTudo(event) {
  listaTarefas.innerHTML = ''
};

function limpaCompletos(event) {
  for (var i = 0; i < completados.length; ++i) {
    completados[i].remove();
  }
};

btnRemoveFin.addEventListener('click', limpaCompletos)
btnApagarTudo.addEventListener('click', apagaTudo)
btnCriarTarefa.addEventListener('click', criarTarefa);
listaTarefas.addEventListener('click', seleciona);
listaTarefas.addEventListener('dblclick', feito);
