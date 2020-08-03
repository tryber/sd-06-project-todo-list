
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
  itemList.addEventListener('click', selectedListItem)
  document.querySelector('#texto-tarefa').value = '';
}

// Botão Adicionar
const buttonAdd = document.createElement('button');
buttonAdd.id = 'criar-tarefa';
const labelButton = document.createTextNode('Adicionar');
buttonAdd.appendChild(labelButton);
document.querySelector('.entrada-dados').appendChild(buttonAdd);
buttonAdd.addEventListener('click', generateItemList);





function selectedListItem() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    document.querySelectorAll('li')[i].addEventListener('click' , function() {
      for (let j = 0; j < document.querySelectorAll('li').length; j+= 1 ) {
        document.querySelectorAll('li')[j].style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
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





