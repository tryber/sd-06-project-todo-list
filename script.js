function criaLista() {
  const lista = document.createElement('ol');
  lista.id = 'lista-tarefas';
  document.body.appendChild(lista);
}
criaLista();

function addTarefa() {
  const lista = document.querySelector('#lista-tarefas');
  const textItem = document.querySelector('#texto-tarefa');
  const item = document.createElement('li');
  item.innerHTML = textItem.value;
  textItem.value = '';
  lista.appendChild(item);
}
const btnAdd = document.querySelector('#criar-tarefa');
btnAdd.addEventListener('click', addTarefa);

function changingCollor(event) {
  const oldSelected = document.querySelector('.selected');
  const selected = event.target;
  oldSelected.classList.remove('selected');
  selected.classList.add('selected');
}
const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', changingCollor);

let click = false;
function completedTasks(event) {
  const completedTask = event.target;
  if (click === false) {
    completedTask.classList.add('completed');
    click = true;
  } else if (click === true) {
    completedTask.classList.remove('completed');
    click = false;
  }
}
lista.addEventListener('dblclick', completedTasks);

function apagaTudo() {
  const lista = document.querySelector('#lista-tarefas');
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
const btnApagaTudo = document.querySelector('#apaga-tudo');
btnApagaTudo.addEventListener('click', apagaTudo);

Element.prototype.remove = function() {
  this.parentNode.removeChild;
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for (var i = this.length - 1; i >= 0; i -= 1) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}
function removerFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  finalizados.remove();
}
const btnApagaFinalizados = document.querySelector('#remover-finalizados');
btnApagaFinalizados.addEventListener('click', removerFinalizados);



