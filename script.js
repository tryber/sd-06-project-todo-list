

    function click(event) {
    const backTasks = event.target;
    const removeBackTasks = document.querySelectorAll('#list');
    for (let index = 0; index < removeBackTasks.length; index += 1) {
        removeBackTasks[index].classList.remove('selected');
    }
    backTasks.classList.add('selected');
  }

    function doubleClick(event) {
    const completeTask = event.target;
    if (completeTask.classList.contains('completed')) {
        completeTask.classList.remove('completed');
    } else {
        completeTask.classList.add('completed');
    }
  }

    function createElement() {
    const addNewTask = document.querySelector('#lista-tarefas');
    const taskText = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    if (taskText.value !== '') {
      li.innerHTML = taskText.value;
      li.id = 'list';
      addNewTask.appendChild(li);
      taskText.value = '';
      li.addEventListener('click', click);
      li.addEventListener('doubleClick', doubleClick);
    }
  }

    function clean() {
    const allTasks = document.querySelector('#lista-tarefas');
    while (allTasks.firstChild) {
        allTasks.removeChild(allTasks.lastChild);
    }
  }

  const btnCreateTask = document.querySelector('#criar-tarefa');
  btnCreateTask.addEventListener('click', createElement);
  
  const btnRemoveTask = document.querySelector('#apaga-tudo');
  btnRemoveTask.addEventListener('click', clean);
  
  const btnSaveTasks = document.querySelector('#salvar-tarefas');
  btnSaveTasks.addEventListener('click');
  
  

