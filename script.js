window.onload = function () {
  let taskInput = document.querySelector('#texto-tarefa');
  let addButton = document.querySelector('#criar-tarefa');
  let taskList = document.querySelector('#lista-tarefas');

  addButton.addEventListener('click', function () {
    let listItem = document.createElement('li');
    listItem.innerText = taskInput.value;
    listItem.className = 'task-iten'
    taskList.appendChild(listItem);
    taskInput.value = '';
  });

  let selected = document.getElementsByClassName('selected');

  console.log(selected.length)

  taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('task-iten') && selected.length === 0) {
      event.target.classList.add('selected');
    } else if (event.target.classList.contains('task-iten') && selected.length === 1) {
      selected[0].classList.remove('selected')
      event.target.classList.add('selected');
    } else if (event.target.classList.contains('completed') && selected.length === 0) {
      event.target.classList.add('selected');
    } 
  });

  taskList.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('task-iten')) {
      event.target.className = "completed"
    } else if (event.target.classList.contains('completed')) {
      event.target.className = 'task-iten';
    }
  });

  let clearAll = document.querySelector('#apaga-tudo')
  let numberOfTasks = document.getElementById('lista-tarefas')
  clearAll.addEventListener('click', function () {
     numberOfTasks.innerHTML = '';
  });

  let clearCompleted = document.querySelector('#remover-finalizados');

  clearCompleted.addEventListener('click', function () {
    document.querySelectorAll('.completed').forEach(function(item) {
      item.remove();
    })
  });

  let saveTasks = document.querySelector('#salvar-tarefas');

  saveTasks.addEventListener('click', function () {
    localStorage.setItem('items', taskList.innerHTML)
  });

  function loadUserSettings () {
    let saved = localStorage.getItem('items')
    console.log(saved)
    if (saved) {
      taskList.innerHTML = saved;
    }
  };

  loadUserSettings();

  let clearSelected = document.querySelector('#remover-selecionado');

  clearSelected.addEventListener('click', function () {
    selected[0].remove();
  })

  let moveUp = document.querySelector('#mover-cima');
  
  moveUp.addEventListener('click', function () {
    if (selected[0].innerText != taskList.firstChild.innerText) {
      let elementBefore = selected[0].previousSibling;
      taskList.insertBefore(selected[0], elementBefore);
    }
  });

  let moveDown = document.querySelector('#mover-baixo');
  
  moveDown.addEventListener('click', function () {
    if (selected[0].innerText != taskList.lastChild.innerText && selected[0].classList.length === 2) { 
      let elementAfter = selected[0].nextSibling;
      console.log(selected[0].classList.length)
      taskList.insertBefore(elementAfter, selected[0]);
      taskList.lastChild.innerText;
    }
  });
};
