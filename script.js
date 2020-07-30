const listaTarefas = document.getElementById('lista-tarefas');
const addTarefaButton = document.getElementById('criar-tarefa');
const removeSelecionadoButton = document.getElementById('remover-selecionado');
const removeFinalizadosButton = document.getElementById('remover-finalizados');
const apagaTudoButton = document.getElementById('apaga-tudo');
const salvarTarefasButton = document.getElementById('salvar-tarefas');
const moverCimaButton = document.getElementById('mover-cima');
const moverBaixoButton = document.getElementById('mover-baixo');

function addTarefa() {
  const inputTarefa = document.createElement('li');
  inputTarefa.innerText = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(inputTarefa);
  document.getElementById('texto-tarefa').value = '';
}
addTarefaButton.addEventListener('click', addTarefa);

function tarefaSelecionada(event) {
  const itemLista = document.getElementsByTagName('li');
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.id = 'isSelected';
  for (let i = 0; i < itemLista.length; i += 1) {
    if (itemLista[i] !== event.target) {
      itemLista[i].style.backgroundColor = '';
      itemLista[i].id = '';
    }
  }
}
listaTarefas.addEventListener('click', tarefaSelecionada);

function tarefaCompletada(event) {
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
}
listaTarefas.addEventListener('dblclick', tarefaCompletada);

function removeSelecionado() {
  document.getElementById('isSelected').remove();
}
removeSelecionadoButton.addEventListener('click', removeSelecionado);

function removeFinalizados() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
}
removeFinalizadosButton.addEventListener('click', removeFinalizados);

function apagaTudo() {
  const todasTarefas = document.getElementsByTagName('li');
  for (let i = 0; i < todasTarefas.length; i += 0) {
    todasTarefas[i].remove();
  }
}
apagaTudoButton.addEventListener('click', apagaTudo);

function salvarTarefas() {
  localStorage.clear();
  const lista = document.getElementsByTagName('li');
  for (let item = 0; item < lista.length; item += 1) {
    localStorage.setItem(item, lista[item].innerHTML);
    localStorage.setItem(lista[item].innerText, lista[item].className);
  }
}
salvarTarefasButton.addEventListener('click', salvarTarefas);

function carregarLista() {
  for (let i = 0; i < (localStorage.length / 2); i += 1) {
    const localLine = document.createElement('li');
    localLine.innerText = localStorage.getItem(i);
    localLine.className = localStorage.getItem(localLine.innerText);
    listaTarefas.appendChild(localLine);
  }
}
window.onload = carregarLista();

moverCimaButton.addEventListener('click', function () {
  const lista = listaTarefas.childNodes;
  for (let i = 1; i < lista.length; i += 1) {
    if (lista[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      listaTarefas.insertBefore(lista[i], lista[i - 1]);
    }
  }
});

moverBaixoButton.addEventListener('click', function () {
  const lista = listaTarefas.childNodes;
  for (let i = lista.length - 2; i >= 0; i -= 1) {
    if (lista[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      listaTarefas.insertBefore(lista[i + 1], lista[i]);
    }
  }
});
