window.onload = function () {


    let texto = document.querySelector("#texto-tarefa");
    let bAdicionar = document.querySelector("#criar-tarefa");
    let listaTarefas = document.querySelector("#lista-tarefas");
    let bLimpar = document.querySelector("#apaga-tudo");
    let tagsLista = document.querySelectorAll("li");
    

    bAdicionar.addEventListener("click", function (event) {
        let tarefa = document.createElement("li");
        tarefa.innerText = texto.value;
        listaTarefas.appendChild(tarefa);
        texto.value = "";
    });
    
    let click1 = 0;
    let ultimoSelecionado;
    listaTarefas.addEventListener("click", function (event) {
        if (click1 === 0){            
            ultimoSelecionado = event.target;
            event.target.style.backgroundColor = "rgb(128,128,128)";
            click1 = 1;
        } else {            
            ultimoSelecionado.style.backgroundColor = "";
            event.target.style.backgroundColor = "rgb(128,128,128)";
            ultimoSelecionado = event.target;
        }        
    });

    listaTarefas.addEventListener("dblclick", function (event) {
        if (event.target.className === "completed"){
            event.target.className = "";
        } else {
            event.target.className = "completed";
        }       
    });

    bLimpar.addEventListener("click", function (event) {
        const tamanhoLista = listaTarefas.children.length
        for (let n = 0; n < tamanhoLista; n += 1) {
            listaTarefas.removeChild(listaTarefas.firstElementChild);
        }    
    });

}
