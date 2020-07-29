// Variáveis //
const createButton = document.getElementById('criar-tarefa');
const listCreate = document.getElementById('lista-tarefas');
const textCreate = document.getElementById('texto-tarefa');

// Funções e Eventos //
createButton.addEventListener('click', function () {
  let listItem = textCreate.value;
  let item = document.createElement('li');
  item.innerText = listItem;
  item.className = 'work';
  if (listItem === '') {
    
  } else {
    listCreate.appendChild(item);
    textCreate.value = '';
  }
})