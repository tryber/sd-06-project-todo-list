// Variáveis

const buttonNewTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');

buttonNewTask.addEventListener('click', function(){
  const textList = inputText.value;
  const itenList = document.createElement('li')
  itenList.innerText = textList;

  taskList.appendChild(itenList);

})
