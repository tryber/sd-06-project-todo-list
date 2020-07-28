window.onload = function () {
    let taskInput = document.querySelector('#texto-tarefa');
    let addButton = document.querySelector('#criar-tarefa');
    let taskList = document.querySelector('#lista-tarefas');

    addButton.addEventListener('click', function () {
        let listItem = document.createElement('li');
        listItem.innerText = taskInput.value;
        listItem.className = 'task-iten'
        taskList.appendChild(listItem);
        taskInput.value = '';
    });
    let selected = document.getElementsByClassName('selected');

    console.log(selected.length)

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('task-iten') && selected.length === 0) {
            event.target.classList.add('selected');
        } else if (event.target.classList.contains('task-iten') && selected.length === 1) {
            selected[0].className = 'task-iten';
            event.target.classList.add('selected');
        }
    });