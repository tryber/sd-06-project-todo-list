window.onload = function () {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  let taskInput = '';
  let deco = false;

  buttonCreateTask.addEventListener('click', function () {
    taskInput = document.getElementById('texto-tarefa').value;
    if (taskInput !== '') {
      const newLine = document.createElement('li');
      newLine.innerHTML = taskInput;
      taskList.appendChild(newLine);
      document.getElementById('texto-tarefa').value = '';
    } else {
      alert('Invalid entry!');
    }
  });

  taskList.addEventListener('click', function (event) {
    let listItem = document.getElementsByTagName('li');
    event.target.style.backgroundColor = 'rgb(128,128,128';
    for (let i = 0; i < listItem.length; i += 1) {
      if (listItem[i] !== event.target) {
        listItem[i].style.backgroundColor = 'transparent';
      }
    }
  });

  taskList.addEventListener('dblclick', function (event) {
    if (!deco) {
      event.target.style.textDecoration = 'line-through';
      deco = true;
    } else if (deco) {
      event.target.style.textDecoration = 'none';
      deco = false;
    }
  });
}
