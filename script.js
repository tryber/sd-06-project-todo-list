
    let createButton = document.querySelector("#criar-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let textInput = document.querySelector("#texto-tarefa");
    let removeTasksDone = document.querySelector("#remover-finalizados")
    let clearList = document.querySelector("#apagar-tudo");

    
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
            if (document.querySelector('.selectedTask') !== null) {
                document.querySelector('.selectedTask').classList.remove('selectedTask');
            }
        listSelectedTask.classList.add('selectedTask');
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




