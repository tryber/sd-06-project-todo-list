// Variáveis

const buttonNewTask = document.getElementById("criar-tarefa");
const taskList = document.getElementById("lista-tarefas");

buttonNewTask.addEventListener('click', function(){
  let itemLista = document.createElement('li')
  taskList.appendChild(itemLista);
})
