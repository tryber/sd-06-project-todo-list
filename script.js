//addButton


function addButton () {

    let orderedList = document.getElementById("lista-tarefas");

    let textInput = document.querySelector("#texto-tarefa");

    let newItem = document.createElement("li");

    orderedList.appendChild(newItem);

    newItem.innerText = textInput.value;

    newItem.className="tarefa";

    textInput.value = "";
}

let addButtonClick = document.querySelector("#criar-tarefa");

addButtonClick.addEventListener("click", function(){
    addButton ();
})



//changeBackgroundColor

let list = document.getElementById("lista-tarefas");

list.addEventListener('click', function (event) {
    const li = event.target;
    for (let i = 0; i < list.childNodes.length; i += 1) {
      if (list.childNodes[i] !== li) {
        list.childNodes[i].style.backgroundColor = 'white';
      }
    }

    li.style.backgroundColor = 'rgb(128, 128, 128)';

});


//riscar tarefa finalizada


list.addEventListener("dblclick" , function(event){

    if (event.target.classList.contains("completed")){

        event.target.classList.remove("completed");

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

    let li = document.querySelector("li");
    li.addEventListener("click", function(event){
        li.removeChild(".completed");
        event.stopPropagation();
    });
    
})