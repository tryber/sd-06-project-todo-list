// Add task

const addTaskInput = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');

function taskCreation() {
  if (addTaskInput.value === '') {
    return alert('Name a task before adding it!');
  }
  const li = addTask();
  addText(li);
  return
}

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

addTaskButton.onclick = taskCreation;
