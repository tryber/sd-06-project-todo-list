
const caixaTexto = document.querySelector('#texto-tarefa');

function newTask() {
  const novoItem = document.createElement("li");
  novoItem.innerHTML = caixaTexto.value;
  document.getElementById("lista-tarefas").appendChild(novoItem);
}
buttonNewTask = document.querySelector("#criar-tarefa");
buttonNewTask.addEventListener("click", newTask)

function clearAll() {
  console.log("apagando");
}
buttonClear = document.querySelector("#apaga-tudo");
buttonClear.addEventListener("click", clearAll)


