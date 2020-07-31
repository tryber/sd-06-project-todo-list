
const btnAdd = document.querySelector('#criar-tarefa');
const btnApagaTudo = document.querySelector('#apaga-tudo');
const btnApagaFinalizados = document.querySelector('#remover-finalizados');
const btnSalvar = document.querySelector('#salvar-tarefas');
const btnSelecao = document.querySelector('#remover-selecionado');
const btnUp = document.querySelector('#mover-cima');
const btnDown = document.querySelector('#mover-baixo');


// Criar a lista
function criaLista() {
  const tarefas = document.querySelector('.tarefas');
  const listaItem = document.createElement('ol');
  listaItem.id = 'lista-tarefas';
  tarefas.appendChild(listaItem);
}
criaLista();


// Adicionar tarefa na lista
btnAdd.addEventListener('click', function () {
  const lista = document.querySelector('#lista-tarefas');
  const textItem = document.querySelector('#texto-tarefa');
  const item = document.createElement('li');
  item.innerHTML = textItem.value;
  textItem.value = '';
  lista.appendChild(item);
});


// Mudar cor de somente 1 elemento selecionado
const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', function (event) {
  const oldSelected = document.querySelector('.selected');
  const selected = event.target;
  if (oldSelected) {
    oldSelected.classList.remove('selected');
    selected.classList.add('selected');
  } else {
    selected.classList.add('selected');
  }
});


// Riscar as tarefas completas
lista.addEventListener('dblclick', function () {
  const item = event.target;
  item.classList.toggle('completed');
});


// Apagar todos os ítens da lista
btnApagaTudo.addEventListener('click', function () {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
});


// Remover os ítens finalizados
btnApagaFinalizados.addEventListener('click', function () {
  const itens = document.querySelectorAll('.completed');
  if (itens) {
    for (let index = 0; index < itens.length; index += 1) {
      itens[index].remove();
    }
  }
});


// Salvar os dados no local storage
btnSalvar.addEventListener('click', function () {
  window.localStorage.setItem('minhaLista', lista.innerHTML);
});
// Recuperar dados do local Stage
function listaFoiSalva() {
  const listaSalva = window.localStorage.getItem('minhaLista');
  lista.innerHTML = listaSalva;
}
listaFoiSalva();


// Remover item selecionado
btnSelecao.addEventListener('click', function () {
  const itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado) {
    itemSelecionado.remove();
  }
});


// Mover elementos na lista
btnUp.addEventListener('click', function () {
  const selecao = document.querySelector('.selected');
  if ((selecao) && (selecao.previousSibling)) {
    lista.insertBefore(selecao, selecao.previousSibling);
  }
});
btnDown.addEventListener('click', function () {
  const selecao = document.querySelector('.selected');
  if ((selecao) && (selecao.nextSibling)) {
    lista.insertBefore(selecao, selecao.nextSibling.nextSibling);
  }
});
