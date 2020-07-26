// declarando as variáveis e os botões
const createTaskButton = document.querySelector('#criar-tarefa');
const textInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');


function createNewTask() {
  const newTask = document.createElement('li');
  newTask.innerHTML = textInput.value;
  taskList.appendChild(newTask);
  textInput.value = '';
}
createTaskButton.addEventListener('click', createNewTask);

function selectedTask() {
  const taskSelected = event.target;
  const allTasks = document.querySelectorAll('li');
  for (let i = 0; i < allTasks.length; i += 1) {
    if (allTasks[i].classList.contains('selectedTask')) {
      allTasks[i].classList.remove('selectedTask');
    }
  }
  taskSelected.classList.add('selectedTask');
}
taskList.addEventListener('click', selectedTask);

function scrachTask() {
  const doubleClickedTask = event.target;
  if (doubleClickedTask.classList.contains('completed')) {
    doubleClickedTask.classList.remove('completed');
  } else {
    doubleClickedTask.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', scrachTask);
