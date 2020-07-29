let addTaskButton = document.querySelector("#criar-tarefa");
let taskInput = document.querySelector("#texto-tarefa");
let taskList = document.querySelector("#lista-tarefas");
let previousSelectedTask = "";
let currentSelectedTask = "";
let deleteTasksButton = document.querySelector("#apaga-tudo");
let removeDoneTasksButton = document.querySelector("#remover-finalizados");
let removeSelectedTaskButton = document.querySelector("#remover-selecionado");
let moveUpButton = document.querySelector("#mover-cima")
let moveDownButton = document.querySelector("#mover-baixo")

addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", highlightTask);
taskList.addEventListener("dblclick", tickTask);
deleteTasksButton.addEventListener("click", deleteTasks);
removeDoneTasksButton.addEventListener("click", removeDoneTasks);
removeSelectedTaskButton.addEventListener("click", removeSelectedTask);
moveUpButton.addEventListener("click", moveTaskUp);
moveDownButton.addEventListener("click", moveTaskDown);


function addTask(event){
    let newLi = document.createElement("li");
    newLi.innerText = taskInput.value;
    taskList.appendChild(newLi);
    taskInput.value = "";
}

function highlightTask(event){
    if(event.target.tagName.toLowerCase() == "li" && previousSelectedTask == ""){
        currentSelectedTask = event.target;
        currentSelectedTask.classList.add("selected");
        previousSelectedTask = currentSelectedTask;
    } else if (event.target.tagName.toLowerCase() == "li"){
        previousSelectedTask = document.querySelector(".selected");
        currentSelectedTask = event.target;
        currentSelectedTask.classList.add("selected");
        previousSelectedTask.classList.remove("selected");
    }
}

function tickTask(event){
    if (event.target.tagName.toLowerCase() == "li" && event.target.classList.contains("completed")){
        event.target.classList.remove("completed");
    } else if (event.target.tagName.toLowerCase() == "li"){
        event.target.classList.add("completed");
    }
}


function deleteTasks(){
    let tasks = document.querySelectorAll("li");
    for (index = 0; index < tasks.length; index += 1){
        taskList.removeChild(tasks[index]);
    }
}

function removeDoneTasks(){
    let doneTasks = document.querySelectorAll(".completed");
    for (index = 0; index < doneTasks.length; index += 1){
        taskList.removeChild(doneTasks[index]);
    }
}

function removeSelectedTask(){
    let selectedTask = document.querySelector(".selected");
    taskList.removeChild(selectedTask);
}

function moveTaskUp(){
    let selectedTask = document.querySelector(".selected");
    if (selectedTask == taskList.firstElementChild){
    }else{
        let selectedTask = document.querySelector(".selected");
        let selectedTaskText = selectedTask.innerText;
        let aboveTask = selectedTask.previousSibling;
        let aboveTaskText = aboveTask.innerText;

        aboveTask.innerText = selectedTaskText;
        aboveTask.classList.add("selected");

        selectedTask.innerText = aboveTaskText;
        selectedTask.classList.remove("selected");    

        if(selectedTask.classList.contains("completed") && aboveTask.classList.contains("completed")){
        } else if(selectedTask.classList.contains("completed")){
            aboveTask.classList.add("completed");
            selectedTask.classList.remove("completed");
        } else if(aboveTask.classList.contains("completed")){
            aboveTask.classList.remove("completed");
            selectedTask.classList.add("completed");
        }
    }
}

function moveTaskDown(){
    let selectedTask = document.querySelector(".selected");
    if(selectedTask == taskList.lastElementChild){
    }else{
        let selectedTaskText = selectedTask.innerText;
        let bellowTask = selectedTask.nextElementSibling;
        let bellowTaskText = bellowTask.innerText;

        bellowTask.innerText = selectedTaskText;
        selectedTask.innerText = bellowTaskText;

        selectedTask.classList.remove("selected");
        bellowTask.classList.add("selected");

        if(selectedTask.classList.contains("completed") && bellowTask.classList.contains("completed")){
        } else if(selectedTask.classList.contains("completed")){
            bellowTask.classList.add("completed");
            selectedTask.classList.remove("completed");
        } else if(bellowTask.classList.contains("completed")){
            bellowTask.classList.remove("completed");
            selectedTask.classList.add("completed");
        }
    }
}