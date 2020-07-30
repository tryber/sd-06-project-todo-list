
    let createButton = document.querySelector("#criar-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let textInput = document.querySelector("#texto-tarefa");
    let removeTasksDoneButton = document.querySelector("#remover-finalizados");
    let removeSelectedTasksButton = document.querySelector("#remover-selecionado");
    let clearListButton = document.querySelector("#apagar-tudo");

    
    function createTask() {
        let listItem = document.createElement('li');
        let task = document.getElementById('texto-tarefa').value;
        listItem.innerHTML = task;
        taskList.appendChild(listItem);
        document.getElementById('texto-tarefa').value = '';
    }
    createButton.addEventListener('click', createTask);


    //Lidando com a tarefa selecionada
    function handleSelectedTask(event) {
        let listSelectedTask = event.target;
            if (document.querySelector('.selected') !== null) {
                document.querySelector('.selected').classList.remove('selected');
            }
        listSelectedTask.classList.add('selected');
    }
    taskList.addEventListener('click', handleSelectedTask);

//Lidando com as tarefas completas
    function HandleTasksDone(event) {
        let listCompletedTask = event.target;
             if (listCompletedTask.classList.contains('completed')) {
                listCompletedTask.classList.remove('completed');
            } else {
                listCompletedTask.classList.add('completed');
        }
    }
    taskList.addEventListener('dblclick', HandleTasksDone);


//Removendo as tarefas completadas
    function removeTasksDone() {
        let tasksCompleted = document.querySelectorAll('.completed');
            for (let i = tasksCompleted.length - 1; i >= 0; i -= 1) {
                tasksCompleted[i].remove();
            }
    }
    removeTasksDoneButton.addEventListener('click', removeTasksDone);

//Removendo as tarefas selecionadas
    function removeSelectedTasks() {
        if (document.querySelector('.selected') !== null) {
            document.querySelector('.selected').remove();
    }
    }
    removeSelectedTasksButton.addEventListener('click', removeSelectedTasks);

    function removeAllTasks() {
    let listElementsss = document.getElementsByTagName('li');
        for (let i = listElementsss.length - 1; i >= 0; i -= 1) {
            listElementsss[i].remove();
    }
    }
    clearListButton.addEventListener('click', removeAllTasks);

//Salvando a lista
    let saveTasks = document.querySelector('#salvar-tarefas');
        saveTasks.addEventListener('click', function () {
            localStorage.setItem('items', taskList.innerHTML)
    });
    



        // function listingTheTasks('click', function(){
        //     let listItem = document.createElement('li');
        //     listItem.innerHTML = textInput.value;
        //     taskList.appendChild(listItem);
        //     textInput.value = "";
        //     listItem.addEventListener('click', function(){
        //         console.log('testando!!!');
        //     })

        // })
        // listItem.addEventListener('dbclick', function(event){
        //     let doubleClick = event.target;
        //     console.log('testando novamente !!!');

        // })

        

        // listItem = listingTheTasks();
        // console.log(listItem);




