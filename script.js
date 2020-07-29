//Create an ordered list
const orderedList = document.createElement('ol');
let cointainerList = document.querySelector('.list-container');
orderedList.id = 'lista-tarefas';
cointainerList.appendChild(orderedList);

//Create the list itens, and add them in the orderedList when the button is clicked.
let typedtext = document.getElementById('texto-tarefa');
function addItens() {
    if (typedtext.value !== '') {
        const listItens = document.createElement('li');
        listItens.innerHTML = typedtext.value;
        orderedList.appendChild(listItens);
        typedtext.value = '';
    }
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', addItens)

