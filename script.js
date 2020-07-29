    const btnCreate = document.querySelector("#criar-tarefa")
    const btnClearCompleted = document.querySelector("#remover-finalizados")
    const btnClearList = document.querySelector("#apaga-tudo")
    // const btnSave = document.querySelector("#salvar-tarefas")
    const btnRemove = document.querySelector("#remover-selecionado")
    const taskList = document.querySelector("#lista-tarefas")
   
    //lidando com a lista

    function selectedTask(event) {
        const liSelectedTask = event.target;
        if (document.querySelector('.selectedTask') !== null) {
          document.querySelector('.selectedTask').classList.remove('selectedTask');
        }
        liSelectedTask.classList.add('selectedTask');
    }
      
    function completedTask(event) {
        const liCompletedTask = event.target;
        if (liCompletedTask.classList.contains('completed')) {
          liCompletedTask.classList.remove('completed');
        } else {
          liCompletedTask.classList.add('completed');
        }
    }
      
      //cria as tarefas

    function createTask() {
        const liElement = document.createElement('li');
        const task = document.getElementById('texto-tarefa').value;
        liElement.innerHTML = task;
        taskList.appendChild(liElement);
        document.getElementById('texto-tarefa').value = '';
    }
      

      
      //remove as completas

    function removeCompletedTasks() {
        const liCompleted = document.querySelectorAll('.completed');
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
        const liElements = document.getElementsByTagName('li');
        for (let i = liElements.length - 1; i >= 0; i -= 1) {
          liElements[i].remove();
        }
    }
      
      
      //chama as funcoees e adiciona o evento click

      taskList.addEventListener('click', selectedTask);
      taskList.addEventListener('dblclick', completedTask);
      btnCreate.addEventListener('click', createTask);
      btnClearList.addEventListener('click', removeAllTasks);
      btnClearCompleted.addEventListener('click', removeCompletedTasks);
      btnRemove.addEventListener('click', removeSelectedTasks);
