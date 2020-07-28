window.onload = function() {
    
    let listContent = document.querySelector("#texto-tarefa");
    let btnTask = document.querySelector("#criar-tarefa");
    let orderList = document.querySelector("#lista-tarefas");

    btnTask.addEventListener("click", function() {
        let newLI = document.createElement("li");
        newLI.innerHTML = listContent.value;
        orderList.insertBefore(newLI, orderList.firstChild);
        listContent.value = "";
    })
}