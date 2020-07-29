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
  addText(li);
}

// addTaskButton.onclick = taskCreation;

addTaskButton.addEventListener("click", function() {
  taskCreation();
})
