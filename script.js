let addTaskButton = document.querySelector("#criar-tarefa");
let taskInput = document.querySelector("#texto-tarefa");
let taskList = document.querySelector("#lista-tarefas");


addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", highlightTask);

function addTask(event){
    let newLi = document.createElement("li");
    newLi.innerText = taskInput.value;
    taskList.appendChild(newLi);
    taskInput.value = "";
}

function highlightTask(event){
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
}