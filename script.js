const LISTSHOWN = document.getElementById('lista-tarefas');
let toDoList = [];
let clickCount = 0;
let timeout = 350;

function appendTask() {
  let item = document.createElement('li');
  item.innerText = toDoList[toDoList.length - 1];
  LISTSHOWN.appendChild(item);
}

function resetSelectedTask() {
  let selected = document.querySelector('.selected-task');
  if (selected) {
    selected.classList.remove('selected-task');
    console.log(selected);
  }
  console.log(selected,' out of if');
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
}

LISTSHOWN.addEventListener('click', (event) => {
  handleClicks(event.target);
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

/* LISTSHOWN.addEventListener('dblclick', (event) => {
  let item = event.target;
  switchDoneUndone(item, item.className);
}); */

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  let listedItems = document.querySelectorAll('li');
  listedItems.forEach(element => {
    element.remove();
  });
});
