const listaTarefas = document.getElementById('lista-tarefas');
const addTarefaButton = document.getElementById('criar-tarefa');
const removeSelecionadoButton = document.getElementById('remover-selecionado');
const removeFinalizadosButton = document.getElementById('remover-finalizados');

function addTarefa() {
    let inputTarefa = document.createElement('li');
    inputTarefa.innerText = document.getElementById('texto-tarefa').value;
    listaTarefas.appendChild(inputTarefa)
    document.getElementById('texto-tarefa').value = "";
}
addTarefaButton.addEventListener('click', addTarefa);

function tarefaSelecionada (event) {
    const itemLista = document.getElementsByTagName('li');
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    event.target.id = 'isSelected';
    for (let i = 0; i < itemLista.length; i += 1) {
      if (itemLista[i] !== event.target) {
        itemLista[i].style.backgroundColor = '';
        itemLista[i].id = '';
      }
    }
}
listaTarefas.addEventListener('click', tarefaSelecionada);

function tarefaCompletada (event) {
    if (event.target.className !== 'completed') {
        event.target.className = 'completed';
    } else {
        event.target.className = '';
    }
}
listaTarefas.addEventListener('dblclick', tarefaCompletada);

function removeSelecionado (event) {
    document.getElementById('isSelected').remove();
}
removeSelecionadoButton.addEventListener('click', removeSelecionado);

function removeFinalizados (event) {
    let completed = document.querySelectorAll('.completed');
    for (let i = 0; i < completed.length; i += 1) {
        completed[i].remove();
    }
}
removeFinalizadosButton.addEventListener('click', removeFinalizados);
