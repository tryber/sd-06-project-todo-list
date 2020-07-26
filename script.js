const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
let taskInput = '';
let isTaskCompleted = false;

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
  const listItem = document.getElementsByTagName('li');
  event.target.style.backgroundColor = 'rgb(128,128,128';
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i] !== event.target) {
      listItem[i].style.backgroundColor = 'transparent';
    }
  }
});

taskList.addEventListener('dblclick', function (event) {
  if (!isTaskCompleted) {
    event.target.className = 'completed';
    isTaskCompleted = true;
  } else if (isTaskCompleted) {
    event.target.className = 'none'
    isTaskCompleted = false;
  }
});
