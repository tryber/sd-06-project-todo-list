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
  const item = event.target;
  item.style.background = 'rgb(128 , 128 , 128)';
}
const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', changingCollor);