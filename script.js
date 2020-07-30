const btAdd = document.getElementById('criar-tarefa');
btAdd.addEventListener('click', function () {
  const newTask = document.getElementById('texto-tarefa').value;
  const tagLi = document.createElement('li');
  tagLi.innerHTML = newTask;
  document.querySelector('#lista-tarefas').appendChild(tagLi);
  document.getElementById('texto-tarefa').value = '';
});
