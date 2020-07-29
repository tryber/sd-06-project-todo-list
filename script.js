let listaTarefas = document.getElementById('lista-tarefas');
let addTarefaButton = document.getElementById('criar-tarefa');

function addTarefa() {
    let inputTarefa = document.createElement('li');
    inputTarefa.innerText = document.getElementById('texto-tarefa').value;
    listaTarefas.appendChild(inputTarefa)
    document.getElementById('texto-tarefa').value = "";
}
addTarefaButton.addEventListener('click', addTarefa);
