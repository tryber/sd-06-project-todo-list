//addButton


function addButton () {

    let orderedList = document.getElementById("lista-tarefas");

    let textInput = document.querySelector("#texto-tarefa");

    let newItem = document.createElement("li");

    newItem.appendChild(document.createTextNode(textInput.value)) ;

    orderedList.appendChild(newItem);

    newItem.className="tarefa";
}

let addButtonClick = document.querySelector("#criar-tarefa");

addButtonClick.addEventListener("click", function(){
    addButton ();
})



//changeBackgroundColor


let itemSelecionado = document.getElementsByClassName("selected");
let lista = document.querySelector("#lista-tarefas")

lista.addEventListener("click" , function(event){

    if (event.target.classList.contains("tarefa") && itemSelecionado.length === 0){

      event.target.classList.add("selected");

    }else{

      event.target.classList.contains("tarefa") && itemSelecionado.length === 1

    }

    itemSelecionado[0].className = "tarefa";
    event.target.classList.add("selected");
});


//riscar tarefa finalizada


lista.addEventListener("dblclick" , function(event){

    if (event.target.classList.contains("completed")){

        event.target.classList.remove("tarefa");

    }
    else{

        event.target.className="completed";

    }

})

//botao apaga-tudo

document.getElementById("apaga-tudo").addEventListener("click", function(){

    let lista = document.getElementById("lista-tarefas");
    lista.innerHTML = '';
})

//botao remover finalizados

document.getElementById("remover-finalizados").addEventListener("click", function(){

    let lista = document.getElementById("lista-tarefas");
    let itensFinalizados = document.querySelectorAll(".completed");
    lista.removeChild(itensFinalizados)
})