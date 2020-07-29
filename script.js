window.onload = function () {

let botao1 = document.querySelector("#criar-tarefa")
let botaoApaga = document.querySelector("#apaga-tudo")
let botaoApagaFinaliz = document.querySelector("#remover-finalizados")
let inputTarefa = document.querySelector("#texto-tarefa")
let list = document.querySelector("#lista-tarefas")
let btnRemSelec = document.querySelector("#remover-selecionado")

//Add novo item ao final da lista
botao1.addEventListener("click", function () {
  let elementoLinha = document.createElement("li")
  document.getElementById("lista-tarefas").appendChild(elementoLinha)
  elementoLinha.innerHTML = inputTarefa.value
  inputTarefa.value = "";

  //Quando clica na tarefa, muda cor de fundo
  elementoLinha.addEventListener("click", function () {
    let lista = document.getElementsByTagName("li");
    for(let index = 0; index < lista.length; index ++) {
        lista[index].classList.remove("selected")
    }
    elementoLinha.classList.add("selected")
  })  

  //Quando clica 2x na tarefa, add classe completed
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

  btnRemSelec.addEventListener("click", function (){
    document.querySelector(".selected").remove()
  })
})

}