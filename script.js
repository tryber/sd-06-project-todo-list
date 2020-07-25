const task = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
function createTask() {
  if (task.value.length !== 0) {
    const li = document.createElement('li');
    taskList.appendChild(li);
    li.innerText = task.value;
    task.value = '';
  }
}
btnCreateTask.addEventListener('click', createTask);
