window.onload = function () {

let buttonAdd = document.querySelector("#criar-tarefa")
let campoTexto = document.getElementById("texto-tarefa")


//Add elementos na lista
buttonAdd.addEventListener("click", function(){
    let linha = document.createElement("li")
    document.getElementById("lista-tarefas").appendChild(linha)
    linha.innerHTML = campoTexto.value
    campoTexto.value = ""
    
})



}