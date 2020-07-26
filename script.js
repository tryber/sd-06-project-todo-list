// declarando as variáveis e os botões
const createTaskButton = document.querySelector('#criar-tarefa');

function createNewTask() {
  const textInput = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerHTML = textInput.value;
  list.appendChild(newTask);
  textInput.value = '';
  newTask.addEventListener('click', function (event) {
    const allTasks = document.querySelectorAll('li');
    for (let i = 0; i < allTasks.length; i += 1) {
      if (allTasks[i].classList.contains('selectedTask')) {
        allTasks[i].classList.remove('selectedTask');
      }
    }
    event.target.classList.add('selectedTask');
  });
}

createTaskButton.addEventListener('click', createNewTask);
