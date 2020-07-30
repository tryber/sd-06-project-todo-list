// get saved List

const ol = document.getElementById('lista-tarefas');

if (localStorage.getItem('myTasks')) {
  let myTasks = JSON.parse(localStorage.getItem('myTasks'));
  // console.log(myTasks)

  for (let task of myTasks) {
    task = document.createRange().createContextualFragment(task);
    ol.appendChild(task);
  }
}


// Add task

const addTaskInput = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');

function addTask() {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  ol.appendChild(li);
  return li;
}

function addText(li) {
  li.innerText = addTaskInput.value;
  addTaskInput.value = '';
}

function taskCreation() {
  if (addTaskInput.value === '') {
    return alert('Name a task before adding it!');
  }
  const li = addTask();
  return addText(li);
}

addTaskButton.onclick = taskCreation;

// Select element

function resetSelection() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.removeAttribute('style');
    return selectedTask.classList.remove('selected');
  }
}

function selectTask(task) {
  resetSelection();
  task.classList.add('selected');
  task.style.backgroundColor = 'rgb(128, 128, 128)';
}

function markAsCompleted(task) {
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}


function childChanges() {
  const taskList = document.querySelectorAll('li');

  for (let i = 0; i < taskList.length; i += 1) {
    const task = ol.children[i];
    task.onclick = function () {
      selectTask(this);
    };
    task.ondblclick = function () {
      markAsCompleted(this);
    };
  }
}

const options = {
  childList: true,
};
const observer = new MutationObserver(childChanges);
observer.observe(ol, options);

// Remove-all button

function removeAllTasks() {
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
}

const removeAllButton = document.getElementById('apaga-tudo');
removeAllButton.onclick = removeAllTasks;

// Remove completed

function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((completedTask) => completedTask.remove());
}

const removeCompletedTasksButton = document.getElementById('remover-finalizados');
removeCompletedTasksButton.onclick = removeCompletedTasks;

// Remove selected

function removeSelectedTask() {
  const selectedTask = document.querySelector('.selected');
  selectedTask.remove();
}

const removeSelectedTaskButton = document.getElementById('remover-selecionado');
removeSelectedTaskButton.onclick = removeSelectedTask;

// Move-up & Move-down

function moveUpTask() {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('selected') && (i !== 0)) {
      tasks[i].parentNode.insertBefore(tasks[i], tasks[i - 1]);
    }
  }
}

const moveUpButton = document.getElementById('mover-cima');
moveUpButton.onclick = moveUpTask;

function moveDownTask() {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('selected') && (i !== tasks.length - 1)) {
      tasks[i].parentNode.insertBefore(tasks[i + 1], tasks[i]);
    }
  }
}

const moveDownButton = document.getElementById('mover-baixo');
moveDownButton.onclick = moveDownTask;

// Save on localStorage

function saveList() {
  const savedTasks = document.querySelectorAll('li');
  let storage = [];

  for (task of savedTasks) {
    const li = `<li class="${task.className}" style="${task.style.cssText}">${task.innerText}</li>`;
    storage.push(li)
  }

  localStorage.setItem('myTasks',JSON.stringify(storage));
}

const saveButton = document.getElementById('salvar-tarefas');
saveButton.onclick = saveList;
