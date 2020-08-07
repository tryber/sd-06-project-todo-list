const itemInput = document.querySelector('#texto-tarefa');

const listOl = document.querySelector('#lista-tarefas');

function addBackLi() {
  const elemenstLi = document.querySelectorAll('li');
  let returLi = 0;
  for (let i = 0; i < elemenstLi.length; i += 1) {
    if (!elemenstLi[i].classList.contains('liBackground')) {
      returLi += 1;
    }
  }
  if (returLi === elemenstLi.length) {
    const elementLiNow = event.target;
    elementLiNow.classList.add('liBackground');
  }
}

function changeBackLi() {
  const elementLiBefore = document.querySelector('.liBackground');
  const elementLiNow = event.target;
  elementLiBefore.classList.remove('liBackground');
  elementLiNow.classList.add('liBackground');
}

function addEventDouble(element) {
  element.addEventListener('dblclick', function () {
    if (!element.classList.contains('completed')) {
      element.classList.add('completed');
    } else {
      element.classList.remove('completed');
    }
  });
}

function insertItemList(entradaInput) {
  if (entradaInput.value === '') {
    alert('campo não pode ficar em branco');
  } else {
    const elementLi = document.createElement('li');
    elementLi.innerText = entradaInput.value;
    listOl.appendChild(elementLi);
    entradaInput.value = '';
    elementLi.addEventListener('click', function () {
      addBackLi();
      changeBackLi();
    });
    addEventDouble(elementLi);
  }
}

function buttonIsertEvent() {
  const insertButton = document.querySelector('#criar-tarefa');
  insertButton.addEventListener('click', function () {
    insertItemList(itemInput);
    itemInput.addEventListener('input', function () {
    });
  });
}
buttonIsertEvent();

function buttonClearEvent() {
  const cleartButton = document.querySelector('#apaga-tudo');
  cleartButton.addEventListener('click', function () {
    const elemenstLi = document.querySelectorAll('li');
    let resposta = false;
    if (elemenstLi.length !== 0) {
      for (let i = 0; i < elemenstLi.length; i += 1) {
        listOl.lastChild.remove();
        resposta = true;
      }
      if (resposta === true) {
        alert('lista deletada com Sucesso');
      }
    } else {
      alert('lista Vazia');
    }
  });
}
buttonClearEvent();
  
function removeItemFinalizado() {
  const removeButton = document.querySelector('#remover-finalizados');
  removeButton.addEventListener('click', function () {
    let resposta = false;
    const elemenstLi = document.querySelectorAll('li');
    if (elemenstLi.length !== 0) {
      for (let i = 0; i < elemenstLi.length; i += 1) {
        if (elemenstLi[i].classList.contains('completed')) {
          listOl.removeChild(elemenstLi[i]);
          resposta = true;
          alert('Itens/item Finalizado com sucesso');
        }
      }
      if (resposta === false) {
        alert('Nenhum item Finalizado');
      }
    } else {
      alert('lista Vazia');
    }
  });
}
removeItemFinalizado();

function upItemList() {
  const upButton = document.querySelector('#mover-cima');
  upButton.addEventListener('click', function () {
    const elemenstLi = document.querySelectorAll('li');
    for (let i = 0; i < elemenstLi.length; i += 1) {
      if (elemenstLi[i].classList.contains('liBackground')) {
        if ((i - 1) >= 0) {
          const valorPosition = elemenstLi[i - 1].innerText;
          if (elemenstLi[i].classList.contains('completed')) {
            elemenstLi[i - 1].classList.add('completed');
            elemenstLi[i].classList.remove('completed');
          }
          elemenstLi[i - 1].innerText = elemenstLi[i].innerText;
          elemenstLi[i - 1].classList.add('liBackground');
          elemenstLi[i].innerText = valorPosition;
          elemenstLi[i].classList.remove('liBackground');
        } else {
          alert('topo da lista');
        }
      }
    }
  });
}
upItemList();

function downItemList() {
  const downButton = document.querySelector('#mover-baixo');
  downButton.addEventListener('click', function () {
    const elemenstLi = document.querySelectorAll('li');
    for (let i = elemenstLi.length - 1; i >= 0; i -= 1) {
      if (elemenstLi[i].classList.contains('liBackground')) {
        if ((i + 1) < elemenstLi.length) {
          const valorPosition = elemenstLi[i + 1].innerText;
          if (elemenstLi[i].classList.contains('completed')) {
            elemenstLi[i + 1].classList.add('completed');
            elemenstLi[i].classList.remove('completed');
          }
          elemenstLi[i + 1].innerText = elemenstLi[i].innerText;
          elemenstLi[i + 1].classList.add('liBackground');
          elemenstLi[i].innerText = valorPosition;
          elemenstLi[i].classList.remove('liBackground');
          break;
        } else {
          alert('fim da lista');
        }
      }
    }
  });
}
downItemList();

function deleleSelect() {
  const selectRemoveItem = document.querySelector('#remover-selecionado');
  selectRemoveItem.addEventListener('click', function () {
    const elemenstLi = document.querySelectorAll('li');
    for (let i = 0; i < elemenstLi.length; i += 1) {
      if (elemenstLi[i].classList.contains('liBackground')) {
        listOl.removeChild(elemenstLi[i]);
      }
    }
  });
}
deleleSelect();

function setLocalStorage() {
  const saveButton = document.querySelector('#salvar-tarefas');
  const listOlpreenchida = document.querySelector('#lista-tarefas');
  saveButton.addEventListener('click', function () {
    localStorage.setItem('itens', listOlpreenchida.innerHTML);
    alert('salvo');
  });
}
setLocalStorage();

function getLocalStorage() {
  if (localStorage.getItem('itens') !== null) {
    document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('itens');
    alert('carregado');
  }
}
getLocalStorage();
