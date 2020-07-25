window.onload = function() {
    let botao = document.querySelector("#criar-tarefa")
    let caixaTexto = document.querySelector("#texto-tarefa")
    
    botao.addEventListener("click", function() {
    let linhaLista = document.createElement("li")
    document.getElementById("lista-tarefas").appendChild(linhaLista)
    linhaLista.innerHTML = caixaTexto.value
    caixaTexto.value = ""
    linhaLista.addEventListener("click", function(){
            linhaLista.style.backgroundColor = "rgb(128, 128, 128)"
        })
    let botaoApagaLista = document.querySelector("#apaga-tudo")
    botaoApagaLista.addEventListener("click", function() {
        document.getElementById("lista-tarefas").removeChild(linhaLista)
        }) 
        linhaLista.addEventListener("dblclick", function() {
        if(linhaLista.className != "completed") {
            linhaLista.className = "completed"
        } else {
            linhaLista.className = ""
        }
        let botaoFinalizados = document.querySelector("#remover-finalizados")
    botaoFinalizados.addEventListener("click", function() {
            document.querySelector(".completed").remove()
    })
    })
    })
    }