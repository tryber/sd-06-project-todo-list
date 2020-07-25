const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
let taskInput = '';

buttonCreateTask.addEventListener('click', function () {
  taskInput = document.getElementById('texto-tarefa').value;
  if (taskInput !== '') {
    const newLine = document.createElement('li');
    newLine.innerHTML = taskInput;
    taskList.appendChild(newLine);
  } else {
    alert('Invalid entry!');
  }
});

taskList.addEventListener('click', function (event) {
  if (event.target && event.target.matches('li')) {
    event.target.style.backgroundColor = 'rgb(128,128,128';
  }
});
