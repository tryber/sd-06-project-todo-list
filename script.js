
let buttonAddElement = document.getElementById('criar-tarefa');
buttonAddElement.addEventListener('click', (event) => addListItem());

function addListItem() {
    let listElement = document.querySelector('#lista-tarefas');
    let listItem = document.createElement('li');
    let inputElement = document.querySelector('#texto-tarefa');

    listItem.innerHTML = inputElement.value;
    listElement.appendChild(listItem);

    clearInputField();

    listItem.addEventListener('click', (event) => changeItemColor(listItem));
    listItem.addEventListener('dblclick', (event) => scratchItem(listItem));
}

function clearInputField() {
    let inputElement = document.querySelector('#texto-tarefa');
    inputElement.value = '';
}

function changeItemColor(listItemToChange) {
    listItemToChange.style.backgroundColor = 'rgb(128,128,128)'; 

    let allListItem = document.querySelectorAll('li');
    for (let item = 0; item < allListItem.length; item += 1) {
        if (allListItem[item] !== listItemToChange) {
            allListItem[item].style.backgroundColor = '';
        }
    }
}

function scratchItem(listItemToScratch) {
    listItemToScratch.className = (listItemToScratch.className == 'completed') ? '' : 'completed';
}

let buttonDeleteElement = document.getElementById('apaga-tudo');
buttonDeleteElement.addEventListener('click', (event) => deleteAllListItem());

function deleteAllListItem() {
    let allListItem = document.querySelectorAll('li');
    let listElement = document.querySelector('#lista-tarefas');
    for (let item = 0; item < allListItem.length; item += 1) {
        listElement.removeChild(allListItem[item])
    }
}