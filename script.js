let addTaskButton = document.querySelector("#criar-tarefa");
let taskInput = document.querySelector("#texto-tarefa")

addTaskButton.addEventListener("click", addTask);

function addTask(event){
    let taskList = document.querySelector("#lista-tarefas");
    let newLi = document.createElement("li");
    newLi.innerText = taskInput.value;
    taskList.appendChild(newLi);
    taskInput.value = "";
}