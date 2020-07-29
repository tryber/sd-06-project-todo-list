function addTask() {
  let task = document.createElement('li');
  let lista = document.getElementById('lista-tarefas');
  task.innerHTML = document.getElementById('texto-tarefa').value;
  lista.appendChild(task);
}