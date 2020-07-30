let buttonAdd = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let eraseButton = document.querySelector('#apaga-tudo')
let selectedButton = document.querySelector('#remover-selecionado');
let removeCompletedButton = document.querySelector('#remover-finalizados');
let saveTasksButton = document.querySelector('#salvar-tarefas');
let moveUpBtn = document.querySelector('#mover-cima');
let moveDownBtn = document.querySelector('#mover-baixo');
let inputTarefa = document.querySelector('#texto-tarefa');

createTask = () => {
    let newTask = document.createElement('li');
    newTask.innerHTML = inputTarefa.value;
    list.appendChild(newTask);
    inputTarefa.value = '';
};

counterSelectedTasks = () => {
    let allTasks = document.querySelectorAll('#lista-tarefas li');
    let counter = 0;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList.contains('selected')) {
            counter += 1;
        }
    }
    return counter;
}

taskSelected = () => {
    let selectedTask = event.target;
    let allTasks = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < allTasks.length; i += 1) {
        if (allTasks[i].classList.contains('selected')) {
            allTasks[i].classList.remove('selected');
        }
    }
    selectedTask.classList.add('selected')
}

completedTasks = () => {
    let doubleTask = event.target;
    if (doubleTask.classList.contains('completed')) {
        doubleTask.classList.remove('completed')
    } else {
        doubleTask.classList.add('completed')
    }
}

clearTasks = () => {
    while (list.firstChild) {
        list.firstChild.remove();
    }
}

removeTasksCompleted = () => {
    let allTasks = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < allTasks.length; i += 1) {
        if (allTasks[i].classList.contains('completed')) {
            allTasks[i].remove();
        }
    }
}

removeSelected = () => {
    let allTasks = document.querySelectorAll('#lista-tarefas li');
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList.contains('selected')) {
            allTasks[i].remove();
        }
    }
}

storageTasks = () => {
    const allTasks = list.innerHTML;
    localStorage.setItem('List of Tasks', allTasks);
}

recoverTasks = () => {
    list.innerHTML = localStorage.getItem('List of Tasks');
}
window.onload = recoverTasks;


moveUp = () => {
    if (counterSelectedTasks() !== 1) {
        alert('Selecione uma tarefa para mover para cima!');
    } else {
        const selectedTask = document.getElementsByClassName('selected')[0];
        if (selectedTask.previousElementSibling !== null) {
            const previousItem = selectedTask.previousElementSibling;
            const previousItemTask = previousItem.innerHTML;
            previousItem.innerHTML = selectedTask.innerHTML;
            selectedTask.innerHTML = previousItemTask;
            selectedTask.classList.remove('selected');
            previousItem.classList.add('selected')
        }
    }
}

moveDown = () => {
    if (counterSelectedTasks() !== 1) {
        alert('Selecione uma tarefa para mover para baixo!');
    } else {
        const selectedTask = document.getElementsByClassName('selected')[0];
        if (selectedTask.nextElementSibling !== null) {
            const nextItem = selectedTask.nextElementSibling;
            const nextItemTask = nextItem.innerHTML;
            nextItem.innerHTML = selectedTask.innerHTML;
            selectedTask.innerHTML = nextItemTask;
            selectedTask.classList.remove('selected');
            nextItem.classList.add('selected')
        }
    }
}




buttonAdd.addEventListener('click', createTask);
list.addEventListener('click', taskSelected);
list.addEventListener('dblclick', completedTasks)
eraseButton.addEventListener('click', clearTasks);
removeCompletedButton.addEventListener('click', removeTasksCompleted);
selectedButton.addEventListener('click', removeSelected)
saveTasksButton.addEventListener('click', storageTasks);
moveUpBtn.addEventListener('click', moveUp)
moveDownBtn.addEventListener('click', moveDown);



