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

taskList.addEventListener('click', function (event) {
  const taskItem = event.target;
  taskItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
})