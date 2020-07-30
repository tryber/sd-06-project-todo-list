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

let taskList = document.querySelectorAll('li');

function resetSelection() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.removeAttribute('style');
    return selectedTask.classList.remove('selected');
  }
}

function selectTask(task) {
  resetSelection();
  task.className = 'selected'
  return task.style.backgroundColor = 'rgb(128, 128, 128)';
}

let ol = document.getElementById('lista-tarefas');
let options = {
  childList: true
}
let observer = new MutationObserver(childChanges);

function childChanges(mutations) {
  for (let mutation of mutations) {
    if (mutation.type === 'childList') {
      taskList = document.querySelectorAll('li');

      for (task of taskList) {
        task.addEventListener('click', function () {
          console.log('foi')
          selectTask(this);
        });
      }
    }
  }
}

observer.observe(ol, options);
