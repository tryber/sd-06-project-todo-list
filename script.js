const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonClearTaskList = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const buttonSaveTaskList = document.getElementById('salvar-tarefas');
let taskInput = '';
let isTaskCompleted = false;

buttonCreateTask.addEventListener('click', function () {
  taskInput = document.getElementById('texto-tarefa').value;
  if (taskInput !== '') {
    const newLine = document.createElement('li');
    newLine.innerHTML = taskInput;
    newLine.className = 'none';
    taskList.appendChild(newLine);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Invalid entry!');
  }
});

taskList.addEventListener('click', function (event) {
  const listItem = document.getElementsByTagName('li');
  event.target.style.backgroundColor = 'rgb(128,128,128)';
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
    event.target.className = 'none';
    isTaskCompleted = false;
  }
});

buttonClearTaskList.addEventListener('click', function () {
  const lines = document.getElementsByTagName('li');
  for (let i = 0; i < lines.length; i += 0) {
    lines[i].remove();
  }
});

buttonRemoveCompleted.addEventListener('click', function () {
  const list = document.getElementsByTagName('li');
  for (let item = 0; item < list.length; item += 1) {
    if (list[item].className === 'completed') {
      list[item].remove();
    }
  }
});

buttonSaveTaskList.addEventListener('click', function () {
  localStorage.clear();
  const list = document.getElementsByTagName('li');
  for (let item = 0; item < list.length; item += 1) {
    localStorage.setItem(item, list[item].innerHTML);
    localStorage.setItem(list[item].innerText+'-class', list[item].className);
  }
});

function loadList() {
  for (let i = 0; i < (localStorage.length / 2); i += 1) {
    const localLine = document.createElement('li');
    localLine.innerText = localStorage.getItem(i);
    localLine.className = localStorage.getItem(localLine.innerText+'-class');
    taskList.appendChild(localLine);
    console.log(localLine);
  }
}

window.onload = loadList();
