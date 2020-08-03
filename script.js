
function newTask() {
    let caixaTarefa = document.getElementById('texto-tarefa').value;
    let lista = document.getElementById('lista-tarefas');
    let novoItem = document.createElement('li');
    lista.appendChild(novoItem);

    //Selecionar o último item da lista
    let container = document.getElementsByTagName('li');
    let lastItem = container[container.length - 1];

    //inserir classe no novo item
    lastItem.classList.add('not-completed');

    //inserir atributos no novo item
    lastItem.setAttribute('ondblclick', 'complete()');
    lastItem.setAttribute('onclick', 'select()');
    //Inserir na lista o novo item
    lastItem.innerText = caixaTarefa;

    //Limpar o campo
    document.getElementById('texto-tarefa').value = '';
}

function complete() {
    let itemClicado = event.target;
    let tamanhoArray = itemClicado.classList.length;
    for (i = 0; i < tamanhoArray; i += 1) { }
    if (itemClicado.classList[i] === 'completed') {
        itemClicado.classList.remove('completed');
        itemClicado.classList.add('not-completed');
    } else {
        itemClicado.classList.remove('not-completed');
        itemClicado.classList.add('completed');
    }
}

function select() {
    //Remover a classe de seleçao do item anterior
    let limparAnterior = document.getElementsByClassName('selected');
    if (limparAnterior.length === 1) {
        let itemAnterior = limparAnterior[0];
        itemAnterior.classList.remove('selected');
    }
    //Inserir a classe na nova
    let selecionado = event.target;
    selecionado.classList.add('selected');
}

function removeAll() {
    let allItems = document.getElementsByTagName('li');
    let itemsArray = allItems.length;
    let parentList = document.getElementById('lista-tarefas');

    for ( i = 0; i < itemsArray; i+= 1){
        parentList.removeChild(allItems[0]);
    }

}
function removeCompleted() {
    let allCompleted = document.getElementsByClassName('completed');
    let completedArray = allCompleted.length;
    let allTasks = document.getElementById('lista-tarefas');
    for (i = 0; i < completedArray; i += 1) {
        allTasks.removeChild(allCompleted[0]);
    }
}