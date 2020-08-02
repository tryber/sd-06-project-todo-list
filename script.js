
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
  document.querySelector('#texto-tarefa').value = '';
}

// Botão Adicionar
const buttonAdd = document.createElement('button');
buttonAdd.id = 'criar-tarefa';
const labelButton = document.createTextNode('Adicionar');
buttonAdd.appendChild(labelButton);
document.querySelector('.entrada-dados').appendChild(buttonAdd);
buttonAdd.addEventListener('click', generateItemList);
//buttonAdd.addEventListener('click' , clearItemListSelecions)


function handleListItemClick(event){
  //clearItemListSelecions();
  let atualSelectedListItem = event.target;
  let oldSelectedListItem = document.querySelector('.selected')
 // let oldSelectedListItem.classList.add('selected')
 // atualSelectedListItem.classList.remove('selected')
  atualSelectedListItem.classList.add('selected')
  oldSelectedListItem.classList.remove('selected')
  atualSelectedListItem.style.backgroundColor = 'rgb(128, 128, 128)'
  oldSelectedListItem.style.backgroundColor = ''
  
  /*
  if (atualSelectedListItem.classList.contains('selected')) {
    atualSelectedListItem.style.backgroundColor = 'rgb(128,128,128)'
  } else {
    atualSelectedListItem.style.backgroundColor = ''
  }
  */
  
 // selectedListItem.style.backgroundColor = 'rgb(128,128,128)'

  /*
  let selectedListItem = event.target;
  if (selectedListItem.style.backgroundColor == '') {
    selectedListItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
  } else {
    selectedListItem.style.backgroundColor = ''
  }
 // selectedListItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
  console.log('locomeui')
  */
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





