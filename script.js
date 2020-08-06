// Adiciona tarefa a lista
function newWork() {
  const task = document.createElement('li');
  task.addEventListener('click', selectItem);
  const lista = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  task.innerHTML = input.value;
  lista.appendChild(task);
  input.value = '';
}

// Limpa toda a lista de tarefas
function clearList() {
  const list = document.querySelector('#lista-tarefas');
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
}

// Move item para cima
function moveUp() {
  const list = document.querySelector('#lista-tarefas');
  const taskSelected = document.querySelector('.selected');
  if (document.getElementsByClassName('selected')[0] !== undefined) {
    if (taskSelected.previousSibling) {
      if ((taskSelected) && (taskSelected.previousSibling)) {
        list.insertBefore(taskSelected, taskSelected.previousSibling);
      }
    }
  }
}

// Move item para baixo
function moveDown() {
  const list = document.querySelector('#lista-tarefas');
  const taskSelected = document.querySelector('.selected');
  if (document.getElementsByClassName('selected')[0] !== undefined) {
    if (taskSelected.nextSibling) {
      if ((taskSelected) && (taskSelected.nextSibling)) {
        list.insertBefore(taskSelected, taskSelected.nextSibling.nextSibling);
      }
    }
  }
}

// Remove item selcionado
function removeSelected() {
  const itemSelected = document.getElementsByClassName('selected');
  while (itemSelected.length > 0) {
    itemSelected[0].remove();
  }
}

// Seta item como completado
function itemCompleted(event) {
  const completedItem = event.target;
  if (completedItem.classList.contains('completed')) {
    completedItem.classList.remove('completed');
  } else {
    completedItem.classList.add('completed');
  }
}

// Seleciona item e troca seleção de item
function selectItem(event) {
  const selectItemList = event.target;
  const listaItems = document.getElementsByTagName('li');
  for (let i = 0; i < listaItems.length; i += 1) {
    listaItems[i].classList.remove('selected');
  }
  selectItemList.classList.add('selected');
  selectItemList.addEventListener('dblclick', itemCompleted);
}

// Exclui todas as tarefas completadas
function clearWorkCompleted() {
  const itemsCompleteds = document.getElementsByClassName('completed');
  while (itemsCompleteds.length > 0) {
    itemsCompleteds[0].remove();
  }
}
