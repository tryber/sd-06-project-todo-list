function alternativeSaveList() {
  const arrayLi = [];
  for (let item = 0; item < document.getElementsByTagName('li').length; item += 1) {
    arrayLi.push(document.getElementsByTagName('li')[item].innerText, document.getElementsByTagName('li')[item].classList[0], document.getElementsByTagName('li')[item].classList[1]);
  }
  if (arrayLi.length !== 0) {
    localStorage.setItem('ol', arrayLi);
  }
}

function alternativeMountList() {
  if (localStorage.ol !== undefined && localStorage.ol !== '') {
    for (let itens = 0; itens < localStorage.ol.split(',').length; itens += 3) {
      const listItem = document.createElement('li');
      listItem.innerText = localStorage.ol.split(',')[itens];
      if (localStorage.ol.split(',')[itens + 1] !== '') {
        listItem.classList.add(localStorage.ol.split(',')[itens + 1]);
      }
      if (localStorage.ol.split(',')[itens + 2] !== '') {
        listItem.classList.add(localStorage.ol.split(',')[itens + 2]);
      }
      document.getElementById('lista-tarefas').appendChild(listItem);
    }
  }
}

function alternativeSelectListItem(event) {
  const session = localStorage.ol.split(',');
  for (let item = 0; item < session.length; item += 3) {
    if (session[item] === event.target.innerText) {
      session[item + 1] = 'selected';
    } else {
      session[item + 1] = 'not-selected';
    }
  }
  for (let item = 0; item < document.getElementsByTagName('li').length; item += 1) {
    if (document.getElementsByTagName('li')[item].classList.contains('selected')) {
      document.getElementsByTagName('li')[item].classList.remove('selected');
    }
  }
  event.target.classList.remove('not-selected');
  event.target.classList.add('selected');
  localStorage.setItem('ol', session);
}

function alternativeCreateListItem() {
  const item = document.createElement('li');
  // const secondaryItem = document.createElement('hr');
  item.innerText = document.getElementById('texto-tarefa').value;
  item.classList.add('not-selected', 'not-completed');
  document.getElementById('lista-tarefas').appendChild(item);
  // document.getElementById('lista-tarefas').appendChild(secondaryItem);
  document.getElementById('texto-tarefa').value = '';
  alternativeSaveList();
}

function alternativeDoubleSelectListItem(event) {
  const session = localStorage.ol.split(',');
  for (let item = 0; item < session.length; item += 3) {
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
    const arrayP = localStorage.ol.split(',');
    const index = localStorage.ol.split(',').indexOf(document.querySelector('.selected').innerText);
    arrayP.splice(index, 3);
    localStorage.ol = arrayP;
  }
  if (document.getElementsByTagName('li').length !== 0) {
    document.getElementById('lista-tarefas').removeChild(document.querySelector('.selected'));
  }
  if (!localStorage.ol) {
    localStorage.clear();
  }
}

function alternativeClearCompleted() {
  const clone = [];
  for (let item = 0; item < document.querySelectorAll('.completed').length; item += 1) {
    clone.push(document.querySelectorAll('.completed')[item]);
  }
  if (localStorage.ol !== undefined) {
    for (let item = 0; item < clone.length; item += 1) {
      if (localStorage.ol.split(',').includes(clone[item].innerText)) {
        const arrayP = localStorage.ol.split(',');
        const index = localStorage.ol.split(',').indexOf(clone[item].innerText);
        arrayP.splice(index, 3);
        localStorage.ol = arrayP;
      }
    }
  }
  for (let item = 0; item < clone.length; item += 1) {
    document.getElementById('lista-tarefas').removeChild(clone[item]);
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
      const li = document.createElement('li');
      li.classList.add(selectedElement.previousElementSibling.classList[0], 
        selectedElement.previousElementSibling.classList[1]);
      li.innerHTML = selectedElement.previousElementSibling.innerText;
      selectedElement.previousElementSibling.insertAdjacentElement('afterend', li);
      document.getElementById('lista-tarefas').replaceChild(selectedElement, 
        selectedElement.previousElementSibling.previousElementSibling);
      alternativeSaveList();
    }
  }

}

function moveDown() {
  if (document.getElementsByClassName('selected')[0] !== undefined) {
    const selectedElement = document.getElementsByClassName('selected')[0];
    if (selectedElement.nextElementSibling) {
      const li = document.createElement('li');
      li.classList.add(selectedElement.nextElementSibling.classList[0],
         selectedElement.nextElementSibling.classList[1]);
      li.innerHTML = selectedElement.nextElementSibling.innerText;
      selectedElement.nextElementSibling.insertAdjacentElement('afterend', li);
      document.getElementById('lista-tarefas').replaceChild(selectedElement, 
        selectedElement.nextElementSibling.nextElementSibling);
      alternativeSaveList();
    }
  }
}

window.onload = function () {
  alternativeMountList();
  document.getElementById('criar-tarefa').addEventListener('click', alternativeCreateListItem);
  document.getElementById('lista-tarefas').addEventListener('click', alternativeSelectListItem);
  document.getElementById('lista-tarefas').addEventListener('dblclick', alternativeDoubleSelectListItem);
  document.getElementById('apaga-tudo').addEventListener('click', clearList);
  document.getElementById('remover-finalizados').addEventListener('click', alternativeClearCompleted);
  document.getElementById('remover-selecionado').addEventListener('click', alternativeClearSelected);
  document.getElementById('salvar-tarefas').addEventListener('click', alternativeSaveList);
  document.getElementById('mover-cima').addEventListener('click', moveUp);
  document.getElementById('mover-baixo').addEventListener('click', moveDown);
};
