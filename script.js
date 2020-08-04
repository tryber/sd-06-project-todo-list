let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
function insertTask() {
  let lista = document.querySelector('#texto-tarefa').value;
  const task = document.createElement('li');
  task.className = 'item';
  task.innerHTML = lista;
  list.appendChild(task);
  const cleanInput = document.getElementById('texto-tarefa').value = "";
}

button.addEventListener ('click', insertTask);
list.addEventListener ('click', function(event) {
  const oldSelected = document.querySelector('.selected');  
  if (oldSelected !== null) {
    oldSelected.classList.remove('selected');
  }
  const item = event.target;
  item.classList.add('selected');
  console.log(item);
});

list.addEventListener ('dblclick', function(event){
  const completed = event.target;
  if (completed.classList.contains('completed')) {
    completed.classList.remove('completed');
  } else {
    completed.classList.add('completed');
  }
})

let cleanUp = document.querySelector('#apaga-tudo');
cleanUp.addEventListener ('click', function(){
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    list.lastChild.remove();
  }
})

let clean = document.querySelector('#remover-finalizados');
clean.addEventListener('click', function(){
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1){
    if (items[i].classList.contains('completed')){
      list.removeChild(items[i]);
    }
  }
})

function removerFinalizados() {
  const itens = document.querySelectorAll('.completed');
  if (itens) {
    for (let index = 0; index < itens.length; index += 1) {
      lista.removeChild(itens[index]);
    }
  }
}
const btnApagaFinalizados = document.querySelector('#remover-finalizados');
btnApagaFinalizados.addEventListener('click', removerFinalizados);

function salvarDados() {
  window.localStorage.setItem('minhaLista', lista.innerHTML);
}
const btnSalvar = document.querySelector('#salvar-tarefas');
btnSalvar.addEventListener('click', salvarDados);

function listaFoiSalva() {
  const listaSalva = window.localStorage.getItem('minhaLista');
  lista.innerHTML = listaSalva;
}

function removerSelecionado() {
  const itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado) {
  }
}

const btnSelecao = document.querySelector('#remover-selecionado');
btnSelecao.addEventListener('click', removerSelecionado);

function moverAcima() {
  const lista = document.querySelector('#lista-tarefas');
  const selecao = document.querySelector('.selected');
    if (selecao.previousSibling) {
      lista.insertBefore(selecao, selecao.previousSibling);
    }
}

function moverAbaixo() {
  const lista = document.querySelector('#lista-tarefas');
  const selecao = document.querySelector('.selected');
    if (selecao.nextSibling) {
      lista.insertBefore(selecao, selecao.nextSibling.nextSibling);
    }
}
const btnAbaixo = document.querySelector('#mover-baixo');
btnAbaixo.addEventListener('click', moverAbaixo);

const btnMoveCima = document.querySelector('#mover-cima');
btnMoveCima.addEventListener('click', moverAcima);
