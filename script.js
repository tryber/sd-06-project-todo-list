let buttonAdd = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let inputTarefa = document.querySelector('#texto-tarefa');
let eraseButton = document.querySelector('#apaga-tudo')
let allListTasks = [];

function insertTask() {
    buttonAdd.addEventListener('click', function (e) {
        e.preventDefault();
        createTask();
        inputTarefa.value = ''; 
        
        for (let i = 0; i < allListTasks.length; i++) { 
            allListTasks[i].addEventListener('dblclick', function() {
                allListTasks[i].classList.add('completed')
            })           
            
        }
    })

}
insertTask();

function createTask() {
    let itensList = document.createElement('li');
    itensList.innerText = inputTarefa.value;
    list.appendChild(itensList);
    allListTasks.push(itensList);
}
createTask();

function selectedTask() {
    
}

selectedTask();

function deleteAllTasks() {
    eraseButton.addEventListener('click', function () {
        list.innerHTML = ''
    })
}


deleteAllTasks();