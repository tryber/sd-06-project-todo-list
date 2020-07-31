window.onload = function() {

let tagList = document.querySelector("#lista-tarefas");
let list = document.getElementById("lista-tarefas");
let buttonCreateList = document.querySelector("#criar-tarefa");
let inputText = document.querySelector("#texto-tarefa");

// funcao que cria atag <li> dentro da tag <ol> e recebe o valor digitado no input.
buttonCreateList.addEventListener("click", function createList() {
    let tagLi = document.createElement("li");
    list.appendChild(tagLi);
    //console.log(list)
    tagLi.innerHTML = inputText.value;
    //console.log(tagLi)
    inputText.value = "";
    //console.log(tagLi);
});

function selectedList(event) {
    let tagLiColor = document.getElementsByTagName("li");

        if (event.target !== document.querySelector("#selected"));
            event.target.classList.add("selected");
            //console.log(event.target);
}
tagList.addEventListener("click", selectedList);



}

//for (let index = 0; index < tagLiColor.length; index += 1);