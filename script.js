const inputElement = document.querySelector('#texto-tarefa');
const elementOl = document.querySelector('#lista-tarefas');
const createButton = document.querySelector('#criar-tarefa');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const deleteAllButton = document.querySelector('#apaga-tudo');
const deleteCompletedButton = document.querySelector('#remover-finalizados');
const deleteSelectedButton = document.querySelector('#remover-selecionado');
const saveTasksButton = document.querySelector('#salvar-tarefas');

function createElementLiAndAppendToElementOl(orderedList, value, completed = false) {
  const elementLi = document.createElement('li');
  elementLi.innerText = value;
  orderedList.appendChild(elementLi);
  if (completed) {
    elementLi.className = 'completed';
  }
}
function updateElements(taskList) {
  for (let item = 0; item < taskList.length; item += 1) {
    if (taskList[item].includes('.completed')) {
      taskList[item] = taskList[item].replace('.completed', '');
      createElementLiAndAppendToElementOl(elementOl, taskList[item], true);
    } else {
      createElementLiAndAppendToElementOl(elementOl, taskList[item]);
    }
  }
}
function loadFromStorage() {
  if (localStorage.taskList !== undefined) {
    const taskList = JSON.parse(localStorage.getItem('taskList'));
    updateElements(taskList);
  }
}
loadFromStorage();
createButton.addEventListener('click', () => {
  if (inputElement.value) {
    createElementLiAndAppendToElementOl(elementOl, inputElement.value);
    inputElement.value = '';
  }
});
deleteAllButton.addEventListener('click', () => {
  while (elementOl.firstChild) {
    elementOl.removeChild(elementOl.lastChild);
  }
});
elementOl.addEventListener('click', (event) => {
  event.preventDefault();
  const selectedTask = event.target;
  const tasks = document.getElementsByTagName('li');
  for (let item = 0; item < tasks.length; item += 1) {
    if (tasks[item].classList.contains('selected')) {
      tasks[item].classList.remove('selected');
    }
  }
  selectedTask.classList.add('selected');
});
elementOl.addEventListener('dblclick', (event) => {
  const selectedTask = event.target;
  if (selectedTask.classList.contains('completed')) {
    selectedTask.classList.remove('completed');
  } else {
    selectedTask.classList.add('completed');
  }
});
moveUpButton.addEventListener('click', () => {
  const tasks = Array.from(document.getElementsByTagName('li'));
  for (let item = 0; item < tasks.length; item += 1) {
    if (tasks[item].classList.contains('selected') && (item !== 0)) {
      tasks[item].parentNode.insertBefore(tasks[item], tasks[item - 1]);
    }
  }
});

moveDownButton.addEventListener('click', () => {
  const tasks = Array.from(document.getElementsByTagName('li'));
  for (let item = 0; item < tasks.length; item += 1) {
    if (tasks[item].classList.contains('selected') && (item !== tasks.length - 1)) {
      tasks[item].parentNode.insertBefore(tasks[item + 1], tasks[item]);
    }
  }
});

deleteCompletedButton.addEventListener('click', () => {
  const tasksCompleted = Array.from(document.querySelectorAll('.completed'));
  for (let item = 0; item < tasksCompleted.length; item += 1) {
    elementOl.removeChild(tasksCompleted[item]);
  }
});
deleteSelectedButton.addEventListener('click', () => {
  const tasksSelected = Array.from(document.querySelectorAll('.selected'));
  for (let item = 0; item < tasksSelected.length; item += 1) {
    elementOl.removeChild(tasksSelected[item]);
  }
});
saveTasksButton.addEventListener('click', () => {
  const tasks = Array.from(document.getElementsByTagName('li'));
  const taskList = tasks.map((task) => {
    if (task.classList.contains('completed')) {
      return `${task.innerText}.completed`;
    }
    return task.innerText;
  });
  localStorage.setItem('taskList', JSON.stringify(taskList));
});
