let buttonAdd = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let inputTarefa = document.querySelector('#texto-tarefa');
let eraseButton = document.querySelector('#apaga-tudo')

function insertTask() {
    buttonAdd.addEventListener('click', function (e) {
        createTask();
    })

}

function createTask() {
    let itensList = document.createElement('li');
    list.appendChild(itensList);
    itensList.innerText = inputTarefa.value;

    inputTarefa.value = '';
}


function deleteAllTasks() {
    eraseButton.addEventListener('click', function () {
        list.innerHTML = ''
    })
}

createTask();
insertTask();
deleteAllTasks();