//Adiciona tarefa a lista
function addTask() {
  let task = document.createElement('li');
  task.addEventListener('click',selectItem);
  let lista = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  task.innerHTML = input.value;
  lista.appendChild(task);
  input.value = '';
}

//Seleciona item e troca seleção de item
function selectItem(event) {
  let selectItemList = event.target;
  let listaItems = document.getElementsByTagName('li');
  for (let i = 0; i < listaItems.length; i += 1) {
    listaItems[i].classList.remove('selected');
  }
  selectItemList.classList.add('selected');
  selectItemList.addEventListener('dblclick', itemCompleted);
}
//Seta item como completado
function itemCompleted(event) {
  let completedItem = event.target;
  if ( completedItem.classList.contains('completed')) {
    completedItem.classList.remove('completed');
  }else {
    completedItem.classList.add('completed');
  }
}

function clearList() {
  let list = document.querySelector('#lista-tarefas');
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
