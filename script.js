function saveToLocalStorage() {
  if (typeof Storage !== 'undefined') {
    localStorage.clear();
    const tasks = document.querySelector('#lista-tarefas');
    const objTasks = [];
    const objClasses = [];
    for (let index = 0; index < tasks.children.length; index += 1) {
      objTasks[index] = tasks.children[index].innerText;
      objClasses[index] = tasks.children[index].classList;
    }
    localStorage.setItem('tasks', objTasks.join());
    localStorage.setItem('classes', objClasses.join());
  } else {
    document.write('Sem suporte para Web Storage.');
  }
}

function handleClickTaskElement(event) {
  const taskBackgroundColor = event.target;
  const removeBackgroundColorTask = document.querySelectorAll('#lista');
  for (let index = 0; index < removeBackgroundColorTask.length; index += 1) {
    removeBackgroundColorTask[index].classList.remove('selected');
  }
  taskBackgroundColor.classList.add('selected');
}

function handleDblclickTaskElement(event) {
  const taskCompleted = event.target;
  if (taskCompleted.classList.contains('completed')) {
    taskCompleted.classList.remove('completed');
  } else {
    taskCompleted.classList.add('completed');
  }
}

function getFromLocalStorage() {
  const objTasks = localStorage.getItem('tasks').split(',');
  const objClasses = localStorage.getItem('classes').split(',');
  for (let index = 0; index < objTasks.length; index += 1) {
    const addTask = document.querySelector('#lista-tarefas');
    const list = document.createElement('li');
    list.innerHTML = objTasks[index];
    list.className = objClasses[index];
    list.id = 'lista';
    addTask.appendChild(list);
    list.addEventListener('click', handleClickTaskElement);
    list.addEventListener('dblclick', handleDblclickTaskElement);
  }
}

function createTaskElement() {
  const addNewTask = document.querySelector('#lista-tarefas');
  const textToTask = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  if (textToTask.value !== '') {
    li.innerHTML = textToTask.value;
    li.id = 'lista';
    addNewTask.appendChild(li);
    textToTask.value = '';
    li.addEventListener('click', handleClickTaskElement);
    li.addEventListener('dblclick', handleDblclickTaskElement);
  }
}

function removeAllTasks() {
  const allTasks = document.querySelector('#lista-tarefas');
  while (allTasks.firstChild) {
    allTasks.removeChild(allTasks.lastChild);
  }
}

function removeCompletedTasks() {
  const allCompletedTasks = document.getElementsByClassName('completed');
  while (allCompletedTasks.length > 0) {
    allCompletedTasks[0].remove();
  }
}

function removeSelectedTask() {
  const selectedTask = document.getElementsByClassName('selected');
  while (selectedTask.length > 0) {
    selectedTask[0].remove();
  }
}

function moveUpSelectedTask() {
  const tasksToMoveUp = document.querySelectorAll('#lista');
  for (let index = 1; index < tasksToMoveUp.length; index += 1) {
    if (tasksToMoveUp[index].classList.contains('selected')) {
      const liPrevClass = tasksToMoveUp[index - 1].className;
      const liPrevTask = tasksToMoveUp[index - 1].innerText;
      tasksToMoveUp[index - 1].innerText = tasksToMoveUp[index].innerText;
      tasksToMoveUp[index - 1].className = tasksToMoveUp[index].className;
      tasksToMoveUp[index].innerText = liPrevTask;
      tasksToMoveUp[index].className = liPrevClass;
      break;
    }
  }
}

function moveDownSelectedTask() {
  const tasksToMoveDown = document.querySelectorAll('#lista');
  for (let index = 0; index < tasksToMoveDown.length - 1; index += 1) {
    if (tasksToMoveDown[index].classList.contains('selected')) {
      const liNextClass = tasksToMoveDown[index + 1].className;
      const LiNextTask = tasksToMoveDown[index + 1].innerText;
      tasksToMoveDown[index + 1].innerText = tasksToMoveDown[index].innerText;
      tasksToMoveDown[index + 1].className = tasksToMoveDown[index].className;
      tasksToMoveDown[index].innerText = LiNextTask;
      tasksToMoveDown[index].className = liNextClass;
      break;
    }
  }
}
const buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener('click', createTaskElement);

const buttonRemoveAllTasks = document.querySelector('#apaga-tudo');
buttonRemoveAllTasks.addEventListener('click', removeAllTasks);

const buttonRemoveCompletedTasks = document.querySelector('#remover-finalizados');
buttonRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);

const buttonSaveTasks = document.querySelector('#salvar-tarefas');
buttonSaveTasks.addEventListener('click', saveToLocalStorage);

const buttonRemoveSelectedTask = document.querySelector('#remover-selecionado');
buttonRemoveSelectedTask.addEventListener('click', removeSelectedTask);

const buttonMoveUpSelectedTask = document.querySelector('#mover-cima');
buttonMoveUpSelectedTask.addEventListener('click', moveUpSelectedTask);

const buttonMoveDownSelectedTask = document.querySelector('#mover-baixo');
buttonMoveDownSelectedTask.addEventListener('click', moveDownSelectedTask);

window.onload = function () {
  if (typeof Storage !== 'undefined') {
    if (localStorage.tasks !== undefined) {
      getFromLocalStorage();
    }
  } else {
    document.write('Sem suporte para Web Storage.');
  }
};

