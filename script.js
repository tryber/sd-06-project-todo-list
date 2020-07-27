function createTask() {
  const olElement = document.getElementById('lista-tarefas');
  const liElement = document.createElement('li');
  const task = document.getElementById('texto-tarefa').value;
  liElement.innerHTML = task;
  olElement.appendChild(liElement);
  document.getElementById('texto-tarefa').value = '';
}

const createTaskButton = document.getElementById('criar-tarefa');
createTaskButton.addEventListener('click', createTask);

function removeAllTasks() {
  const liElements = document.getElementsByTagName('li');

  for (let i = liElements.length - 1; i >= 0; i -= 1) {
    liElements[i].remove();
  }
}

const removeAllTasksButton = document.getElementById('apaga-tudo');
removeAllTasksButton.addEventListener('click', removeAllTasks);
