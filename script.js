window.onload = function () {

let botao1 = document.querySelector("#criar-tarefa")
let botaoApaga = document.querySelector("#apaga-tudo")
let botaoApagaFinaliz = document.querySelector("#remover-finalizados")
let inputTarefa = document.querySelector("#texto-tarefa")
let list = document.querySelector("#lista-tarefas")

//Add novo item ao final da lista
botao1.addEventListener("click", function () {
  let elementoLinha = document.createElement("li")
  document.getElementById("lista-tarefas").appendChild(elementoLinha)
  elementoLinha.innerHTML = inputTarefa.value
  inputTarefa.value = "";
  elementoLinha.addEventListener("click", function () {
    elementoLinha.style.backgroundColor = "rgb(128,128,128)";
  })
  elementoLinha.addEventListener("dblclick", function () {
    if (elementoLinha.className != "completed") {
      elementoLinha.className = "completed"
    } else {
      elementoLinha.className = ""
    }
    botaoApagaFinaliz.addEventListener("click", function () {
      document.querySelector(".completed").remove()
    })
  })
  botaoApaga.addEventListener("click", function () {
    document.querySelector("#lista-tarefas").removeChild(elementoLinha)
  })

})

}