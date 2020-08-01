const LISTSHOWN = document.querySelector('#lista-tarefas');
const BTNSAVE = document.querySelector('#salvar-tarefas');
const BTNUP = document.querySelector('#mover-cima');
const BTNDOWN = document.querySelector('#mover-baixo');
const BTNDELSELECTED = document.querySelector('#remover-selecionado');
let selectedClass = document.querySelector('.selected-task');

let clickCount = 0;
let timeout = 500;

function updateSelected() {
  selectedClass = document.querySelector('.selected-task');
}
function appendTask(toDoTask) {
  const ITEM = document.createElement('li');
  ITEM.innerText = toDoTask.value;
  LISTSHOWN.appendChild(ITEM);
}

function resetSelectedTask() {
  if (selectedClass) {
    selectedClass.classList.remove('selected-task');
  }
}

function switchDoneUndone(task) {
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function handleClicks(chosenTask) {
  clickCount += 1;
  setTimeout(function () {
    if (clickCount === 2) {
      clearTimeout()
      switchDoneUndone(chosenTask);
    } else if (clickCount === 1) {
      resetSelectedTask();
      chosenTask.classList.add('selected-task');
      updateSelected();
    }
    clickCount = 0;
  }, timeout);
}

LISTSHOWN.addEventListener('click', (event) => {
  handleClicks(event.target);
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
  if (selectedClass) {
    const PREVIOUSSIB = selectedClass.previousSibling;
    if (PREVIOUSSIB) {
      selectedClass.parentNode.insertBefore(selectedClass, PREVIOUSSIB);
    }
  }
});

BTNDOWN.addEventListener('click', () => {
  if (selectedClass) {
    const NEXTSIB = selectedClass.nextElementSibling;
    if (NEXTSIB) {
      selectedClass.parentNode.insertBefore(NEXTSIB, selectedClass);
    }
  }
});

BTNDELSELECTED.addEventListener('click', () => {
  if (selectedClass) {
    selectedClass.remove();
  }
});
