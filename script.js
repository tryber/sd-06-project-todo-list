const btnAddTasks = document.querySelector('#criar-tarefa');
const taskText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Cria a lista de tarefas ao clicar;
function generateList() {
  const taskItem = document.createElement('li');
  taskList.appendChild(taskItem);
  taskItem.innerHTML = taskText.value;
  taskText.value = '';
}
btnAddTasks.addEventListener('click', generateList);

// Seleciona items da lista de tarefas;
taskList.addEventListener('click', function (event) {
  const currentTaskItem = event.target;
  const selectItem = document.querySelector('.selected');
  if (selectItem !== null) {
    selectItem.classList.remove('selected');
  }
  currentTaskItem.classList.add('selected');  
})

// Risca as tarefas já finalizadas;
taskList.addEventListener('dblclick', function (event) {
  const completeTask = event.target;
  completeTask.classList.toggle('completed');
})
