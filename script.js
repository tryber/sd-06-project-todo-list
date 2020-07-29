window.onload = function() {
    let texto = document.querySelector("#texto-tarefa");
    let bAdicionar = document.querySelector("#criar-tarefa");
    let listaTarefas = document.querySelector("#lista-tarefas");

    bAdicionar.addEventListener("click", function(event) {
        let tarefa = document.createElement("li");
        tarefa.innerText = texto.value;
        listaTarefas.appendChild(tarefa);
        texto.value = "";   
    });
}