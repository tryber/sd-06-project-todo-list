const inputElement = document.querySelector('#texto-tarefa');
const elementOl = document.querySelector('#lista-tarefas');
const createButton = document.querySelector('#criar-tarefa');
const deleteAllButton = document.querySelector('#apaga-tudo');
const deleteCompletedButton = document.querySelector('#remover-finalizados');
const deleteSelectedButton = document.querySelector('#remover-selecionado');
const saveTasksButton = document.querySelector('#salvar-tarefas');

function createElementLiAndAppendToElementOl(orderedList, value) {
  const elementLi = document.createElement('li');
  elementLi.innerText = value;
  orderedList.appendChild(elementLi);
}

function updateElements(taskList) {
  if (taskList.length >= 1) {
    for (let item = 0; item < taskList.length; item += 1) {
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
  const taskList = tasks.map((task) => task.innerText);
  localStorage.setItem('taskList', JSON.stringify(taskList));
});
