
const boxText = document.querySelector('#texto-tarefa');
const buttonNewTask = document.querySelector('#criar-tarefa');
const buttonClearAll = document.querySelector('#apaga-tudo');
const listItem = document.getElementById('lista-tarefas');
const buttonClearChecked = document.querySelector('#remover-finalizados');

function newTask() {
  const novoItem = document.createElement("li");
  novoItem.innerHTML = boxText.value;
  document.getElementById("lista-tarefas").appendChild(novoItem);
  document.getElementById('texto-tarefa').value = "";
}
buttonNewTask.addEventListener("click", newTask);

function completedItem(event){
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
listItem.addEventListener("dblclick", completedItem);

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
listItem.addEventListener('click', selecionaItem)

function clearAll() {
  document.getElementById('lista-tarefas').innerHTML = '';
}
buttonClearAll.addEventListener("click", clearAll);

function clearCheckedItems() {
  const taskList = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].classList.contains('completed')) {
      taskList[i].outerHTML = '';
    }
  }
}
buttonClearChecked.addEventListener("click", clearCheckedItems);

