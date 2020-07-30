const LISTSHOWN = document.querySelector('.to-do-list');
let toDoList = [];

function appendTask() {
  let item = document.createElement('li');
  item.innerText = toDoList[toDoList.length - 1];
  LISTSHOWN.appendChild(item);
}

function resetSelectedTask() {
  let selected = document.querySelector('.selected-task');
  if (selected) {
    selected.className = 'task';
  }
}

function switchDoneUndone(task, priorClass) {
  if (priorClass === 'completed') {
    task.className = '';
  } else {
    task.className = 'completed';
  }
}

LISTSHOWN.addEventListener('click', (event) => {
  resetSelectedTask();
  event.target.className = 'selected-task';
});

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  let task = document.querySelector('.to-do-task');
  if (task.value) {
    toDoList.push(task.value);
    appendTask();
    task.value = '';
  } else {
    alert('You should type a task to add it.')
  }
});

LISTSHOWN.addEventListener('dblclick', (event) => {
  let item = event.target;
  switchDoneUndone(item, item.className);
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  let listedItems = document.querySelectorAll('li');
  listedItems.forEach(element => {
    element.remove();
  })
});
