
//Addind a task
let buttonAddElement = document.getElementById('criar-tarefa');
buttonAddElement.addEventListener('click', (event) => addListItem(0, null, null));

function addListItem(newOrSavedIndicator, taskName, taskClass) {
    let listElement = document.querySelector('#lista-tarefas');
    let listItem = document.createElement('li');
    let inputElement = document.querySelector('#texto-tarefa');

    if (newOrSavedIndicator == 0) {
        listItem.innerHTML = inputElement.value;
    } else {  
        listItem.innerHTML = taskName;
        listItem.className = taskClass; 
    }

    listElement.appendChild(listItem);

    clearInputField();

    listItem.addEventListener('click', (event) => changeItemColor(listItem));
    listItem.addEventListener('dblclick', (event) => scratchItem(listItem));
}

//Clearing the input field
function clearInputField() {
    let inputElement = document.querySelector('#texto-tarefa');
    inputElement.value = '';
}

//Changing task background color 
function changeItemColor(listItemToChange) {
    listItemToChange.style.backgroundColor = 'rgb(128,128,128)'; 

    let allListItem = document.querySelectorAll('li');
    for (let item = 0; item < allListItem.length; item += 1) {
        if (allListItem[item] !== listItemToChange) {
            allListItem[item].style.backgroundColor = '';
        }
    }
}

//Scratching task
function scratchItem(listItemToScratch) {
    listItemToScratch.className = (listItemToScratch.className == 'completed') ? '' : 'completed';
}

//Deleting all tasks
let buttonDeleteElement = document.getElementById('apaga-tudo');
buttonDeleteElement.addEventListener('click', (event) => deleteAllListItem());

function deleteAllListItem() {
    let allListItem = document.querySelectorAll('li');
    let listElement = document.querySelector('#lista-tarefas');
    for (let item = 0; item < allListItem.length; item += 1) {
        listElement.removeChild(allListItem[item])
    }
}

//Deleting completed tasks
let buttonDeleteCompletedElement = document.getElementById('remover-finalizados');
buttonDeleteCompletedElement.addEventListener('click', (event) => deleteCompletedListItem());

function deleteCompletedListItem() {
    let allCompletedListItem = document.querySelectorAll('.completed');
    let listElement = document.querySelector('#lista-tarefas');
    for (let item = 0; item < allCompletedListItem.length; item += 1) {
        listElement.removeChild(allCompletedListItem[item])
    }
}


//Saving tasks on localStorage
let buttonSaveElement = document.getElementById('salvar-tarefas');
buttonSaveElement.addEventListener('click', (event) => saveListItem());

function saveListItem() {
    let allListItem = document.querySelectorAll('li');
    for (let item = 0; item < allListItem.length; item += 1) {
      let taskName = 'task' + item;
      let taskClass = 'taskClass' + item;
      localStorage[taskName] = allListItem[item].innerHTML;
      localStorage[taskClass] = allListItem[item].className;
      localStorage.numerOfTasks = allListItem.length;
    }
}

//Recovering tasks from localStorage
for (let item = 0; item < localStorage.numerOfTasks; item += 1) {
    let taskName = 'task' + item;
    let taskClass = 'taskClass' + item;
    addListItem(1, localStorage[taskName], localStorage[taskClass]);
}

