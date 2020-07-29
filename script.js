
// Functions
const functionalities = {
  // Add a task to list
  addListItem: function addListItem(newOrSavedIndicator, taskName, taskClass) {
    const listElement = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    const inputElement = document.querySelector('#texto-tarefa');
    if (newOrSavedIndicator === 0) {
        listItem.innerHTML = inputElement.value;
    } else {  
        listItem.innerHTML = taskName;
        listItem.className = taskClass; 
    }
    listElement.appendChild(listItem);
    functionalities.clearInputField();
    listItem.addEventListener('click', (event) => functionalities.changeItemColor(listItem)); 
    listItem.addEventListener('dblclick', (event) => functionalities.scratchItem(listItem)); 
  },
  // Delete selected item on list
  deleteSelectedItem: function deleteSelectedItem() {
    const SelectedListItem = document.querySelector('.selected');
    const listElement = document.querySelector('#lista-tarefas');
    listElement.removeChild(SelectedListItem);
  },
  // Clear the input field
  clearInputField: function clearInputField() {
    const inputElement = document.querySelector('#texto-tarefa');
    inputElement.value = '';
  },
  // Change background color of list item 
  changeItemColor: function changeItemColor(listItemToChange) {
    if (listItemToChange.className.includes('selected') === false) {
      listItemToChange.className = listItemToChange.className.concat(' selected'); 
    }
    const allListItem = document.querySelectorAll('li');
    for (let item = 0; item < allListItem.length; item += 1) {
      if (allListItem[item] !== listItemToChange) {
        allListItem[item].className = allListItem[item].className.replace('selected', ''); 
      }
    }
  },
  // Scratch the list item
  scratchItem: function scratchItem(listItemToScratch) {
    if (listItemToScratch.className.includes('completed') === true) {
      listItemToScratch.className = listItemToScratch.className.replace('completed', '');
    } else {
      listItemToScratch.className = listItemToScratch.className.concat(' completed');
    }
  },
  // Delete all list itens
  deleteAllListItem: function deleteAllListItem() {
    const allListItem = document.querySelectorAll('li');
    const listElement = document.querySelector('#lista-tarefas');
    for (let item = 0; item < allListItem.length; item += 1) {
      listElement.removeChild(allListItem[item])
    }
  },
  // Delete all completed tasks
  deleteCompletedItens: function deleteCompletedListItens() {
    const allCompletedListItem = document.querySelectorAll('.completed');
    const listElement = document.querySelector('#lista-tarefas');
    for (let item = 0; item < allCompletedListItem.length; item += 1) {
      listElement.removeChild(allCompletedListItem[item])
    }
  },
  // Save the list of tasks on localStorage
  saveList: function saveListItem() {
    const allListItem = document.querySelectorAll('li');
    for (let item = 0; item < allListItem.length; item += 1) {
      let taskName = 'task' + item;
      let taskClass = 'taskClass' + item;
      localStorage[taskName] = allListItem[item].innerHTML;
      localStorage[taskClass] = allListItem[item].className.replace('selected', '');
      localStorage.numberOfTasks = allListItem.length;
    }
  },
  //Recover the list from localStorage
  recoverList: function recover() {
    for (let item = 0; item < localStorage.numberOfTasks; item += 1) {
      let taskName = 'task' + item;
      let taskClass = 'taskClass' + item;
      functionalities.addListItem(1, localStorage[taskName], localStorage[taskClass]);
    }
  },
  // Move task up or down
  move: {
    moveUp: function MoveUp() {
      const itemSelected = document.querySelector('.selected');
      const allListItem = document.querySelectorAll('li');
      let item = 0;
      while (itemSelected !== allListItem[item]) {
        item += 1;
      }
      const positionInList = item;
      if (positionInList != 0) {
        const htmlToPass = itemSelected.innerHTML;
        const classToPass = itemSelected.className;
        allListItem[positionInList].innerHTML = allListItem[positionInList - 1].innerHTML;
        allListItem[positionInList].className = allListItem[positionInList - 1].className;
        allListItem[positionInList - 1].innerHTML = htmlToPass;
        allListItem[positionInList - 1].className = classToPass;
      }
    },
    moveDown: function MoveDown() {
      const itemSelected = document.querySelector('.selected');
      const allListItem = document.querySelectorAll('li');
      let item = 0;
      while (itemSelected !== allListItem[item]) {
        item += 1;
      }
      const positionInList = item;
      if (positionInList != allListItem.length - 1) {
        const htmlToPass = itemSelected.innerHTML;
        const classToPass = itemSelected.className;
        allListItem[positionInList].innerHTML = allListItem[positionInList + 1].innerHTML;
        allListItem[positionInList].className = allListItem[positionInList + 1].className;
        allListItem[positionInList + 1].innerHTML = htmlToPass;
        allListItem[positionInList + 1].className = classToPass;
      }
    },
  },
};

window.onload = function () {
  // Elements
  // 1. Button 'Add Task'
  // 2. Button 'Remove Task'
  // 3. Button 'Delete All Tasks'
  // 4. Button 'Delete Completed Tasks'
  // 5. Button 'Save List'
  // 6. Button 'Move Up'
  // 7. Button 'Move Down'
  const buttonAddElement = document.getElementById('criar-tarefa');
  const buttonRemoveTaskElement = document.getElementById('remover-selecionado');
  const buttonDeleteElement = document.getElementById('apaga-tudo');
  const buttonDeleteCompletedElement = document.getElementById('remover-finalizados');
  const buttonSaveElement = document.getElementById('salvar-tarefas');
  const buttonMoveUpTaskElement = document.getElementById('mover-cima');
  const buttonMoveDownTaskElement = document.getElementById('mover-baixo');


  // Events
  // 1. Event to add task when click on button
  // 2. Event to deleted the selected task when click on button
  // 3. Event to delete all tasks when click on button
  // 4. Event to delete all completed (scratched) task when click on button
  // 5. Event to save the list of tasks when click on button
  // 6. Event to move up a task when click on button
  // 7. Event to move down a task when click on button
  // 8. Call to recover data saved on localSotorage when the window is loaded
  buttonAddElement.addEventListener('click', (event) => functionalities.addListItem(0, null, null));
  buttonRemoveTaskElement.addEventListener('click', functionalities.deleteSelectedItem);
  buttonDeleteElement.addEventListener('click', functionalities.deleteAllListItem); 
  buttonDeleteCompletedElement.addEventListener('click', functionalities.deleteCompletedItens);
  buttonSaveElement.addEventListener('click', functionalities.saveList);
  buttonMoveUpTaskElement.addEventListener('click', functionalities.move.moveUp);
  buttonMoveDownTaskElement.addEventListener('click',  functionalities.move.moveDown); 
  functionalities.recoverList();
};