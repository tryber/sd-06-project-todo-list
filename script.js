const btnAddTasks = document.querySelector('#criar-tarefa');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnRemoveDone = document.querySelector('#remover-finalizados');
const taskText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
// const btnUpTask = document.querySelector('#mover-cima');
// const btnDownTask = document.querySelector('#mover-baixo');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnRemoveSelect = document.querySelector('#remover-selecionado');

// Cria a lista de tarefas ao clicar;
function generateList() {
  const taskItem = document.createElement('li');
  taskList.appendChild(taskItem);
  taskItem.className = 'task';
  taskItem.innerHTML = taskText.value;
  taskText.value = '';
}

// Seleciona items da lista de tarefas;
function selectTask(event) {
  const currentTaskItem = event.target;
  const selectItem = document.querySelector('.selected');
  if (selectItem !== null) {
    selectItem.classList.remove('selected');
  }
  currentTaskItem.classList.add('selected');
}

// Remove item selecionado;
function removeSelectTask() {
  const selectItem = document.querySelector('.selected');
  selectItem.remove();
}

// Risca as tarefas já finalizadas;
function completeTasks(event) {
  const completeTask = event.target;
  completeTask.classList.toggle('completed');
}

// Apaga todas as tarefas registradas;
function cleanAllTasks() {
  const allTask = document.querySelectorAll('.task');
  for (let index = 0; index < allTask.length; index += 1) {
    allTask[index].remove();
  }
}

// Remove apenas os itens completados;
function removeTasksDone() {
  const tasksDone = document.querySelectorAll('.completed');
  for (let index = 0; index < tasksDone.length; index += 1) {
    tasksDone[index].remove();
  }
}

function saveTasks() {
  localStorage.clear();
  localStorage.setItem('tasklist-save', taskList.innerHTML);
}

function rescueTasks() {
  const lastTasks = localStorage.getItem('tasklist-save');
  taskList.innerHTML = lastTasks;
}

// function moveUp() {
//   const selectItem = document.querySelector('.selected');
//   console.log(selectItem.childNodes);
// }

// btnUpTask.addEventListener('click', moveUp);

window.onload = function () {
  btnAddTasks.addEventListener('click', generateList);
  taskList.addEventListener('click', selectTask);
  btnRemoveSelect.addEventListener('click', removeSelectTask);
  taskList.addEventListener('dblclick', completeTasks);
  btnClearAll.addEventListener('click', cleanAllTasks);
  btnRemoveDone.addEventListener('click', removeTasksDone);
  btnSaveTasks.addEventListener('click', saveTasks);
  rescueTasks();
};
