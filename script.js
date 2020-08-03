function alternativeSaveList() {
  const arrayLi = [];
  const li = document.getElementsByTagName('li');
  for (let item = 0; item < li.length; item += 1) {
    arrayLi.push([li[item].innerText, li[item].classList[0], li[item].classList[1]]);
  }
  localStorage.setItem('ol', arrayLi);
}

function alternativeCreateListItem() {
  const item = document.createElement('li');
  const secondaryItem = document.createElement('hr');
  item.innerText = document.getElementById('texto-tarefa').value;
  item.classList.add('not-selected', 'not-completed');
  item.addEventListener('click', alternativeSelectListItem);
  item.addEventListener('dblclick', alternativeDoubleSelectListItem);
  document.getElementById('lista-tarefas').appendChild(item);
  document.getElementById('lista-tarefas').appendChild(secondaryItem);
  document.getElementById('texto-tarefa').value = '';
  alternativeSaveList();
}

function alternativeMountList() {
  if (localStorage.ol) {
    const string = localStorage.ol.split(',');
    for (item = 0; item < string.length; item += 3) {
      const itemList = document.createElement('li');
      const hr = document.createElement('hr');
      itemList.innerText = string[item];
      itemList.classList.add(string[item + 1], string[item + 2]);
      itemList.addEventListener('click', alternativeSelectListItem);
      itemList.addEventListener('dblclick', alternativeDoubleSelectListItem);
      document.getElementById('lista-tarefas').appendChild(itemList);
      document.getElementById('lista-tarefas').appendChild(hr);
    }
  }
}

function alternativeSelectListItem(event) {
  const local = localStorage.ol.split(',');
  for (let item = 0; item < local.length; item += 3) {
    if (local[item] === event.target.innerText) {
      if (local[item + 1] === 'not-selected') {
        local[item + 1] = 'selected';
      }
      if (local[item + 2] === 'not-selected') {
        local[item + 2] = 'selected';
      }
    } else {
      if (local[item + 1] === 'selected') {
        local[item + 1] = 'not-selected';
      }
      if (local[item + 2] === 'selected') {
        local[item + 2] = 'not-selected';
      }
    }
  }
  if (document.getElementsByClassName('selected')[0]) {
    document.getElementsByClassName('selected')[0].classList.add('not-selected');
    document.getElementsByClassName('selected')[0].classList.remove('selected');
  }
  if (event.target.classList.contains('not-selected')) {
    event.target.classList.add('selected');
    event.target.classList.remove('not-selected');
  }
  localStorage.setItem('ol', local);
}

function alternativeDoubleSelectListItem(event) {
  const local = localStorage.ol.split(',');
  for (let item = 0; item < local.length; item += 3) {
    if (local[item] === event.target.innerText) {
      if (local[item + 1] === 'completed') {
        local[item + 1] = 'not-completed';
        break;
      }
      if (local[item + 2] === 'completed') {
        local[item + 2] = 'not-completed';
        break;
      }
      if (local[item + 1] === 'not-completed') {
        local[item + 1] = 'completed';
        break;
      }
      if (local[item + 2] === 'not-completed') {
        local[item + 2] = 'completed';
        break;
      }
    }
  }
  if (event.target.classList.contains('not-completed')) {
    event.target.classList.add('completed');
    event.target.classList.remove('not-completed');
  } else {
    event.target.classList.add('not-completed');
    event.target.classList.remove('completed');
  }
  localStorage.setItem('ol', local);
}

function alternativeClearSelected() {
  if (localStorage.ol !== undefined && localStorage.ol.split(',').includes(document.querySelector('.selected').innerText)) {
    const arrayP = localStorage.ol.split(',');
    const index = localStorage.ol.split(',').indexOf(document.querySelector('.selected').innerText);
    arrayP.splice(index, 3);
    localStorage.ol = arrayP;
  }
  if (document.getElementsByTagName('li').length !== 0) {
    document.getElementById('lista-tarefas').removeChild(document.querySelector('.selected').nextSibling);
    document.getElementById('lista-tarefas').removeChild(document.querySelector('.selected'));
  }
  if (!localStorage.ol) {
    localStorage.clear();
  }
}

