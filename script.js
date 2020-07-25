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
    
    linha.addEventListener("click", function(){
        if (linha.className != "cor-fundo"){
            linha.className = "cor-fundo"
        }else{
            linha.className = ""
        }
            //linha.style.backgroundColor = "rgb(128,128,128)"

    })

    buttonDel.addEventListener("click", function(){
        document.getElementById("lista-tarefas").removeChild(linha)
    })

    linha.addEventListener("dblclick", function(){
        if(linha.className != "completed"){
            linha.className = "completed"
        }else {
            linha.className = ""
    }
})

    buttonEnd.addEventListener("click", function(){
        document.querySelector(".completed").remove()
    })



})

}