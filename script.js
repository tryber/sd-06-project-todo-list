let botao1 = document.querySelector("#criar-tarefa")
let inputTarefa = document.querySelector("#texto-tarefa")
let list = document.querySelector("#lista-tarefas")

//Add novo item ao final da lista
function addElementOnList(){
  let elementoLinha = document.createElement("li")
  elementoLinha = inputTarefa.value
  list.appendChild(elementoLinha)
}
botao1.addEventListener("click", addElementOnList)

