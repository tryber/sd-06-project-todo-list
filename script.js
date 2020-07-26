function createListItem() {
  const item = document.createElement('li');
  item.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(item);
  document.getElementById('texto-tarefa').value = '';
  saveList();
}

function selectListItem(event) {
  for (const item of document.getElementsByTagName('li')) {
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function doubleSelectListItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function clearList() {
  let clone = [];
  for (const item of document.getElementsByTagName('li')) {
    clone.push(item);
  }
  for (let item of clone) {
    document.getElementById('lista-tarefas').removeChild(item);
  }
  localStorage.removeItem('ol');
}

function clearCompleted() {
  let clone = [];
  for (const item of document.querySelectorAll('.completed')) {
    clone.push(item);
  }
  for (let item of clone) {
    document.getElementById('lista-tarefas').removeChild(item);
  }
}

function clearSelected() {
  document.getElementById('lista-tarefas').removeChild(document.querySelector('.selected'));
}

function saveList() {
  const arrayLi = [];
  for (item of document.getElementsByTagName('li')) {
    arrayLi.push(item.innerText);
  }
  localStorage.setItem('ol', arrayLi);
}

function mountList() {
  if (localStorage.ol !== null) {
    for (item of localStorage.ol.split(',')) {
      const list_item = document.createElement('li');
      list_item.innerText = item;
      document.getElementById('lista-tarefas').appendChild(list_item);
    }
  }
}

function moveUp() {
  
}

function moveDown() {
  
}

window.onload = function () {
  document.getElementById('criar-tarefa').addEventListener('click', createListItem);
  document.getElementById('lista-tarefas').addEventListener('click', selectListItem);
  document.getElementById('lista-tarefas').addEventListener('dblclick', doubleSelectListItem);
  document.getElementById('apaga-tudo').addEventListener('click', clearList);
  document.getElementById('remover-finalizados').addEventListener('click', clearCompleted);
  document.getElementById('remover-selecionado').addEventListener('click', clearSelected);
  document.getElementById('salvar-tarefas').addEventListener('click', saveList);
  mountList();
}
