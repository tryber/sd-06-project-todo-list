var button = document.querySelector('#criar-tarefa');
var list = document.querySelector('#lista-tarefas')

button.addEventListener('click', insertTask);

function insertTask() {
    let task =  document.querySelector('#texto-tarefa').value;
    let btn = document.createElement('li');
    btn.innerHTML = task;
    list.appendChild(btn);

    let cleanInput = document.getElementById("texto-tarefa").value = "";
}