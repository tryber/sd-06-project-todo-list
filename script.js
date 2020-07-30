let addButton = document.querySelector('#criar-tarefa');
addButton.addEventListener('click', addToDo)

function addToDo() {
    let toDo = document.querySelector('#texto-tarefa');
    let listToDo = document.createElement('li');
    document.getElementById('lista-tarefas').appendChild(listToDo).innerText = toDo.value;
    toDo.value =" ";
}