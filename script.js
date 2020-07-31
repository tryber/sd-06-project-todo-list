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