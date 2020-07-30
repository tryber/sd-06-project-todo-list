// variaveis
const buttonCreate = document.querySelector('#criar-tarefa');
const createText = document.querySelector('#texto-tarefa');
const createList = document.getElementById('lista-tarefas');

// functions
  // cria itens da lista
function createLi() {
  const itemList = createText.value;
  const item = document.createElement('li');
  item.innerText = itemList;
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

// const selected = document.querySelector('li');

function changeSelected(select) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  select.className += ' selected';
}

let itemSelected = document.querySelectorAll('li');
createList.addEventListener('click', function (e) {
  changeSelected(e.target);
  // e.target.className = 'selected';
});
