let addTaskButton = document.querySelector("#criar-tarefa");
let taskInput = document.querySelector("#texto-tarefa");
let taskList = document.querySelector("#lista-tarefas");
let previousSelectedTask = "";
let currentSelectedTask = "";



addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", highlightTask);

function addTask(event){
    let newLi = document.createElement("li");
    newLi.innerText = taskInput.value;
    taskList.appendChild(newLi);
    taskInput.value = "";
}

function highlightTask(event){
    if(event.target.tagName.toLowerCase() == "li" && previousSelectedTask == ""){
        currentSelectedTask = event.target;
        currentSelectedTask.className = "selected";
        previousSelectedTask = currentSelectedTask;
    } else if (event.target.tagName.toLowerCase() == "li"){
        previousSelectedTask = currentSelectedTask;
        currentSelectedTask = event.target;
        currentSelectedTask.className = "selected";
        previousSelectedTask.classList.remove("selected");
    }
}
