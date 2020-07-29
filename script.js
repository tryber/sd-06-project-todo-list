let addTaskButton = document.querySelector("#criar-tarefa");
let taskInput = document.querySelector("#texto-tarefa");
let taskList = document.querySelector("#lista-tarefas");
let previousSelectedTask = "";
let currentSelectedTask = "";



addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", highlightTask);
taskList.addEventListener("dblclick", tickTask);



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
        previousSelectedTask = currentSelectedTask;
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
