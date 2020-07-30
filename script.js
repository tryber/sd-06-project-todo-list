document.getElementById('criar-tarefa').onclick = function() {
  let inputedTask = document.getElementById('texto-tarefa').value;
  let taskItem = document.createElement('li');
  // taskItem.textContent = inputedTask.value;
  let inputedTaskNode = document.createTextNode(inputedTask);
  taskItem.appendChild(inputedTaskNode);

  document.getElementById('lista-tarefas').appendChild(taskItem);
  document.getElementById('texto-tarefa').value = ""; 
}