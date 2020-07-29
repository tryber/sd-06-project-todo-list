window.onload = function () {
  handleNewTaskButtonClick();

  handleTaskSelection();

  handleTaskCompletion();

  handleEraseAllButton();

  handleEraseCompletedButton();
};

const userInput = document.querySelector('#texto-tarefa');
const newTaskButton = document.querySelector('#criar-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
const eraseAllButton = document.querySelector('#apaga-tudo');
const eraseCompletedButton = document.querySelector('#remover-finalizados');
const selectedClassItem = document.querySelector('.selected');

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
  const oldSelectedItem = selectedClassItem;
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
    } else if (document.selectedClassItem != null) {
      document.selectedClassItem.classList.remove('selected');
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
  tasksList.innerHTML = '';
}

function handleEraseAllButton() {
  eraseAllButton.addEventListener('click', eraseAll);
}

function eraseCompleted() {
  const listItems = document.querySelectorAll('li');
  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].classList.contains('completed')) {
      const item = listItems[i];
      tasksList.removeChild(item);
    }
  }
}

function handleEraseCompletedButton() {
  eraseCompletedButton.addEventListener('click', eraseCompleted);
}
