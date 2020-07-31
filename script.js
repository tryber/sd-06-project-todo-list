const LISTSHOWN = document.querySelector('#lista-tarefas');
const BTNSAVE = document.querySelector('#save-on-local-storage');
let toDoList = ['first', ];

/* let clickCount = 0;
let timeout = 350;
 */

function appendTask() {
  let item = document.createElement('li');
  item.innerText = toDoList[toDoList.length - 1];
  LISTSHOWN.appendChild(item);
  toDoList.push
}

function resetSelectedTask() {
  let selected = document.querySelector('.selected-task');
  if (selected) {
    selected.classList.remove('selected-task');
  }
}

function switchDoneUndone(task) {
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

/* function handleClicks(chosenTask) {
  clickCount += 1;
  if (clickCount == 1) {
    setTimeout(function () {
      if (clickCount == 1) {
        resetSelectedTask(chosenTask);
        chosenTask.classList.add('selected-task');
      } else {
        switchDoneUndone(chosenTask);
      }
      clickCount = 0;
    }, timeout || 300);
  }
} */

LISTSHOWN.addEventListener('click', (event) => {
  //handleClicks(event.target);
  resetSelectedTask();
  event.target.classList.add('selected-task');
  console.log(LISTSHOWN.indexOf(event.target));
});

LISTSHOWN.addEventListener('dblclick', (event) => {
  switchDoneUndone(event.target);
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

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  let listedItems = document.querySelectorAll('li');
  listedItems.forEach(element => {
    element.remove();
  });
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  let classCompleted = document.querySelectorAll('.completed');
  classCompleted.forEach(element => {
    element.remove();
  });
});

BTNSAVE.addEventListener('click', () => {
  localStorage.setItem('tasks', document.getElementById('lista-tarefas').innerHTML);
});

if (localStorage.getItem['tasks'] !== null) {
  console.log(document.getElementById('lista-tarefas').innerHTML);
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('tasks');
}