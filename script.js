let addButton = document.querySelector('#criar-tarefa');
addButton.addEventListener('click', addToDo)
let selectItem = document.querySelector('.toDoItem');
selectItem.addEventListener('click', function () {
    console.log(selectItem);
})

function addToDo() {
    let toDo = document.querySelector('#texto-tarefa');
    let listToDo = document.createElement('li');
    listToDo.className = 'toDoItem';
    document.getElementById('lista-tarefas').appendChild(listToDo).innerText = toDo.value;
    toDo.value = null;
}
