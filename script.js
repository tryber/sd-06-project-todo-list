window.onload=function(){

    localStorage.clear();
    localStorage.setItem("selected-color", "black");

}



function addButton () {

    let orderedList = document.getElementById("lista-tarefas");

    let textInput = document.querySelector("#texto-tarefa");

    let newItem = document.createElement("li");

    newItem.appendChild(document.createTextNode(textInput.value)) ;

    orderedList.appendChild(newItem);
}

let addButtonClick = document.querySelector("#criar-tarefa");

addButtonClick.addEventListener("click", function(){
    addButton ();
});





function selectColor(color){

    localStorage.setItem("selected-color", color);

    if(localStorage.getItem("selected-color")=="rgb(113, 222, 226)"){
        document.getElementById("blue").classList.add("selected")
        document.getElementById("black").classList.remove("selected")
        document.getElementById("yellow").classList.remove("selected")
        document.getElementById("red").classList.remove("selected")
    }
}

//

let blackButton = document.getElementById("black");
blackButton.addEventListener("click", function(){
    selectColor("black");
})