const inputText = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btnCriar = document.getElementById('criar-tarefa');
const btnApagarTudo = document.getElementById('apaga-tudo');
const btnRemoveSelecionado = document.getElementById('remover-selecionado');
const btnRemoveFinalizados = document.getElementById('remover-finalizados');
const btnSalvarLista = document.getElementById('salvar-tarefas');
const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');

if (localStorage.ListaTarefas !== undefined) {
  document.getElementById('lista-tarefas').innerHTML = localStorage.ListaTarefas;
}

btnCriar.addEventListener('click', function () {
  const elementoLista = document.createElement('li');
  list.appendChild(elementoLista);
  elementoLista.innerText = inputText.value;
  inputText.value = '';
});

list.addEventListener('click', function (event) {
  const li = event.target;
  for (let i = 0; i < list.childNodes.length; i += 1) {
    if (list.childNodes[i] !== li) {
      list.childNodes[i].style.backgroundColor = 'white';
    }
  }
  if (li.style.backgroundColor === 'rgb(128, 128, 128)') {
    li.style.backgroundColor = 'white';
  } else {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

list.addEventListener('dblclick', function (event) {
  const li = event.target;
  if (li.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
    li.style.textDecoration = 'none';
    li.classList.remove('completed');
  } else {
    li.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    li.className += 'completed';
  }
});

btnApagarTudo.addEventListener('click', function () {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

btnRemoveSelecionado.addEventListener('click', function () {
  for (let i = 0; i < list.childNodes.length; i += 1) {
    if (list.childNodes[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      list.removeChild(list.childNodes[i]);
    }
  }
});

btnRemoveFinalizados.addEventListener('click', function () {
  for (let i = (list.childNodes.length - 1); i >= 0; i -= 1) {
    if (list.childNodes[i].classList.contains('completed')) {
      list.removeChild(list.childNodes[i]);
    }
  }
});

btnSalvarLista.addEventListener('click', function () {
  const listaSalva = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('ListaTarefas', listaSalva);
});

btnUp.addEventListener('click', () => {
  const lista = list.childNodes;
  for (let i = 1; i < lista.length; i += 1) {
    if (lista[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      list.insertBefore(lista[i],lista[i-1]);
    }
  }
});

btnDown.addEventListener('click', () => {
  const lista = list.childNodes;
  for (let i = 0; i < lista.length - 1; i += 1) {
    if (lista[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      list.insertBefore(lista[i],lista[i+2]);
      break;
    }
  }
});
