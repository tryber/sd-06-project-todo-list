const elementBtnAddTask = document.getElementById('criar-tarefa');
elementBtnAddTask.addEventListener('click', function() {
  const taskName = getTaskName();
  const list = getOlElement();
  insertTask(list, taskName);
  clearInput();
  taskHighlighter();
});

function insertTask(list, taskName) {
  const listItem = document.createElement('li');
  listItem.innerText = taskName;
  list.appendChild(listItem);
}

function getOlElement() {
  const elementOlTaskList = document.getElementById('lista-tarefas');
  return elementOlTaskList;

}

function getTaskName() {
  const elementInputTaskName = document.getElementById('texto-tarefa');
  const taskName = elementInputTaskName.value;
  return taskName;
}

function clearInput() {
  const elementInputTaskName = document.getElementById('texto-tarefa');
  elementInputTaskName.value = '';  
}

function taskHighlighter() {
  const elementOlTaskList = getOlElement();
  const taskElementsList = elementOlTaskList.children;
  for (index = 0; index < taskElementsList.length; index += 1) {
    const taskElement = taskElementsList[index];
    taskElement.addEventListener('click', function() {
      taskElement.classList.add('grey-background');
    });
  }
}