function alternativeClearCompleted() {
  if (localStorage.ol !== undefined && document.querySelectorAll('.completed').length !== 0) {
    const arrayP = localStorage.ol.split(',');
    for (let item = 0; item < document.querySelectorAll('.completed').length; item += 1) {
      const index = localStorage.ol.split(',').indexOf(document.querySelectorAll('.completed')[item].innerText);
      arrayP.splice(index, 3);
      localStorage.ol = arrayP;
    }
  }
  while (document.querySelectorAll('.completed').length !== 0) {
    document.getElementById('lista-tarefas').removeChild(document.querySelectorAll('.completed')[0].nextSibling);
    document.getElementById('lista-tarefas').removeChild(document.querySelectorAll('.completed')[0]);
  }
  if (!localStorage.ol) {
    localStorage.clear();
  }
}

function clearList() {
  while (document.getElementById('lista-tarefas').children.length !== 0) {
    document.getElementById('lista-tarefas').removeChild(document.getElementById('lista-tarefas').children[0]);
  }
  localStorage.clear();
}

function moveUp() {
  if (document.getElementsByClassName('selected')[0] !== undefined) {
    const selectedElement = document.getElementsByClassName('selected')[0];
    if (selectedElement.previousElementSibling) {
      const hr_before = selectedElement.previousElementSibling;
      const li_before = hr_before.previousElementSibling;
      const li = document.createElement('li');
      const hr = document.createElement('hr');
      li.classList.add(selectedElement.classList[0],
        selectedElement.classList[1]);
      li.innerHTML = selectedElement.innerText;
      li.addEventListener('click', alternativeSelectListItem);
      li.addEventListener('dblclick', alternativeDoubleSelectListItem);
      document.getElementById('lista-tarefas').insertBefore(hr, li_before);
      document.getElementById('lista-tarefas').insertBefore(li, hr);
      document.getElementById('lista-tarefas').removeChild(selectedElement.nextElementSibling);
      document.getElementById('lista-tarefas').removeChild(selectedElement);
    }
  }
  alternativeSaveList();
}

function moveDown() {
  if (document.getElementsByClassName('selected')[0] !== undefined) {
    const selectedElement = document.getElementsByClassName('selected')[0];
    if (selectedElement.nextElementSibling.nextElementSibling) {
      const hr_after = selectedElement.nextElementSibling;
      const li_after = hr_after.nextElementSibling;
      const li = document.createElement('li');
      const hr = document.createElement('hr');
      li.classList.add(li_after.classList[0],
        li_after.classList[1]);
      li.innerHTML = li_after.innerText;
      li.addEventListener('click', alternativeSelectListItem);
      li.addEventListener('dblclick', alternativeDoubleSelectListItem);
      document.getElementById('lista-tarefas').insertBefore(li, selectedElement);
      document.getElementById('lista-tarefas').insertBefore(hr, selectedElement);
      document.getElementById('lista-tarefas').removeChild(li_after.nextElementSibling);
      document.getElementById('lista-tarefas').removeChild(li_after);
    } 
  }
  alternativeSaveList();
}

window.onload = function () {
  alternativeMountList();
  document.getElementById('criar-tarefa').addEventListener('click', alternativeCreateListItem);
  document.getElementById('apaga-tudo').addEventListener('click', clearList);
  document.getElementById('remover-finalizados').addEventListener('click', alternativeClearCompleted);
  document.getElementById('remover-selecionado').addEventListener('click', alternativeClearSelected);
  document.getElementById('salvar-tarefas').addEventListener('click', alternativeSaveList);
  document.getElementById('mover-cima').addEventListener('click', moveUp);
  document.getElementById('mover-baixo').addEventListener('click', moveDown);
};
