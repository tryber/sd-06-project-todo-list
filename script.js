// Botão Adicionar
const buttonAdd = document.createElement('button');
buttonAdd.id = 'criar-tarefa';
const labelButton = document.createTextNode('Adicionar');
buttonAdd.appendChild(labelButton);
document.querySelector('.entrada-dados').appendChild(buttonAdd);

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
  const LISTA = document.querySelector('li');
  LISTA.classList = 'selected';
  document.querySelector('#texto-tarefa').value = '';
}
buttonAdd.addEventListener('click', generateItemList);
