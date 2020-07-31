const LISTSHOWN = document.querySelector('#lista-tarefas');
const BTNSAVE = document.querySelector('#salvar-tarefas');
const BTNUP = document.querySelector('#mover-cima');
const BTNDOWN = document.querySelector('#mover-baixo');
const BTNDELSELECTED = document.querySelector('#remover-selecionado');

/* let clickCount = 0;
let timeout = 350;
 */

function appendTask(toDoTask) {
  const ITEM = document.createElement('li');
  ITEM.innerText = toDoTask.value;
  LISTSHOWN.appendChild(ITEM);
}

function resetSelectedTask() {
  const SELECTED = document.querySelector('.selected-task');
  if (SELECTED) {
    SELECTED.classList.remove('selected-task');
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
  // handleClicks(event.target);
  resetSelectedTask();
  event.target.classList.add('selected-task');
});

LISTSHOWN.addEventListener('dblclick', (event) => {
  switchDoneUndone(event.target);
});

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const TASK = document.querySelector('.to-do-task');
  if (TASK.value) {
    appendTask(TASK);
    TASK.value = '';
  } else {
    alert('You should type a task to add it.');
  }
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  const LISTEDITEMS = document.querySelectorAll('li');
  LISTEDITEMS.forEach((element) => {
    element.remove();
  });
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const CLASSCOMPLETED = document.querySelectorAll('.completed');
  CLASSCOMPLETED.forEach((element) => {
    element.remove();
  });
});

BTNSAVE.addEventListener('click', () => {
  localStorage.setItem('tasks', document.getElementById('lista-tarefas').innerHTML);
});

if (localStorage.getItem.tasks !== null) {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('tasks');
}

BTNUP.addEventListener('click', () => {
  const TASK = document.getElementsByClassName('selected-task')[0];
  if (TASK) {
    const PREVIOUSSIB = TASK.previousSibling;
    if (PREVIOUSSIB) {
      TASK.parentNode.insertBefore(TASK, PREVIOUSSIB);
    }
  }
});

BTNDOWN.addEventListener('click', () => {
  const TASK = document.getElementsByClassName('selected-task')[0];
  if (TASK) {
    const NEXTSIB = TASK.nextElementSibling;
    if (NEXTSIB) {
      TASK.parentNode.insertBefore(NEXTSIB, TASK);
    }
  }
});

BTNDELSELECTED.addEventListener('click', () => {
  let taskToRemove = document.querySelector('.selected-task');
  if (taskToRemove) {
    taskToRemove.remove();
  }
});
