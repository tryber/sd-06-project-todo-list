window.onload = function() {
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
function selectingTask(event) {
  const oldSelected = document.querySelector('.selected');
  const selected = event.target;
  if (oldSelected) {
    oldSelected.classList.remove('selected');
    selected.classList.add('selected');
  } else {
    selected.classList.add('selected');
  }  
}
const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', selectingTask);


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


// Remover os ítens finalizados
function removerFinalizados() {
  const itens = document.querySelectorAll('.completed');
  if (itens) {
    for (let index = 0; index < itens.length; index += 1) {
      lista.removeChild(itens[index]);
    }
  }  
}

// function apagarFinalizados() {
//   const listaApagar = document.querySelector('#lista-tarefas');
//   let primeiro = listaApagar.firstChild;
//   for (let i = primeiro; i; i = primeiro.nextSibling) {
//     if (i.classList.contains('completed')) {
//       i.remove();
//     }
//   }
// }
const btnApagaFinalizados = document.querySelector('#remover-finalizados');
btnApagaFinalizados.addEventListener('click', removerFinalizados);

/********************************************** */

// Salvar os dados no local storage
function salvarDados() {
  let dados = [];
  let org = [];
  const itens = document.querySelectorAll('li');

  // for (let index = 0; index < itens.length; index += 1) {
  //   dados[index] = { item: itens[index], itemTexto: itens[index].innerHTML };
  //   console.log(dados[index]);
  // }

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
  let temp = selecao.previousSibling.innerHTML;

  selecao.previousSibling.innerHTML = selecao.innerHTML;

  selecao.innerHTML = temp;
 
}
const btnMoveCima = document.querySelector('#mover-cima');
btnMoveCima.addEventListener('click', moverAcima);
}