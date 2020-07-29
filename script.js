function addTask() {
  let task = document.createElement('li');
  let lista = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  task.innerHTML = input.value;
  lista.appendChild(task);
  input.value = '';
}