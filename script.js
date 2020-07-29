let todoItems = [];
const inputValue = document.querySelector('#texto-tarefa').value;
const btnNewTask = document.querySelector('#criar-tarefa');
btnNewTask.addEventListener('click', function () {
  console.log(inputValue);
});