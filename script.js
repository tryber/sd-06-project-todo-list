
let buttonElement = document.getElementById('criar-tarefa');
buttonElement.addEventListener('click', (event) => addListItem());

function addListItem() {
    let listElement = document.querySelector('#lista-tarefas');
    let listItem = document.createElement('li');
    let inputElement = document.querySelector('#texto-tarefa');

    listItem.innerHTML = inputElement.value;
    listElement.appendChild(listItem);

    clearInputField();

    listItem.addEventListener('click', (event) => changeItemColor(listItem));
}

function clearInputField() {
    let inputElement = document.querySelector('#texto-tarefa');
    inputElement.value = '';
}

function changeItemColor(listItemToChange) {
    listItemToChange.style.backgroundColor = 'rgb(128,128,128)'; 
}