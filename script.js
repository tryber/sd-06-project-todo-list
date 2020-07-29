window.onload = function () {

  handleNewTaskButtonClick();

  handleTaskSelection();

  handleTaskCompletion();

  handleEraseAllButton();
};

const userInput = document.querySelector('#texto-tarefa');
const newTaskButton = document.querySelector('#criar-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
const eraseAllButton = document.querySelector('#apaga-tudo');

function newTask() {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = userInput.value;
  newListItem.className = 'list-item';
  tasksList.appendChild(newListItem);
  userInput.value = '';
}

function handleNewTaskButtonClick() {
  newTaskButton.addEventListener('click', newTask);
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

function handleTaskSelection() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('list-item')) {
      selectedTask(event);
    } else {
      document.querySelector('.selected').classList.remove('selected');
    }
  });
}

function completedTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function handleTaskCompletion() {
  document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('list-item')) {
      completedTask(event);
    }
  });
}

function eraseAll() {
  tasksList.innerHTML = null;
}

function handleEraseAllButton() {
  eraseAllButton.addEventListener('click', eraseAll);
}

function eraseCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
}
