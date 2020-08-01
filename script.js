window.onload = function() {

let list = document.querySelector("#lista-tarefas");
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



function selectedList() {
   
    for (let index = 0; index < list.children.length; index += 1) {
        list.children[index].classList.remove("selected");
        //console.log(list.children[index])
    }
    if (event.target !== document.querySelector("#selected")) {
        event.target.classList.add("selected");
    }   //console.log(event.target)
}
list.addEventListener("click", selectedList);

function selectedListline(event) {
   
    if (event.target.classList[0] === 'completed') {
        event.target.classList.remove("completed");
    }
    else {
        event.target.classList.add("completed");
    }  
    //console.log(event.target.classList[0])
}
list.addEventListener("dblclick", selectedListline);


}
