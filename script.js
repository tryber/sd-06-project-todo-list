window.onload = function () {
  let taskInput = document.querySelector('#texto-tarefa');
  let addButton = document.querySelector('#criar-tarefa');
  let taskList = document.querySelector('#lista-tarefas');

  addButton.addEventListener('click', function () {
    let listItem = document.createElement('li');
    listItem.innerText = taskInput.value;
    taskList.appendChild(listItem);
    taskInput.value = '';
  });
};
