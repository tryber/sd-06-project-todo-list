const createTaskButton = document.querySelector('#criar-tarefas');
const inputTask = document.querySelector('#texto-tarefas');
const list = document.querySelector('#lista-tarefas');

function loadEventListeners() {
  createTaskButton.addEventListener(addTask);
}

function addTask() {
  if (inputTask.value === "") {
    alert("Adicione uma tarefa")
  }
}
