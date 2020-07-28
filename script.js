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

    orderList.addEventListener("click", function(event) {
        let clickTask = event.target;
        if (colorTask === "white") {
            clickTask.style.backgroundColor = "rgb(128, 128, 128)";
            colorTask = "grey";
        } else {
            clickTask.style.backgroundColor = "white";
            colorTask = "white";
        }
    })






}