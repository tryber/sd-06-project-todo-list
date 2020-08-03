
function newTask() {
    let caixaTarefa = document.getElementById('texto-tarefa').value;
    let lista = document.getElementById('lista-tarefas');
    let novoItem = document.createElement('li');
    lista.appendChild(novoItem);

    //Selecionar o último item da lista
    let container = document.getElementsByTagName('li');
    let lastItem = container[container.length - 1];

//Inserir na lista o novo item
    lastItem.innerText = caixaTarefa;

    //Limpar o campo
    document.getElementById('texto-tarefa').value = '';
}