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

let apagaTudo = document.getElementById("apaga-tudo");

apagaTudo.addEventListener('click', function () {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
});

//botao remover finalizados

let apagaFinalizados = document.getElementById("remover-finalizados");

apagaFinalizados.addEventListener('click', function () {
    if (event.target.classList.contains("completed")){
    }

    else{

        while (list.firstChild) {
            list.removeChild(list.firstChild.completed);

        }
    
    }
});