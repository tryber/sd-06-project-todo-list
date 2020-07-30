const btAdd = document.getElementById('criar-tarefa');
btAdd.addEventListener('click', function () {
  const newTask = document.getElementById('texto-tarefa').value;
  const tagLi = document.createElement('li');
  tagLi.innerHTML = newTask;
  tagLi.className = 'tasks';
  tagLi.style.cursor = 'pointer';
  document.querySelector('#lista-tarefas').appendChild(tagLi);
  document.getElementById('texto-tarefa').value = '';
  if (document.getElementsByClassName('tasks').length > 0) {
    tasksListener();
  }
});

function unsetBgTasks() {
  document.querySelectorAll('.tasks').forEach(item => {
    item.style.backgroundColor = 'unset';
  });
}

function tasksListener() {
  document.querySelectorAll('.tasks').forEach(item => {
    console.log(item);
    item.addEventListener('click', function () {
      unsetBgTasks();
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    })
  });
}
