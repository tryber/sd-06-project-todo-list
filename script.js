// declarando as variáveis e os botões
const createTaskButton = document.querySelector('#criar-tarefa');
const textInput = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');

function createNewTask() {
  const newTask = document.createElement('li');
  newTask.innerHTML = textInput.value;
  list.appendChild(newTask);
  textInput.value = '';
  textInput.focus();
}

createTaskButton.addEventListener('click', createNewTask);
