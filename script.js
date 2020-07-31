let submitTarefa = document.getElementById("criar-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let marcaCompleted;
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
listaTarefas.addEventListener("click", function (event) {
  let removeClass = document.querySelector(".selected");
  if (removeClass !== null) {
    removeClass.classList.remove("selected");
  }
  let selectClass = event.target;
  selectClass.className += " selected";
});