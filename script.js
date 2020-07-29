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

    let click1 = 0;
    listaTarefas.addEventListener("click", function (event) {
        if (click1 === 0) {
            event.target.className = " selecionado";
            click1 = 1;
        } else {
            document.querySelector(".selecionado").className = "";
            event.target.className = " selecionado";
        }

    });

    /* listaTarefas.addEventListener("dblclick", function (event) {
                

    }); */

}
