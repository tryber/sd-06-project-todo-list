let addTask = document.querySelector("#criar-tarefa");
addTask.addEventListener("click", function() {
    let task = document.createElement("li");
    task.className = "task";
    let texto = document.querySelector("#texto-tarefa");
    task.innerHTML = texto.value;
    document.querySelector("#lista-tarefas").appendChild(task);
    texto.value = "";
})
let selected = document.querySelector("#lista-tarefas");
selected.addEventListener("click", function(){
    if (document.querySelector(".selected") != null) {
        document.querySelector(".selected").style.backgroundColor = "white";
        document.querySelector(".selected").classList.remove("selected");
    }
    event.target.style.backgroundColor = "rgb(128,128,128)";
    event.target.classList.add("selected");
})
selected.addEventListener("dblclick", function() {
    if (event.target.className === "task selected"){
        event.target.classList.add("completed");
    }else {
        event.target.classList.remove("completed");
    }
})

let removeSelected= document.querySelector("#remover-selecionado");
removeSelected.addEventListener("click",function(){
    let itemSelected = document.querySelector(".selected");
    itemSelected.remove();
})
let clear = document.querySelector("#apaga-tudo");
clear.addEventListener("click", function(){
    while (selected.firstChild) {
        selected.removeChild(selected.firstChild);
      }
})
let clearFinalized = document.querySelector("#remover-finalizados");
clearFinalized.addEventListener("click", function(){
    let finished = document.querySelectorAll(".completed");
    for (let i = 0; i < finished.length; i++){
        selected.removeChild(finished[i]);
    }
})


