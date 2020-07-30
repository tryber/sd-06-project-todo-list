const tarefa = document.querySelector('#texto-tarefa');
const tarefaBtn = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const listItens = document.getElementsByTagName('li');
const removeBtn = document.querySelector('#apaga-tudo');
const removeComplete = document.querySelector('#remover-finalizados');
const save = document.querySelector('#salvar-tarefas');

window.onload = function () {
  lista.innerHTML = localStorage.getItem('list');
}

tarefaBtn.addEventListener('click', function () {
  const element = document.createElement('li');
  element.innerText = tarefa.value;
  lista.appendChild(element);
  tarefa.value = '';
});

lista.addEventListener('click', function (event) {
  for (let i = 0; i < listItens.length; i += 1) {
    if (listItens[i].classList.contains('selected') === true) {
      listItens[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
  if (lista.classList.contains('selected') === true) {
    lista.classList.remove('selected');
  }
});

lista.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
  if (lista.classList.contains('completed') === true) {
    lista.classList.remove('completed');
  }
});

removeBtn.addEventListener('click', function () {
  lista.innerHTML = '';
});

removeComplete.addEventListener('click', function () {
  for (let i = 0; i < listItens.length; i += 1) {
    for (let j = 0; j < listItens.length; j += 1) {
      if (listItens[i] !== undefined && listItens[i].classList.contains('completed') === true) {
        lista.removeChild(listItens[i]);
      }
    }
  }
});

save.addEventListener('click', function () {
  if (localStorage.getItem('list') !== null) {
    window.localStorage.clear();
  }
  window.localStorage.setItem('list', lista.innerHTML);
});
