window.onload = function () {

let buttonAdd = document.querySelector("#criar-tarefa")
let campoTexto = document.getElementById("texto-tarefa")
let buttonDel = document.querySelector("#apaga-tudo")
let buttonEnd = document.querySelector("#remover-finalizados")

//Add elementos na lista
buttonAdd.addEventListener("click", function(){
    let linha = document.createElement("li")
    document.getElementById("lista-tarefas").appendChild(linha)
    linha.innerHTML = campoTexto.value
    campoTexto.value = ""
    
//Add cor de fundo nos elementos da lista
    linha.addEventListener("click", function(){
            linha.style.backgroundColor = "rgb(128,128,128)"


    })
//limpar toda a lista
    buttonDel.addEventListener("click", function(){
        document.getElementById("lista-tarefas").removeChild(linha)
    })

//risca elemento das lista
    linha.addEventListener("dblclick", function(){
        if(linha.className != "completed"){
            linha.className = "completed"
        }else {
            linha.className = ""
    }
})

//remove os riscados
    buttonEnd.addEventListener("click", function(){
        document.querySelector(".completed").remove()
    })



})

}