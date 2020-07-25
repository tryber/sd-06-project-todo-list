window.onload = function () {
  function createNewTask() {
    const newTask = document.createElement('li');
    newTask.innerHTML = document.querySelector('#texto-tarefa').value;
    document.querySelector('#lista-tarefas').appendChild(newTask);
    document.querySelector('#texto-tarefa').value = '';
    newTask.addEventListener('click', function () {
      newTask.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }

  const createTaskButton = document.querySelector('#criar-tarefa');
  createTaskButton.addEventListener('click', createNewTask);
};
