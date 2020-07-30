document.getElementById('criar-tarefa').onclick = function() {
  let inputedTask = document.getElementById('texto-tarefa').value;
  let taskItem = document.createElement('li');
  let inputedTaskNode = document.createTextNode(inputedTask);
  taskItem.appendChild(inputedTaskNode);

  document.getElementById('lista-tarefas').appendChild(taskItem);
  document.getElementById('texto-tarefa').value = ""; 
}
document.getElementById('lista-tarefas').onclick = function() {
  if (document.querySelector(".selected") != null) {
    document.querySelector(".selected").style.backgroundColor = "";
    document.querySelector(".selected").classList.remove("selected");
  }
  event.target.style.backgroundColor = "rgb(128,128,128)";
  event.target.classList.add("selected");
}