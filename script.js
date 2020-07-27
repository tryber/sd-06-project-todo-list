let buttonAdd = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let eraseButton = document.querySelector('#apaga-tudo')
let selectedButton = document.querySelector('#remover-selecionado');
let removeCompletedButton = document.querySelector('#remover-finalizados');
let saveTasksButton = document.querySelector('#salvar-tarefas');
let moveUpBtn = document.querySelector('#mover-cima');
let moveDownBtn = document.querySelector('#mover-baixo');

function createTask() {
    let inputTarefa = document.querySelector('#texto-tarefa');
    let newTask = document.createElement('li');
    newTask.innerHTML = inputTarefa.value;
    list.appendChild(newTask);
    inputTarefa.value = '';
};

function counterSelectedTasks() {
    let counter = 0;
    let allTasks = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList.contains('selected')) {
            counter += 1;
        }
    }
    return counter;
}

function taskSelected() {
    let selectedTask = event.target;
    let allTasks = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < allTasks; i += 1) {
        if (allTasks[i].classList.contains('selected')) {
            allTasks[i].classList.remove('selected');
        }
    }
    selectedTask.classList.add('selected')
}

function completedTasks() {
    let doubleTask = event.target;
    if (doubleTask.classList.contains('completed')) {
        doubleTask.classList.remove('completed')
    } else {
        doubleTask.classList.add('completed')
    }
}



function clearTasks() {
    while (list.firstChild) {
        list.firstChild.remove();
    }
}

function removeTasksCompleted() {
    let allTasks = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < allTasks.length; i += 1) {
        if (allTasks[i].classList.contains('completed')) {
            allTasks[i].remove();
        }
    }
}


buttonAdd.addEventListener('click', createTask);
list.addEventListener('click', taskSelected);
list.addEventListener('dblclick', completedTasks)
eraseButton.addEventListener('click', clearTasks);
removeCompletedButton.addEventListener('click', removeTasksCompleted);





