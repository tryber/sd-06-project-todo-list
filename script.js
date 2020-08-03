
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
for (i = 0; i < tamanhoArray; i+= 1){}
    if (itemClicado.classList[i] === 'completed') {
        itemClicado.classList.remove('completed');
        itemClicado.classList.add('not-completed');
    } else {
        itemClicado.classList.remove('not-completed');
        itemClicado.classList.add('completed');
    }
}

function select() {
    let selecionado = event.target;
    let classesSelecionado = selecionado.classList;
    let counter = 0;
    for (i = 0; i < classesSelecionado.length; i += 1) {
        if (classesSelecionado[i] === 'selected') {
            counter += 1;
        }
    }
    if (counter === 0) {
        selecionado.classList.add('śelected');
    } else {
        selecionado.classList.remove('selected');
    }
}