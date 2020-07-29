window.onload = function() {
    
    let listContent = document.querySelector("#texto-tarefa");
    let btnTask = document.querySelector("#criar-tarefa");
    let orderList = document.querySelector("#lista-tarefas");

    btnTask.addEventListener("click", function() {
        let newLI = document.createElement("li");
        newLI.setAttribute("class", "listTask")
        newLI.innerHTML = listContent.value;
        orderList.appendChild(newLI);
        listContent.value = "";
    })

    let colorTask = "white";
    let ultimo  = document.createElement("li");

    ultimo.style.backgroundColor = "white";
    orderList.addEventListener("click", function(event) {
        let clickTask = event.target;
            ultimo.style.backgroundColor = "white";
            clickTask.style.backgroundColor = "rgb(128, 128, 128)";
            ultimo = clickTask;
    })

    orderList.addEventListener("dblclick", function(event) {
        let markTask = event.target;
        if (markTask.classList.contains("completed")) {
            markTask.style.textDecoration = "";
            markTask.classList.remove("completed");
        } else {
            markTask.style.textDecoration = "line-through solid rgb(0, 0, 0)"
            markTask.classList.add("completed");
        }
    })

    let removeFinalizado = document.querySelector("#remover-finalizados");

    removeFinalizado.addEventListener("click", function(evnt) {
        let removerFinal = document.querySelectorAll(".completed");
        for (i = 0; i < removerFinal.length; i += 1){
            orderList.removeChild(removerFinal[i]);
        }
    })





}