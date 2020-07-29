window.onload = function() {
    
    let listContent = document.querySelector("#texto-tarefa");
    let btnTask = document.querySelector("#criar-tarefa");
    let orderList = document.querySelector("#lista-tarefas");

    if (JSON.parse(localStorage.savedTasks !== undefined)){
        let retrieveTask = JSON.parse(localStorage.getItem("tasks"))    ;
        for (let i = 0; i < retrieveTask.length; i += 1){
            let newLine = createElement("li");
            newLine.className = retrieveTask[i].className;
            newLine.innerHTML = retrieveTask[i].content;
            newLine.classList.remove("selected");
            if (newLine.classList.contains("completed")) {
                newLine.style.textDecoration = "line-through solid rgb(0, 0, 0)";
            }
            orderList.appendChild(newLine);
        }
    }

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
            ultimo.classList.remove("selected");
            clickTask.style.backgroundColor = "rgb(128, 128, 128)";
            clickTask.classList.add("selected");
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

    let eraseAll = document.querySelector("#apaga-tudo");

    eraseAll.addEventListener("click", function() {
        let pegaLista = document.querySelectorAll(".listTask");
        for (let i = 0; i < pegaLista.length; i += 1){
            orderList.removeChild(pegaLista[i]);
        }
    })

    let saveTasks = document.querySelector("#salvar-tarefas");

    saveTasks.addEventListener("click", function() {
        let pegaLista = document.querySelectorAll("li");
        let savedTasks = [];
        let obj = new Object();
        for (i = 0; i < pegaLista.length; i += 1){
            obj.className = pegaLista[i].className;
            obj.content = pegaLista[i].innerHTML;
            savedTasks.push(obj);
        }
        localStorage.setItem("tasks", JSON.stringify(savedTasks));

    })

    let moveUp = document.querySelector("#mover-cima");

    moveUp.addEventListener("click", function() {
        let listTask2 = document.querySelectorAll("li");
        for (let i = 0; i < listTask2.length; i += 1){
            if (listTask2[i].classList.contains("selected") && i !== 0){
                listTask2[i].parentElement.insertBefore(listTask2[i], listTask2[i - 1]);
            }
        }
        
    })

    let moveDown = document.querySelector("#mover-baixo");
    moveDown.addEventListener("click", function() {
        let listTask2 = document.querySelectorAll("li");
        for (let i = 0; i < listTask2.length - 1; i += 1){
            if (listTask2[i].classList.contains("selected")){
                listTask2[i].parentElement.insertBefore(listTask2[i + 1], listTask2[i]);
            }
        }
        
    })

    let rmvSlc = document.querySelector("#remover-selecionado");

    rmvSlc.addEventListener("click", function() {
        let selectedRm = document.querySelector(".selected");
        selectedRm.parentElement.removeChild(selectedRm);
    })

}