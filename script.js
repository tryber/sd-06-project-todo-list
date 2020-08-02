// Busca no LocalStorage se tem lista salva
function findLS() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.tasks !== undefined) {
      getTasksLocalStorage();
    }
  } else {
    document.write('Sem suporte para Web Storage.');
  }
}

// Recupera as tarefas salvas
function getTasksLocalStorage() {
  const objTasks = localStorage.getItem('tasks').split(',');
  const objClass = localStorage.getItem('class').split(',');
  for (let i = 0; i < objTasks.length; i += 1) {
    const listTask = document.querySelector('#lista-tarefas');
    const itemList = document.createElement('li');
    itemList.innerHTML = objTasks[i];
    itemList.className = objClass[i];
    itemList.id = 'lista';
    listTask.appendChild(itemList);
    itemList.addEventListener('click', selectItem);
    itemList.addEventListener('dblclick', itemCompleted);
  }
}

// Adiciona tarefa a lista
function addTask() {
  const task = document.createElement('li');
  task.addEventListener('click', selectItem);
  const lista = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  task.innerHTML = input.value;
  lista.appendChild(task);
  input.value = '';
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
  if ( completedItem.classList.contains('completed')) {
    completedItem.classList.remove('completed');
  } else {
    completedItem.classList.add('completed');
  }
}

// Limpa toda a lista de tarefas
function clearList() {
  const list = document.querySelector('#lista-tarefas');
  while( list.firstChild ) {
    list.removeChild(list.lastChild);
  }
}

// Exclui todas as tarefas completadas
function clearTasksCompleted() {
  const itemsCompleteds = document.getElementsByClassName('completed');
  while (itemsCompleteds.length > 0) {
    itemsCompleteds[0].remove();
  }
}

//S alva a lista de tarefas
function saveList() {
  if (typeof Storage !== 'undefined') {
    localStorage.clear();
    const tasks = document.querySelector('#lista-tarefas');
    const objTasks = [];
    const objClass = [];
    for (let i = 0; i < tasks.children.length; i += 1) {
      objTasks[i] = tasks.children[i].innerText;
      objClass[i] = tasks.children[i].classList;
    }
    localStorage.setItem('tasks', objTasks.join());
    localStorage.setItem('class', objClass.join());
  } else {
    document.write('Sem suporte para Web Storage.');
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

window.onload = function () {
  findLS();
  document.getElementById('criar-tarefa').addEventListener('click', addTask);
  document.getElementById('remover-selecionado').addEventListener('click', removeSelected);
  document.getElementById('mover-cima').addEventListener('click', moveUp);
  document.getElementById('mover-baixo').addEventListener('click', moveDown);
  document.getElementById('remover-finalizados').addEventListener('click', clearTasksCompleted);
  document.getElementById('apaga-tudo').addEventListener('click', clearList);
  document.getElementById('salvar-tarefas').addEventListener('click', saveList);
};
