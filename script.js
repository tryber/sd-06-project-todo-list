
// Cria a lista ordenada
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
document.querySelector('.lista-tarefas').appendChild(taskList);

function generateItemList() {
  const task = document.querySelector('#texto-tarefa').value;
  const itemList = document.createElement('li');
  itemList.classList = 'lista';
  itemList.appendChild(document.createTextNode(task));
  taskList.appendChild(itemList);
  itemList.addEventListener('click', handleListItemClick);
  itemList.addEventListener('dblclick', handleListItemDoubleClick)
  itemList.addEventListener('dblclick', tiraORisco)
 // const LISTA = document.querySelector('li');
 // LISTA.classList = 'selected';
  document.querySelector('#texto-tarefa').value = '';
}

// Botão Adicionar
const buttonAdd = document.createElement('button');
buttonAdd.id = 'criar-tarefa';
const labelButton = document.createTextNode('Adicionar');
buttonAdd.appendChild(labelButton);
document.querySelector('.entrada-dados').appendChild(buttonAdd);
buttonAdd.addEventListener('click', generateItemList);

function handleListItemClick(event){
  clearItemListSelecions();
  let selectedListItem = event.target;
  selectedListItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

function handleListItemDoubleClick(event) {
  let selectedListItem = event.target;
  if (selectedListItem.classList == 'lista') {
    selectedListItem.classList = ('completed')
    selectedListItem.style.textDecoration = 'line-through'
  } else {
    selectedListItem.classList = ('lista')
    selectedListItem.style.textDecoration = 'none'
  }
}

function tiraORisco(event) {
  let selectedListItem = event.target;
  selectedListItem.textDecoration ='none'
}


function clearItemListSelecions() {
 /* let itemList = document.querySelectorAll('li')
    for (index = 0; index <= itemList.length; index ++) {
      let list = itemList[index]
      list.style.backgroundColor = 'green'
    }
  
  for (let index in itemList) {
    let list = itemList[index];
    list.style.backgroundColor = 'green'
    console.log(list)
  }*/
}