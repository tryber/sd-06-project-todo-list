let submitTarefa = document.getElementById("criar-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let marcaCompleted;
let removeClass;
let selectClass;
// texto-tarefa
function criarTextoTarefa(){
  let textoTarefa = document.getElementById("texto-tarefa").value;
  let inserirLi = document.createElement("li");
  inserirLi.innerHTML = textoTarefa;
  inserirLi.className = "list-item";
  listaTarefas.appendChild(inserirLi);
  document.getElementById("texto-tarefa").value = "";
}
submitTarefa.addEventListener("click", criarTextoTarefa);

// risca li - completed
listaTarefas.addEventListener("dblclick", function (event){
  marcaCompleted = event.target;
  marcaCompleted.classList.add("completed");
});

// mudar background - fundo cinza
listaTarefas.addEventListener("click", function (event){
  removeClass = document.querySelector(".selected");
  if (removeClass !== null) {
    removeClass.classList.remove("selected");
  }
  selectClass = event.target;
  selectClass.className += " selected";
});

// botao apaga-tudo
let bApagaTudo = document.getElementById("apaga-tudo");
bApagaTudo.addEventListener("click", function (){
  while (listaTarefas.firstChild){
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
});