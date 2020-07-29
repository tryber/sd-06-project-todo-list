let listaTarefas = document.getElementById('lista-tarefas');
let addTarefaButton = document.getElementById('criar-tarefa');

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