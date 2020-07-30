const btnAddTasks = document.querySelector('#criar-tarefa');
const taskText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Cria a lista de tarefas ao clicar;
btnAddTasks.addEventListener('click', generateList);
function generateList() {
  const taskItem = document.createElement('li');
  taskList.appendChild(taskItem);
  taskItem.innerHTML = taskText.value;
  taskText.value = '';
}
