function saveList() {
  const arrayLi = [];
  for (const item of document.getElementsByTagName('li')) {
    arrayLi.push(item.innerText);
  }
  if (arrayLi.length !== 0){
    localStorage.setItem('ol', arrayLi);
  } 
}

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
  for (const item of clone) {
    document.getElementById('lista-tarefas').removeChild(item);
  }
  localStorage.removeItem('ol');
}

function clearCompleted() {
  let clone = [];
  for (const item of document.querySelectorAll('.completed')) {
    clone.push(item);
  }
  if (localStorage.ol !== undefined) {
    console.log(clone)
    for (const item of clone) {
      if (localStorage.ol.split(',').includes(item.innerText)) {
        let arrayP = localStorage.ol.split(',');
        const index = localStorage.ol.split(',').indexOf(item.innerText)
        arrayP.splice(index, 1);
        localStorage.ol = arrayP;
      }
    }
  }
  for (const item of clone) {
    document.getElementById('lista-tarefas').removeChild(item);
  } 
}

function clearSelected() {
  if (localStorage.ol !== undefined && localStorage.ol.split(',').includes(document.querySelector('.selected').innerText)) {
    let arrayP = localStorage.ol.split(',');
    const index = localStorage.ol.split(',').indexOf(document.querySelector('.selected').innerText)
    arrayP.splice(index, 1);
    localStorage.ol = arrayP;
  }
  if (document.getElementsByTagName('li').length !== 0) {
    document.getElementById('lista-tarefas').removeChild(document.querySelector('.selected'));
  }
  
}

function mountList() {
  if (localStorage.ol !== undefined) {
    for (const item of localStorage.ol.split(',')) {
      const listItem = document.createElement('li');
      listItem.innerText = item;
      document.getElementById('lista-tarefas').appendChild(listItem);
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
