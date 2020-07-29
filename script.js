function alternativeSaveList() {
  const arrayLi = [];
  for (const item of document.getElementsByTagName('li')) {
    arrayLi.push(item.innerText, item.classList[0], item.classList[1]);
  }
  if (arrayLi.length !== 0){
    localStorage.setItem('ol', arrayLi);
  } 
}

function alternativeMountList() {
  if (localStorage.ol !== undefined) {
    for (let itens = 0; itens < localStorage.ol.split(',').length; itens += 3) {
      const listItem = document.createElement('li');
      listItem.innerText = localStorage.ol.split(',')[itens];
      if (localStorage.ol.split(',')[itens + 1] !== ''){
        listItem.classList.add(localStorage.ol.split(',')[itens + 1]);
      }
      if (localStorage.ol.split(',')[itens + 2] !== ''){
        listItem.classList.add(localStorage.ol.split(',')[itens + 2]);
      }
      document.getElementById('lista-tarefas').appendChild(listItem);
    }
  }
}

function alternativeSelectListItem(event) {
  let session = localStorage.ol.split(',');
  for(let item = 0; item < session.length; item +=3) {
    if (session[item] === event.target.innerText) {
      session[item + 1] = 'selected';
    } else {
      session[item + 1] = 'not-selected';
    }
  }
  for (const item of document.getElementsByTagName('li')) {
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
    }
  }
  event.target.classList.remove('not-selected');
  event.target.classList.add('selected');
  localStorage.setItem('ol', session);
}

function alternativeCreateListItem() {
  const item = document.createElement('li');
  item.innerText = document.getElementById('texto-tarefa').value;
  item.classList.add('not-selected', 'not-completed');
  document.getElementById('lista-tarefas').appendChild(item);
  document.getElementById('texto-tarefa').value = '';
  alternativeSaveList();
}

function alternativeDoubleSelectListItem(event) {
  let session = localStorage.ol.split(',');
  for(let item = 0; item < session.length; item +=3) {
    if (session[item] === event.target.innerText) {
      if (session[item + 2] === 'completed') {
        session[item + 2] = 'not-completed';
      } else {
        session[item + 2] = 'completed';
      }
    }
  }
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
  localStorage.setItem('ol', session);
}

function alternativeClearSelected() {
  if (localStorage.ol !== undefined && localStorage.ol.split(',').includes(document.querySelector('.selected').innerText)) {
    let arrayP = localStorage.ol.split(',');
    const index = localStorage.ol.split(',').indexOf(document.querySelector('.selected').innerText);
    arrayP.splice(index, 3);
    localStorage.ol = arrayP;
  }
  if (document.getElementsByTagName('li').length !== 0) {
    document.getElementById('lista-tarefas').removeChild(document.querySelector('.selected'));
  }
}

function alternativeClearCompleted() {
  let clone = [];
  for (const item of document.querySelectorAll('.completed')) {
    clone.push(item);
  }
  if (localStorage.ol !== undefined) {
    for (const item of clone) {
      if (localStorage.ol.split(',').includes(item.innerText)) {
        let arrayP = localStorage.ol.split(',');
        const index = localStorage.ol.split(',').indexOf(item.innerText);
        arrayP.splice(index, 3);
        localStorage.ol = arrayP;
      }
    }
  }
  for (const item of clone) {
    document.getElementById('lista-tarefas').removeChild(item);
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
  localStorage.clear();
}

function moveUp() {
  
}

function moveDown() {
  
}

window.onload = function () {
  document.getElementById('criar-tarefa').addEventListener('click', alternativeCreateListItem);
  document.getElementById('lista-tarefas').addEventListener('click', alternativeSelectListItem);
  document.getElementById('lista-tarefas').addEventListener('dblclick', alternativeDoubleSelectListItem);
  document.getElementById('apaga-tudo').addEventListener('click', clearList);
  document.getElementById('remover-finalizados').addEventListener('click', alternativeClearCompleted);
  document.getElementById('remover-selecionado').addEventListener('click', alternativeClearSelected);
  document.getElementById('salvar-tarefas').addEventListener('click', alternativeSaveList);
  alternativeMountList();
}
