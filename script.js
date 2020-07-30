// Criar a lista
function criaLista() {
  const listaItem = document.createElement('ol');
  listaItem.id = 'lista-tarefas';
  document.body.appendChild(listaItem);
}
criaLista();


// Adicionar tarefa na lista
function addTarefa() {
  const textItem = document.querySelector('#texto-tarefa');
  const item = document.createElement('li');
  item.innerHTML = textItem.value;
  textItem.value = '';
  lista.appendChild(item);
}
const btnAdd = document.querySelector('#criar-tarefa');
btnAdd.addEventListener('click', addTarefa);


// Mudar cor de somente 1 elemento selecionado
function changingCollor(event) {
  const oldSelected = document.querySelector('.selected');
  const selected = event.target;
  oldSelected.classList.remove('selected');
  selected.classList.add('selected');
}
const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', changingCollor);


// Riscar as tarefas completas
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


// Apagar todos os ítens da lista
function apagaTudo() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
const btnApagaTudo = document.querySelector('#apaga-tudo');
btnApagaTudo.addEventListener('click', apagaTudo);


// Essa parte eu copiei da internet, está funcionando mas além de eu não entender o que está sendo feito, o evaluator não valida. - REMOVER FINALIZADOS
Element.prototype.remove = function () {
  this.parentNode.removeChild;
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i -= 1) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}
function removerFinalizados() {
  const itens = document.querySelectorAll('.completed');
  itens.remove();
}
const btnApagaFinalizados = document.querySelector('#remover-finalizados');
btnApagaFinalizados.addEventListener('click', removerFinalizados);

/********************************************** */

// Salvar os dados no local storage
function salvarDados() {
  let dados = [];
  let org = [];
  const itens = document.querySelectorAll('li');

  for (let index = 0; index < itens.length; index += 1) {
    dados[index] = { item: itens[index], itemTexto: itens[index].innerHTML };
    console.log(dados[index]);
  }

  // for (let j = 0; j < dados.length; j += 1) {
  //   localStorage.setItem('position', JSON.stringify(dados[j]));
  // }

  // for (let ij = 0; ij < dados.length; ij += 1) {
  //   console.log(JSON.parse(localStorage.getItem('position' + ij)));
  // }

}
const btnSalvar = document.querySelector('#salvar-tarefas');
btnSalvar.addEventListener('click', salvarDados);


// Mover elementos na lista
function moverAcima() {
  let selecao = document.querySelector('.selected');
  let temp = selecao.previousSibling;

  console.log(selecao.previousSibling);
  selecao.previousSibling = selecao;
  console.log(selecao.previousSibling);

  selecao = temp;
  console.log(selecao.previousSibling);
}
const btnMoveCima = document.querySelector('#mover-cima');
btnMoveCima.addEventListener('click', moverAcima);