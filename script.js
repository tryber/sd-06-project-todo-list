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

    let click1 = 0;
    listaTarefas.addEventListener("click", function(event) {
        if (click1 === 0){
            // primeiro click declaro a variavel
            let ultimoSelecionado = event.target;
            event.target.style.backgroundColor = "rgb(128,128,128)";
            click1 += 1;
        } else {
            // no segundo click a variavel parece que não guardou valor nenhum e o codigo da erro porque
            ultimoSelecionado.style.backgroundColor = "";
            event.target.style.backgroundColor = "rgb(128,128,128)";
            ultimoSelecionado = event.target;
        }        
    });

}