const criarTarefa = document.querySelector('#criar-tarefa');

criarTarefa.addEventListener('click', function () {
  let novaTarefa = document.querySelector('#texto-tarefa').value;
  const ondeCriar = document.querySelector('#lista-tarefas');
  const tarefaCriada = document.createElement('li');
    
  tarefaCriada.className = 'tarefa';
  tarefaCriada.innerText = novaTarefa;
  ondeCriar.appendChild(tarefaCriada);
  document.querySelector('#texto-tarefa').value = '';
});

const listaTarefas = document.querySelector('#lista-tarefas');
let itemSelecionado = '';

function marcadorDeTarefas () {
  let tarefaSelecionada = event.target;

  if (itemSelecionado) {
    itemSelecionado.classList.remove('selecionado');
  }

  tarefaSelecionada.classList.add('selecionado');
  itemSelecionado = event.target;
}

listaTarefas.addEventListener('click', marcadorDeTarefas);
