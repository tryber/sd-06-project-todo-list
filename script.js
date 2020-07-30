const tarefa = document.querySelector('#texto-tarefa');
const tarefaBtn = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const listItens = document.getElementsByTagName('li');
const removeBtn = document.querySelector('#apaga-tudo');
const removeComplete = document.querySelector('#remover-finalizados');
const save = document.querySelector('#salvar-tarefas');
const btnUp = document.querySelector('#mover-cima');
const btnDown = document.querySelector('#mover-baixo');
const removeSelected = document.querySelector('#remover-selecionado');

window.onload = function () {
  list.innerHTML = localStorage.getItem('list');
};

tarefaBtn.addEventListener('click', function () {
  const element = document.createElement('li');
  element.innerText = tarefa.value;
  list.appendChild(element);
  tarefa.value = '';
});

list.addEventListener('click', function (event) {
  for (let i = 0; i < listItens.length; i += 1) {
    if (listItens[i].classList.contains('selected') === true) {
      listItens[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
  if (list.classList.contains('selected') === true) {
    list.classList.remove('selected');
  }
});

list.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
  if (list.classList.contains('completed') === true) {
    list.classList.remove('completed');
  }
});

removeBtn.addEventListener('click', function () {
  list.innerHTML = '';
});

removeComplete.addEventListener('click', function () {
  for (let i = 0; i < listItens.length; i += 1) {
    for (let j = 0; j < listItens.length; j += 1) {
      if (listItens[i] !== undefined && listItens[i].classList.contains('completed') === true) {
        list.removeChild(listItens[i]);
      }
    }
  }
});

save.addEventListener('click', function () {
  if (localStorage.getItem('list') !== null) {
    window.localStorage.clear();
  }
  window.localStorage.setItem('list', list.innerHTML);
});

btnUp.addEventListener('click', function () {
  for (let i = 0; i < listItens.length; i += 1) {
    if (listItens[i].classList.contains('selected') === true) {
      if (i === 0) {
        break;
      }
      list.insertBefore(listItens[i], list.childNodes[i - 1]);
    }
  }
});

btnDown.addEventListener('click', function () {
  for (let i = listItens.length - 2; i >= 0; i -= 1) {
    if (listItens[i].classList.contains('selected') === true) {
      list.insertBefore(list.children[i + 1], list.children[i]);
    }
  }
});

removeSelected.addEventListener('click', function () {
  for (let i = 0; i < listItens.length; i += 1) {
    if (listItens[i].classList.contains('selected') === true) {
      list.removeChild(listItens[i]);
    }
  }
});
