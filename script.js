const olElement = document.getElementById('lista-tarefas');
const removeAllTasksButton = document.getElementById('apaga-tudo');
const createTaskButton = document.getElementById('criar-tarefa');
const removeCompletedTasksButton = document.getElementById('remover-finalizados');

function selectedTask(event) {
  const liSelectedTask = event.target;
  liSelectedTask.classList.contains('selectedTask') ? liSelectedTask.classList.remove('selectedTask') : liSelectedTask.classList.add('selectedTask');
}

function completedTask(event) {
  const liCompletedTask = event.target;
  liCompletedTask.classList.contains('completed') ? liCompletedTask.classList.remove('completed') : liCompletedTask.classList.add('completed');
}

function createTask() {
  const liElement = document.createElement('li');
  const task = document.getElementById('texto-tarefa').value;
  liElement.innerHTML = task;
  olElement.appendChild(liElement);
  document.getElementById('texto-tarefa').value = '';
}

function removeAllTasks() {
  const liElements = document.getElementsByTagName('li');

  for (let i = liElements.length - 1; i >= 0; i -= 1) {
    liElements[i].remove();
  }
}

function removeCompletedTasks() {
  const liCompleted = document.querySelectorAll('.completed');
  for (let i = liCompleted.length - 1; i >= 0; i -= 1) {
    liCompleted[i].remove();
  }
}

olElement.addEventListener('click', selectedTask);
olElement.addEventListener('dblclick', completedTask);
createTaskButton.addEventListener('click', createTask);
removeAllTasksButton.addEventListener('click', removeAllTasks);
removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);
