window.onload = function(){
    var inptTarefa = document.querySelector("#texto-tarefa");
    var btnTarefa = document.querySelector("#criar-tarefa");
    var lista = document.querySelector("#lista-tarefas");



    btnTarefa.addEventListener("click", function(){
       var insideList = document.createElement("li");
       lista.appendChild(insideList)
       insideList.innerText = inptTarefa.value;
       inptTarefa.value = "";
    })
}