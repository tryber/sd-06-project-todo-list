const createTaskButton = document.getElementById('criar-tarefa');
createTaskButton.addEventListener('click', createTask);

function createTask() {
  const olElement = document.getElementById('lista-tarefas');
  const liElement = document.createElement('li');
  const task = document.getElementById('texto-tarefa').value;
  liElement.innerHTML = task;
  olElement.appendChild(liElement);
  document.getElementById('texto-tarefa').value = '';
}
