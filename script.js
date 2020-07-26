const elementBtnAddTask = document.getElementById('criar-tarefa');
elementBtnAddTask.addEventListener('click', function() {
  const taskName = getTaskName();
  const list = getOlElement();
  insertTask(list, taskName);
  clearInput();
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

