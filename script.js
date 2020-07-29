

function insertTaskOnList(taskName, list) {
  const task = document.createElement('li');
  task.innerText = taskName;
  taskHighlighter(task, list);
  list.appendChild(task);
}

function clearInput() {
  const elementInputTaskName = document.getElementById('texto-tarefa');
  elementInputTaskName.value = '';  
}

function getTaskNameFromInput() {
  const elementInputTaskName = document.getElementById('texto-tarefa');
  const taskName = elementInputTaskName.value;
  return taskName;
}
function getOlElement() {
  const elementOlTaskList = document.getElementById('lista-tarefas');
  return elementOlTaskList;
}

function taskHighlighter(task, list) {
  task.addEventListener('click', function() {
    // Removes grey background style from all other tasks
    for (i = 0; i < list.children.length; i += 1) {
      list.children[i].classList.remove('grey-background');
    }
    // Add grey background style to selected task
    task.classList.add('grey-background');
  });
}

function markTaskAsCompleted(event) {
  event.target.classList.toggle('completed');
}

const elementBtnAddTask = document.getElementById('criar-tarefa');
elementBtnAddTask.addEventListener('click', function() {
  const taskName = getTaskNameFromInput();
  const list = getOlElement();
  insertTaskOnList(taskName, list);
  clearInput();
});

const elementOl = document.getElementById('lista-tarefas');
elementOl.addEventListener('dblclick', markTaskAsCompleted);




