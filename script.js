window.onload = function () {


    let texto = document.querySelector("#texto-tarefa");
    let bAdicionar = document.querySelector("#criar-tarefa");
    let listaTarefas = document.querySelector("#lista-tarefas");
    let bLimpar = document.querySelector("#apaga-tudo");
    let bLImparCompletos = document.querySelector("#remover-finalizados");
    

    bAdicionar.addEventListener("click", function (event) {
        if (texto.value === "") {
            alert("Caixa vazia");
        } else {
            let tarefa = document.createElement("li");
            tarefa.innerText = texto.value;
            listaTarefas.appendChild(tarefa);
            texto.value = "";
        }
        
    });

    let ultimoSelecionado = listaTarefas;
    listaTarefas.addEventListener("click", function (event) {        
        let selecionado1 = event.target;
        if (selecionado1.id !== "lista-tarefas") {        
            if (selecionado1.children.length === 0){
                selecionado1 = selecionado1.parentElement.parentElement;
            }
                       
            ultimoSelecionado.style.backgroundColor = "";
            selecionado1.style.backgroundColor = "rgb(128,128,128)";
            ultimoSelecionado = selecionado1;           
        }

    });

    listaTarefas.addEventListener("dblclick", function (event) {
        let selecionado2 = event.target;
        if (selecionado2.id !== "lista-tarefas") { 
            if (selecionado2.children.length === 0){
                selecionado2 = selecionado2.parentElement.parentElement;
            }
            
            if (selecionado2.className === "completed"){
                selecionado2.className = "";
            } else {
                selecionado2.className = "completed";
            }
            
        }

    });

    bLimpar.addEventListener("click", function () {
        let tamanhoLista = listaTarefas.children.length
        for (let n = 0; n < tamanhoLista; n += 1) {
            listaTarefas.removeChild(listaTarefas.firstElementChild);
        }

    });

    /* bLImparCompletos.addEventListener("click", function (event) {
        let tamanhoLista = listaTarefas.children.length
        for (let n = 0; n < tamanhoLista; n += 1) {
            if (listaTarefas.children[n].className === "completed") {
                listaTarefas.removeChild(listaTarefas.children[n]);
                n -= 1;
            }
            
        }

    }); */

}
