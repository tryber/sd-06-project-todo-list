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
  if (click === false)  {
    completedTask.classList.add('completed');
    click = true;
  } else if (click === true) {
    completedTask.classList.remove('completed');
    click = false;
    console.log('entrou');
  }
}
lista.addEventListener('dblclick', completedTasks);
