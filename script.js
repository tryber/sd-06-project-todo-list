// Variáveis //
const createButton = document.getElementById('criar-tarefa');
const listCreate = document.getElementById('lista-tarefas');
const textCreate = document.getElementById('texto-tarefa');
const span = document.getElementsByTagName('span');

// Funções e Eventos //
createButton.addEventListener('click', function () {
  const listItem = textCreate.value;
  const item = document.createElement('li');
  item.innerText = listItem;
  item.className = 'work';
  if (listItem === '') {
    span.innerText = 'Caixa em branco, por favor digite um texto';
  } else {
    listCreate.appendChild(item);
    textCreate.value = '';
  }
});

listCreate.addEventListener('click', function (e) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  e.target.className += ' selected';
});

listCreate.addEventListener('dblclick', function (e){
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.className += ' completed';
  }
});
