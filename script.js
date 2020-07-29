window.onload = function () {
  const userInput = document.querySelector('#texto-tarefa');
  const newTaskButton = document.querySelector('#criar-tarefa');
  const tasksList = document.querySelector('#lista-tarefas');

  function newTask() {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = userInput.value;
    newListItem.className = 'list-item';
    tasksList.appendChild(newListItem);
    userInput.value = '';
  }

  function selectedTask(event) {
    const oldSelectedItem = document.querySelector('.selected');
    if (oldSelectedItem == null) {
      event.target.classList.add('selected');
    } else {
      oldSelectedItem.classList.remove('selected');
      event.target.classList.add('selected');
    }
  }

  function completedTask(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('list-item')) {
      selectedTask(event);
    }
  });

  document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('list-item')) {
      completedTask(event);
    }
  });

  newTaskButton.addEventListener('click', newTask);
};
