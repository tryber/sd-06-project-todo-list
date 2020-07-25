const button = document.querySelector("#criar-tarefa");
const input = document.querySelector("#texto-tarefa");
const tagList = document.querySelector("#lista-tarefas");

function creatList() {
    let textList = document.querySelector("input").value;
    let lista  = document.getElementById("lista-tarefas").innerHTML;
    lista = lista +"<li>"+textList+"</li>";
    document.getElementById("lista-tarefas").innerHTML = lista;
    document.querySelector('input').value = '';
}


button.addEventListener("click", creatList); 
