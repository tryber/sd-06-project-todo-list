window.onload = function () {


    let texto = document.querySelector("#texto-tarefa");
    let bAdicionar = document.querySelector("#criar-tarefa");
    let listaTarefas = document.querySelector("#lista-tarefas");

    bAdicionar.addEventListener("click", function (event) {
        let tarefa = document.createElement("li");
        tarefa.innerText = texto.value;
        listaTarefas.appendChild(tarefa);
        texto.value = "";
    });

    
    listaTarefas.addEventListener("click", function (event) {
        if (document.querySelector(".selecionado")  === null) {
            event.target.className = " selecionado";            
        } else if (event.target.style.textDecoration === "line-through") {
            document.querySelector(".selecionado").className = "";
            event.target.className = " selecionado completed";
        } else {
            document.querySelector(".selecionado").className = "";
            event.target.className = " selecionado";
        }

    });

    listaTarefas.addEventListener("dblclick", function (event) {
        if (event.target.style.textDecoration !== "line-through"){
            event.target.className = " selecionado completed";
        } else {
            event.target.className = " selecionado";
        }
        
    });

}
