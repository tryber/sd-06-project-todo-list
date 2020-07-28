window.onload = function(){
    var inptTarefa = document.querySelector("#texto-tarefa");
    var btnTarefa = document.querySelector("#criar-tarefa");
    var lista = document.querySelector("#lista-tarefas");
    var apagaTudo = document.querySelector("#apaga-tudo");
    var finalizados  = document.querySelector("#remover-finalizados");

    btnTarefa.addEventListener("click", function(){
       var insideList = document.createElement("li");
       lista.appendChild(insideList)
       insideList.innerText = inptTarefa.value;
       inptTarefa.value = "";
    })
    
    lista.addEventListener("click", function(event){
        for(let i = 1; i < lista.childNodes.length; i += 1){
            lista.childNodes[i].style.backgroundColor = "";
        } 
        event.target.style.backgroundColor = "rgb(128,128,128)";
    })

    lista.addEventListener("dblclick", function(event){
        if(event.target.className == "completed"){
            event.target.className = " ";
        event.target.style.textDecoration = "none";
        }else{
            event.target.className = "completed";
        event.target.style.textDecoration = "line-through solid rgb(0, 0, 0)";
        }

    })
    apagaTudo.addEventListener("click", function(){
        lista.innerHTML = "";
    })
    finalizados.addEventListener("click", function(){
        var finals = lista.querySelectorAll(".completed")
        for(let i = 0; i < finals.length; i += 1){
            lista.removeChild(finals[i])
    
        }
    })



    
}