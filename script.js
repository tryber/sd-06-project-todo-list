window.onload = function () {
  const userInput = document.querySelector('#texto-tarefa');
  const newTaskButton = document.querySelector('#criar-tarefa');
  const tasksList = document.querySelector('#lista-tarefas');

  function newTask() {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = userInput.value;
    tasksList.appendChild(newListItem);
    userInput.value = '';
  }
    
  newTaskButton.addEventListener('click', newTask);
};
