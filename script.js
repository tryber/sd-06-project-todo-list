const criarTarefa = document.querySelector('#criar-tarefa');

criarTarefa.addEventListener('click', function () {
  const novaTarefa = document.querySelector('#texto-tarefa').value;
  const ondeCriar = document.querySelector('#lista-tarefas');
  const tarefaCriada = document.createElement('li');

  if (novaTarefa !== '') {
    tarefaCriada.className = 'tarefa';
    tarefaCriada.innerText = novaTarefa;
    ondeCriar.appendChild(tarefaCriada);
    document.querySelector('#texto-tarefa').value = '';
  } else {
    alert('Insira uma tarefa.');
  }
});

const listaTarefas = document.querySelector('#lista-tarefas');
let itemSelecionado = '';

listaTarefas.addEventListener('click', function () {
  const tarefaSelecionada = event.target;

  if (itemSelecionado) {
    itemSelecionado.classList.remove('selecionado');
  }

  tarefaSelecionada.classList.add('selecionado');
  itemSelecionado = event.target;
});

listaTarefas.addEventListener('dblclick', function () {
  const tarefaSelecionada = event.target;

  if (tarefaSelecionada.classList.contains('completed') === true) {
    tarefaSelecionada.classList.remove('completed');
  } else {
    tarefaSelecionada.classList.add('completed');
  }
});

const apagaTudo = document.querySelector('#apaga-tudo');

apagaTudo.addEventListener('click', function () {
  const ondeApagar = document.querySelector('#lista-tarefas');
  if (ondeApagar.firstElementChild) {
    ondeApagar.innerHTML = '';
  } else {
    alert('Lista Vazia.');
  }
});

const apagaFinalizados = document.querySelector('#remover-finalizados');

apagaFinalizados.addEventListener('click', function () {
  const ondeApagar = document.querySelector('#lista-tarefas');
  const analizando = ondeApagar.firstElementChild;

  for (let x = analizando; x; x = x.nextElementSibling) {
    if (x.classList.contains('completed')) {
      x.remove();
      x = ondeApagar.firstElementChild;
    }
  }
});