// let addTaskButton = document.querySelector("#criar-tarefa");
// let taskInput = document.querySelector("#texto-tarefa");
// let taskList = document.querySelector("#lista-tarefas");
// let deleteTasksButton = document.querySelector("#apaga-tudo");
// let removeDoneTasksButton = document.querySelector("#remover-finalizados");
// let removeSelectedTaskButton = document.querySelector("#remover-selecionado");
// let moveUpButton = document.querySelector("#mover-cima")
// let moveDownButton = document.querySelector("#mover-baixo")

// addTaskButton.addEventListener("click", addTask);
// taskList.addEventListener("dblclick", tickTask);
// taskList.addEventListener("click", highlightTask);
// deleteTasksButton.addEventListener("click", deleteTasks);
// removeDoneTasksButton.addEventListener("click", removeDoneTasks);
// removeSelectedTaskButton.addEventListener("click", removeSelectedTask);
// moveUpButton.addEventListener("click", moveTaskUp);
// moveDownButton.addEventListener("click", moveTaskDown);


// function addTask(event){
//     let newLi = document.createElement("li");
//     newLi.innerText = taskInput.value;
//     taskList.appendChild(newLi);
//     taskInput.value = "";
// }

// let previousSelectedTask;
// let currentSelectedTask;
// function highlightTask(event){
//     previousSelectedTask = currentSelectedTask;
//     currentSelectedTask = event.target;
//     currentSelectedTask.classList.add("selected");
//     if(previousSelectedTask === null){
    
//     } else if(previousSelectedTask === undefined){
    
//     } else{
//         previousSelectedTask.classList.remove("selected");
//     };


//     // if(event.target.tagName.toLowerCase() == "li" && previousSelectedTask == ""){
//     //     currentSelectedTask = event.target;
//     //     currentSelectedTask.classList.add("selected");
//     //     previousSelectedTask = currentSelectedTask;
//     // } else if (event.target.tagName.toLowerCase() == "li"){
//     //     currentSelectedTask = event.target;
//     //     currentSelectedTask.classList.add("selected");
//     //     previousSelectedTask.classList.remove("selected");
//     //     previousSelectedTask = document.querySelector(".selected");
//     // }
// }

// function tickTask(event){
//     if (event.target.tagName.toLowerCase() == "li" && event.target.classList.contains("completed")){
//         event.target.classList.remove("completed");
//     } else if (event.target.tagName.toLowerCase() == "li"){
//         event.target.classList.add("completed");
//     }
// }


// function deleteTasks(){
//     let tasks = document.querySelectorAll("li");
//     for (index = 0; index < tasks.length; index += 1){
//         taskList.removeChild(tasks[index]);
//     }
// }

// function removeDoneTasks(){
//     let doneTasks = document.querySelectorAll(".completed");
//     for (index = 0; index < doneTasks.length; index += 1){
//         taskList.removeChild(doneTasks[index]);
//     }
// }

// function removeSelectedTask(){
//     let selectedTask = document.querySelector(".selected");
//     taskList.removeChild(selectedTask);
// }

// function moveTaskUp (){
//   const tasksToMoveUp = document.querySelectorAll('li');
//   for (let index = 1; index < tasksToMoveUp.length; index += 1) {
//     if (tasksToMoveUp[index].classList.contains('selected')) {
//       const liPrevClass = tasksToMoveUp[index - 1].className;
//       const liPrevTask = tasksToMoveUp[index - 1].innerText;
//       tasksToMoveUp[index - 1].innerText = tasksToMoveUp[index].innerText;
//       tasksToMoveUp[index - 1].className = tasksToMoveUp[index].className;
//       tasksToMoveUp[index].innerText = liPrevTask;
//       tasksToMoveUp[index].className = liPrevClass;
//       break;
//     }
//   }
// }
// // function moveTaskUp(){
// //     let selectedTask = document.querySelector(".selected");
// //     if (selectedTask == taskList.firstElementChild){
// //     }else{
// //         let selectedTask = document.querySelector(".selected");
// //         let selectedTaskText = selectedTask.innerText;
// //         let aboveTask = selectedTask.previousSibling;
// //         let aboveTaskText = aboveTask.innerText;

// //         aboveTask.innerText = selectedTaskText;
// //         aboveTask.classList.add("selected");

// //         selectedTask.innerText = aboveTaskText;
// //         selectedTask.classList.remove("selected");    

// //         if(selectedTask.classList.contains("completed") && aboveTask.classList.contains("completed")){
// //         } else if(selectedTask.classList.contains("completed")){
// //             aboveTask.classList.add("completed");
// //             selectedTask.classList.remove("completed");
// //         } else if(aboveTask.classList.contains("completed")){
// //             aboveTask.classList.remove("completed");
// //             selectedTask.classList.add("completed");
// //         }
// //     }
// // }

// function moveTaskDown(){
//     let selectedTask = document.querySelector(".selected");
//     if(selectedTask == taskList.lastElementChild){
//     }else{
//         let selectedTaskText = selectedTask.innerText;
//         let bellowTask = selectedTask.nextElementSibling;
//         let bellowTaskText = bellowTask.innerText;

//         bellowTask.innerText = selectedTaskText;
//         selectedTask.innerText = bellowTaskText;

//         selectedTask.classList.remove("selected");
//         bellowTask.classList.add("selected");

//         if(selectedTask.classList.contains("completed") && bellowTask.classList.contains("completed")){
//         } else if(selectedTask.classList.contains("completed")){
//             bellowTask.classList.add("completed");
//             selectedTask.classList.remove("completed");
//         } else if(bellowTask.classList.contains("completed")){
//             bellowTask.classList.remove("completed");
//             selectedTask.classList.add("completed");
//         }
//     }
// }