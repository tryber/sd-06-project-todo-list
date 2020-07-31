let tagList = document.querySelector("#lista-tarefas");

let list = document.getElementById("lista-tarefas");
let buttonCreateList = document.querySelector("#criar-tarefa");
let inputText = document.querySelector("#texto-tarefa");

buttonCreateList.addEventListener("click", function createList() {
    let tagLi = document.createElement("li");
    list.appendChild(tagLi);
    tagLi.innerHTML = inputText.value;
    inputText.value = "";
    console.log(list);
});



// function createList() {
//     let textList = document.querySelector("input").value;
//     lista = lista +"<li>"+textList+"</li>";
//     document.getElementById("lista-tarefas").innerHTML = lista;
// } 
// buttonCreateList.addEventListener("click", createList);    

// buttonCreateList.addEventListener("click", function createList() {
    
// });