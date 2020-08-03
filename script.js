
// Cria a lista ordenada
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
document.querySelector('.lista-tarefas').appendChild(taskList);

function generateItemList() {
  const task = document.querySelector('#texto-tarefa').value;
  const itemList = document.createElement('li');
  itemList.classList = 'lista';
 // document.querySelector('li').classList.add('selected')
  itemList.appendChild(document.createTextNode(task));
  taskList.appendChild(itemList);
  //itemList.style.backgroundColor = 'white'
 // document.querySelector('li').classList.add('selected')
  itemList.addEventListener('click', handleListItemClick);
  itemList.addEventListener('dblclick', handleListItemDoubleClick)
 // itemList.addEventListener('click', selectedListItem)
  document.querySelector('#texto-tarefa').value = '';
}

// Botão Adicionar
const buttonAdd = document.createElement('button');
buttonAdd.id = 'criar-tarefa';
const labelButton = document.createTextNode('Adicionar');
buttonAdd.appendChild(labelButton);
document.querySelector('.entrada-dados').appendChild(buttonAdd);
buttonAdd.addEventListener('click', generateItemList);

// Botão Limpar Lista
const buttonRemove = document.createElement('button')
buttonRemove.id = 'apaga-tudo'
const labelButtonRemove = document.createTextNode('Limpar Lista');
buttonRemove.appendChild(labelButtonRemove);
document.querySelector('.entrada-dados').appendChild(buttonRemove);
buttonRemove.addEventListener('click', removeAllList)

function removeAllList () {
  let lista = document.querySelector('ol');
  let itens = lista.querySelectorAll('li');
  for(i = 0; i < itens.length; i ++) {
    lista.removeChild(itens[i])
  }
}

let buttonRemoveSelected = document.createElement('button');
buttonRemoveSelected.appendChild(document.createTextNode('Remover Item Selecionado'));
buttonRemoveSelected.id = 'remover-finalizados';
document.querySelector('.entrada-dados').appendChild(buttonRemoveSelected);
buttonRemoveSelected.addEventListener('click', removeItemSelected)

function removeItemSelected () {
  let itens = document.querySelectorAll('li');
  let lista = document.querySelector('ol');
  for(i = 0; i < itens.length; i ++) {
    if(itens[i].style.textDecoration != '' ) {
      lista.removeChild(itens[i]);
    }
  }
}

function handleListItemClick(event){
 // let atualSelectedListItem = event.target;
 // let oldSelectedListItem = document.querySelector('.selected')
 // let oldSelectedListItem.classList.add('selected')
 // atualSelectedListItem.classList.remove('selected')
 // atualSelectedListItem.classList.add('selected')
//  oldSelectedListItem.classList.remove('selected')
//  atualSelectedListItem.style.backgroundColor = 'rgb(128, 128, 128)'
 // oldSelectedListItem.style.backgroundColor = ''
  let itens = document.querySelectorAll('li');
  let lista = document.querySelector('ol');
  let selectedItem = event.target
  for(i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = 'white'
  }
    selectedItem.style.backgroundColor = 'rgb(128, 128, 128)'
}

/*
function selectedListItem() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    document.querySelectorAll('li')[i].addEventListener('click' , function() {
      for (let j = 0; j < document.querySelectorAll('li').length; j+= 1 ) {
        document.querySelectorAll('li')[j].style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    });
  }
}
*/
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






