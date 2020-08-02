const btnAddTasks = document.querySelector('#criar-tarefa');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnRemoveDone = document.querySelector('#remover-finalizados');
const taskText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const btnUpTask = document.querySelector('#mover-cima');
const btnDownTask = document.querySelector('#mover-baixo');
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
  const allTasks = document.querySelectorAll('.task');
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].remove();
  }
}

// Remove apenas os itens completados;
function removeTasksDone() {
  const tasksDone = document.querySelectorAll('.completed');
  for (let index = 0; index < tasksDone.length; index += 1) {
    tasksDone[index].remove();
  }
}

// Limpa e salva a lista desejada;
function saveTasks() {
  localStorage.clear();
  localStorage.setItem('tasklist-save', taskList.innerHTML);
}

// Recupera as tarefas salvas;
function rescueTasks() {
  const lastTasks = localStorage.getItem('tasklist-save');
  taskList.innerHTML = lastTasks;
}

// Sobe a posição da tarefa;
function moveUp() {
  const allTasks = document.querySelectorAll('.task');
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index].classList.contains('selected') && index > 0) {
      taskList.insertBefore(allTasks[index], allTasks[index].previousSibling);
    }
  }
}

// Desce a posição da tarefa;
function moveDown() {
  const allTasks = document.querySelectorAll('.task');
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index].classList.contains('selected') && index < allTasks.length - 1) {
      taskList.insertBefore(allTasks[index], allTasks[index].nextSibling.nextSibling);
    }
  }
}

window.onload = function () {
  btnAddTasks.addEventListener('click', generateList);
  taskList.addEventListener('click', selectTask);
  btnRemoveSelect.addEventListener('click', removeSelectTask);
  taskList.addEventListener('dblclick', completeTasks);
  btnClearAll.addEventListener('click', cleanAllTasks);
  btnRemoveDone.addEventListener('click', removeTasksDone);
  btnSaveTasks.addEventListener('click', saveTasks);
  btnUpTask.addEventListener('click', moveUp);
  btnDownTask.addEventListener('click', moveDown);
  rescueTasks();
};
