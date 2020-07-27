const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonClearTaskList = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonSaveTaskList = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
let taskInput = '';
let isTaskCompleted = false;

buttonCreateTask.addEventListener('click', function () {
  taskInput = document.getElementById('texto-tarefa').value;
  if (taskInput !== '') {
    const newLine = document.createElement('li');
    newLine.innerHTML = taskInput;
    newLine.className = 'none';
    newLine.id = 'none';
    taskList.appendChild(newLine);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Invalid entry!');
  }
});

taskList.addEventListener('click', function (event) {
  const listItem = document.getElementsByTagName('li');
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.id = 'isSelected';
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i] !== event.target) {
      listItem[i].style.backgroundColor = 'transparent';
      listItem[i].id = 'none';
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
  for (let times = 0; times <= list.length; times += 1) {
    for (let item = 0; item < list.length; item += 1) {
      if (list[item].className === 'completed') {
        list[item].remove();
        item -= 1;
      }
    }
  }
});

buttonSaveTaskList.addEventListener('click', function () {
  localStorage.clear();
  const list = document.getElementsByTagName('li');
  for (let item = 0; item < list.length; item += 1) {
    localStorage.setItem(item, list[item].innerHTML);
    localStorage.setItem(list[item].innerText, list[item].className);
  }
});

moveUpButton.addEventListener('click', function () {
  const tasks = document.getElementsByTagName('li');
  for (let i = 1; i < tasks.length; i += 1) {
    if (tasks[i].id === 'isSelected') {
      const aux = tasks[i].innerText;
      const auxClass = tasks[i].className;
      tasks[i].innerText = tasks[i - 1].innerText;
      tasks[i].className = tasks[i - 1].className;
      tasks[i - 1].innerText = aux;
      tasks[i - 1].className = auxClass;
      tasks[i - 1].style.backgroundColor = 'rgb(128,128,128)';
      tasks[i - 1].id = 'isSelected';
      tasks[i].style.backgroundColor = 'transparent';
      tasks[i].id = 'none';
    }
  }
});

moveDownButton.addEventListener('click', function () {
  const tasks = document.getElementsByTagName('li');
  for (let i = tasks.length - 2; i >= 0; i -= 1) {
    if (tasks[i].id === 'isSelected') {
      const aux = tasks[i].innerText;
      const auxClass = tasks[i].className;
      tasks[i].innerText = tasks[i + 1].innerText;
      tasks[i].className = tasks[i + 1].className;
      tasks[i + 1].innerText = aux;
      tasks[i + 1].className = auxClass;
      tasks[i + 1].style.backgroundColor = 'rgb(128,128,128)';
      tasks[i + 1].id = 'isSelected';
      tasks[i].style.backgroundColor = 'transparent';
      tasks[i].id = 'none';
    }
  }
});

buttonRemoveSelected.addEventListener('click', function () {
  document.getElementById('isSelected').remove();
});

function loadList() {
  for (let i = 0; i < (localStorage.length / 2); i += 1) {
    const localLine = document.createElement('li');
    localLine.innerText = localStorage.getItem(i);
    localLine.className = localStorage.getItem(localLine.innerText);
    taskList.appendChild(localLine);
  }
}

window.onload = loadList();
