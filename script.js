// variaveis
const buttonCreate = document.querySelector('#criar-tarefa');
const createText = document.querySelector('#texto-tarefa');
const createList = document.querySelector('#lista-tarefas');

// functions
  // cria itens da lista
function createLi() {
  const itemList = createText.value;
  const item = document.createElement('li');
  item.innerText = itemList;
  item.className = 'work';
  if (itemList === '') {

    const span = document.createElement('span');
    span.innerText = 'digite uma tarefa';
    span.className = 'span';
    document.querySelector('#addTarefas').appendChild(span);


  } else {

    createList.appendChild(item);
    createText.value = '';
    
  }
}

buttonCreate.addEventListener('click', createLi);
