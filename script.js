
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
    if (listItemToChange.className.includes('selected') === false) {
    listItemToChange.className = listItemToChange.className.concat(' selected'); 
    }

    let allListItem = document.querySelectorAll('li');
    for (let item = 0; item < allListItem.length; item += 1) {
        if (allListItem[item] !== listItemToChange) {
            allListItem[item].className = allListItem[item].className.replace('selected',''); 
        }
    }
}

//Scratching task
function scratchItem(listItemToScratch) {
    if (listItemToScratch.className.includes('completed') === true) {
        listItemToScratch.className = listItemToScratch.className.replace('completed','');
    } else {
        listItemToScratch.className = listItemToScratch.className.concat(' completed');
    }
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
      localStorage[taskClass] = allListItem[item].className.replace('selected','');
      localStorage.numerOfTasks = allListItem.length;
    }
}

//Recovering tasks from localStorage
for (let item = 0; item < localStorage.numerOfTasks; item += 1) {
    let taskName = 'task' + item;
    let taskClass = 'taskClass' + item;
    addListItem(1, localStorage[taskName], localStorage[taskClass]);
}

//Removing a task   
let buttonRemoveTaskElement = document.getElementById('remover-selecionado');
buttonRemoveTaskElement.addEventListener('click', (event) => deleteSelectedListItem());

function deleteSelectedListItem() {
    let SelectedListItem = document.querySelector('.selected');
    let listElement = document.querySelector('#lista-tarefas');
    listElement.removeChild(SelectedListItem);
}

//Moving a task
let move = {
        moveUp: function MoveUp() {
            let itemSelected = document.querySelector('.selected');
            let allListItem = document.querySelectorAll('li');

            let item = 0;
            while (itemSelected !== allListItem[item]) {
                item += 1;
            }
            let positionInList = item;
            if (positionInList != 0) {
                let htmlToPass = itemSelected.innerHTML;
                let classToPass = itemSelected.className;

                allListItem[positionInList].innerHTML = allListItem[positionInList-1].innerHTML;
                allListItem[positionInList].className = allListItem[positionInList-1].className;

                allListItem[positionInList-1].innerHTML = htmlToPass;
                allListItem[positionInList-1].className = classToPass;
            }
        },
        moveDown: function MoveDown() {
            let itemSelected = document.querySelector('.selected');
            let allListItem = document.querySelectorAll('li');

            let item = 0;
            while (itemSelected !== allListItem[item]) {
                item += 1;
            }
            let positionInList = item;
            if (positionInList != allListItem.length-1) {
                let htmlToPass = itemSelected.innerHTML;
                let classToPass = itemSelected.className;

                allListItem[positionInList].innerHTML = allListItem[positionInList+1].innerHTML;
                allListItem[positionInList].className = allListItem[positionInList+1].className;

                allListItem[positionInList+1].innerHTML = htmlToPass;
                allListItem[positionInList+1].className = classToPass;
            }
        },
}

let buttonMoveUpTaskElement = document.getElementById('mover-cima');
buttonMoveUpTaskElement.addEventListener('click', move['moveUp']);

let buttonMoveDownTaskElement = document.getElementById('mover-baixo');
buttonMoveDownTaskElement.addEventListener('click', move['moveDown']);
