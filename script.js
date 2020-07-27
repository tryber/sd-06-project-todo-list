let buttonAdd = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let inputTarefa = document.querySelector('#texto-tarefa');

function insertTask() {
    buttonAdd.addEventListener('click', function(e) {
        createTask();
    })
    
}

function createTask() {
    let itensList = document.createElement('li');
    list.appendChild(itensList);
    itensList.innerText = inputTarefa.value;
    inputTarefa.value = '';
}





createTask();
insertTask();