//Create an ordered list
const orderedList = document.createElement('ol');
let cointainerList = document.querySelector('.list-container');
orderedList.id = 'lista-tarefas';
cointainerList.appendChild(orderedList);

//Create the list itens, and add them in the orderedList
const listItens = document.createElement('li');
let typedtext = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');

addButton.addEventListener('click', function() {
    listItens.innerHTML = typedtext.value;
    orderedList.appendChild(listItens);
})

