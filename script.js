const btnIncluir = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
const lista = document.getElementById('lista-tarefas');
const btnApagaSelecionado = document.getElementById('remover-selecionado');

/* *********************************************** */
/* trabalhando com o botão incluir                 */
/* *********************************************** */
function incluirTarefa() {
  const texto = document.getElementById('texto-tarefa').value;
  if (texto !== '') {
    const item = document.createElement('li');
    item.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(item);
    item.style.cursor = 'pointer';
    const tarefa = document.getElementById('texto-tarefa');
    tarefa.value = '';
    tarefa.focus();
  } else {
    alert('Campo tarefa precisa ser preenchido!!!');
  }
}

/* *********************************************** */
/* Apagando todas as tarefas da lista              */
/* *********************************************** */
function apagaTudo() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    document.getElementById('lista-tarefas').removeChild(itens[i]);
  }
}

/* *********************************************** */
/* marcando um item da lista                       */
/* *********************************************** */
function marcarItemDaLista(event) {
  const itemMarcado = document.querySelectorAll('.marcado');
  for (let i = 0; i < itemMarcado.length; i += 1) {
    itemMarcado[i].classList.remove('marcado');
  }
  const marcarItem = event.target;
  if (itemMarcado !== null) {
    marcarItem.classList.add('marcado');
  }
}

/* *********************************************** */
/* informando que a tarefa esta completa           */
/* *********************************************** */
function marcarTarefaConcluida(event) {
  const itemSelecionado = event.target;
  if (itemSelecionado.style.textDecoration === 'line-through') {
    itemSelecionado.classList.remove('completed');
    itemSelecionado.style.textDecoration = 'none';
  } else {
    itemSelecionado.classList.add('completed');
    itemSelecionado.style.textDecoration = 'line-through';
  }
}

/* *********************************************** */
/* quando a pagina for carregada                   */
/* *********************************************** */
/* *********************************************** */
function apagaSelecionado() {
  const selecionado = document.getElementsByClassName('marcado');
  for (let i = 0; i < selecionado.length; i += 1) {
    lista.removeChild(selecionado[i]);
  }
}

/* quando a pagina for carregada                   */
/* *********************************************** */
window.onload = function () {
  btnIncluir.addEventListener('click', incluirTarefa);
  btnApagaTudo.addEventListener('click', apagaTudo);
  lista.addEventListener('click', marcarItemDaLista);
  lista.addEventListener('dblclick', marcarTarefaConcluida);
  btnApagaSelecionado.addEventListener('click', apagaSelecionado)
};
