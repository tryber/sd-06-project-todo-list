window.onload = function(){


    let createButton = document.querySelector("#criar-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let textInput = document.querySelector("#texto-tarefa");
    let clearList = document.querySelector("#apagar-tudo");

        fuction listingTheTasks('click', function(){
            let listItem = document.createElement('li');
            listItem.innerHTML = textInput.value;
            taskList.appendChild(listItem);
            textInput.value = "";
            listItem.addEventListener('click', function(){
                console.log('testando!!!');
            })

        })
        // listItem.addEventListener('dbclick', function(event){
        //     let doubleClick = event.target;
        //     console.log('testando novamente !!!');

        // })

        }


        listItem = listingTheTasks();
        console.log(listItem);




