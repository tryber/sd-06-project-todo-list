    let btnCreate = document.querySelector("#criar-tarefa")
    let btnClearCompleted = document.querySelector("#remover-finalizados")
    let btnClearList = document.querySelector("#apaga-tudo")
    // let btnSave = document.querySelector("#salvar-tarefas")
    let btnRemove = document.querySelector("#remover-selecionado")
    let taskList = document.querySelector("#lista-tarefas")
   
    //lidando com a lista

    function selectedTask(event) {
        let liSelectedTask = event.target;
        if (document.querySelector('.selectedTask') !== null) {
          document.querySelector('.selectedTask').classList.remove('selectedTask');
        }
        liSelectedTask.classList.add('selectedTask');
    }
      
    function completedTask(event) {
        let liCompletedTask = event.target;
        if (liCompletedTask.classList.contains('completed')) {
          liCompletedTask.classList.remove('completed');
        } else {
          liCompletedTask.classList.add('completed');
        }
    }
      
      //cria as tarefas

    function createTask() {
        let liElement = document.createElement('li');
        let task = document.getElementById('texto-tarefa').value;
        liElement.innerHTML = task;
        taskList.appendChild(liElement);
        document.getElementById('texto-tarefa').value = '';
    }
      
      //remove as completas

    function removeCompletedTasks() {
        let liCompleted = document.querySelectorAll('.completed');
        for (let i = liCompleted.length - 1; i >= 0; i -= 1) {
          liCompleted[i].remove();
        }
    }
      
      //remove as selecionadas

    function removeSelectedTasks() {
        if (document.querySelector('.selectedTask') !== null) {
          document.querySelector('.selectedTask').remove();
        }
    }

      //limpa tudo

    function removeAllTasks() {
        let liElements = document.getElementsByTagName('li');
        for (let i = liElements.length - 1; i >= 0; i -= 1) {
          liElements[i].remove();
        }
    }
      //salva as tarefas
    
      let saveTasks = document.querySelector('#salvar-tarefas');
      saveTasks.addEventListener('click', function () {
        localStorage.setItem('items', taskList.innerHTML)
      });
      
      //chama as funcoees e adiciona o evento click

      taskList.addEventListener('click', selectedTask);
      taskList.addEventListener('dblclick', completedTask);
      btnCreate.addEventListener('click', createTask);
      btnClearList.addEventListener('click', removeAllTasks);
      btnClearCompleted.addEventListener('click', removeCompletedTasks);
      btnRemove.addEventListener('click', removeSelectedTasks);
