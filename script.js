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

const salvarTarefas = document.querySelector('#salvar-tarefas');

salvarTarefas.addEventListener('click', function () {
  const listaParaSalvar = document.querySelector('#lista-tarefas');
  if (listaParaSalvar.firstElementChild) {
    window.localStorage.setItem('lista', listaParaSalvar.innerHTML);
  } else {
    alert('Lista vazia.');
  }
});

function confereSeTemLista() {
  const checando = window.localStorage.getItem('lista');
  if (checando) {
    const lista = document.querySelector('#lista-tarefas');
    lista.innerHTML = checando;
  }
}

confereSeTemLista();

const moverCima = document.querySelector('#mover-cima');

moverCima.addEventListener('click', function () {
  const lista = document.querySelector('#lista-tarefas');
  const nodesDaLista = lista.childNodes;

  for (let x = 1; x < nodesDaLista.length; x += 1) {
    if (nodesDaLista[x].classList.contains('selecionado') && nodesDaLista[x - 1].nodeName !== '#text') {
      lista.insertBefore(nodesDaLista[x], nodesDaLista[x - 1]);
    }
  }
});

const moverBaixo = document.querySelector('#mover-baixo');

moverBaixo.addEventListener('click',  function () {
  const lista = document.querySelector('#lista-tarefas');
  const nodesDaLista = lista.childNodes;
  
  for (let x = nodesDaLista.length - 2; x >= 0; x -= 1) {
    if (nodesDaLista[x].classList.contains('selecionado') && nodesDaLista[x + 1].nodeName !== '#text') {
      lista.insertBefore(nodesDaLista[x + 1], nodesDaLista[x]);
    }
  }
});
