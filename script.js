const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
let taskInput = '';

buttonCreateTask.addEventListener('click', function () {
  taskInput = document.getElementById('texto-tarefa').value;
  if (taskInput !== '') {
    const newLine = document.createElement('li');
    newLine.innerHTML = taskInput;
    taskList.appendChild(newLine);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Invalid entry!');
  }
});

taskList.addEventListener('click', function (event) {
  if (event.target && event.target.matches('li')) {
    event.target.style.backgroundColor = 'rgb(128,128,128';
    for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
      if (document.getElementsByTagName('li')[i] !== event.target) {
        document.getElementsByTagName('li')[i].style.backgroundColor = 'transparent';
      }
    }
  }
});
