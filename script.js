var button = document.querySelector('#criar-tarefa');
var list = document.querySelector('#lista-tarefas')

button.addEventListener('click', insertTask);

function insertTask() {
    let task =  document.querySelector('#texto-tarefa').value;
    let button = document.createElement('li');
    button.innerHTML = task;
    list.appendChild(button);

    let cleanInput = document.getElementById("texto-tarefa").value = "";
} 
