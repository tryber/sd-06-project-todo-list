
const boxText = document.querySelector('#texto-tarefa');
const buttonNewTask = document.querySelector('#criar-tarefa');
const buttonClearAll = document.querySelector('#apaga-tudo');
const listItem = document.getElementById('lista-tarefas');
const buttonClearChecked = document.querySelector('#remover-finalizados');
const buttonClearSelectedItems = document.querySelector('#remover-selecionado');
const buttonSaveList = document.getElementById('salvar-tarefas');

function newTask() {
  const novoItem = document.createElement('li');
  novoItem.innerHTML = boxText.value;
  localStorage.setItem(boxText.value, boxText.value);// Tentativa item bônus
  listItem.appendChild(novoItem);
  document.getElementById('texto-tarefa').value = '';
}
buttonNewTask.addEventListener('click', newTask);

function completedItem(event) {
  const selectedItem = event.target;
  if (selectedItem.classList.contains('selected')) {
    selectedItem.classList.remove('selected');
  }
  if (selectedItem.classList.contains('completed')) {
    selectedItem.classList.remove('completed');
  } else {
    selectedItem.classList.add('completed');
  }
}
listItem.addEventListener('dblclick', completedItem);

function selecionaItem(event) {
  const selectedItem = event.target;
  const taskList = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].classList.contains('selected')) {
      taskList[i].classList.remove('selected');
    }
  }
  selectedItem.classList.add('selected');
}
listItem.addEventListener('click', selecionaItem);

function clearAll() {
  document.getElementById('lista-tarefas').innerHTML = '';
  localStorage.clear();// Tentativa item bônus
}
buttonClearAll.addEventListener('click', clearAll);

function clearCheckedItems() {
  const taskList = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].classList.contains('completed')) {
      taskList[i].outerHTML = '';
    }
  }
}
buttonClearChecked.addEventListener('click', clearCheckedItems);

function clearSelectedItems() {
  const taskList = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].classList.contains('selected')) {
      taskList[i].outerHTML = '';
    }
  }
}
buttonClearSelectedItems.addEventListener('click', clearSelectedItems);

// função para salvar as tarefas no local storage
function saveTasks() {
  const todasTarefas = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('todas as tarefas', todasTarefas);
}
buttonSaveList.addEventListener('click', saveTasks);

function recoveryTasks() {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('todas as tarefas');
}

// ao carregar a página os itens salvos no local storage são recuperados
window.onload = recoveryTasks;
