window.onload = function() {
    let botao = document.querySelector("#criar-tarefa")
    let caixaTexto = document.querySelector("#texto-tarefa")
    // função para criar as li's da lista
    botao.addEventListener("click", function() {
      let linhaLista = document.createElement("li")
      document.getElementById("lista-tarefas").appendChild(linhaLista)
    // adicionando o conteúdo digitado no input a lista
      linhaLista.innerHTML = caixaTexto.value
    // limpando o input depois do click
      caixaTexto.value = ""

    // adicionando cor de fundo cinza ao li que receber um click
    linhaLista.addEventListener("click", function(){
        let lista = document.getElementsByTagName("li");
        for(let index = 0; index < lista.length; index ++) {
            lista[index].classList.remove("corDeFundo")
        }
        linhaLista.classList.add("corDeFundo")
        })

    // criando botão que apaga a lista inteira
    let botaoApagaLista = document.querySelector("#apaga-tudo")
    botaoApagaLista.addEventListener("click", function() {
        document.getElementById("lista-tarefas").removeChild(linhaLista)
        }) 
        
    // adicionando a classe de completados aos li's que receberem dobleclick
    // e que quando receber outro dobleclick deixar de receber a classe completados
    linhaLista.addEventListener("dblclick", function() {
        if(linhaLista.classList.contains("completed")) {
            linhaLista.classList.remove("completed")
      } else {
          linhaLista.classList.add("completed")
      }
    // adicionando botão que exclui os itens marcados como completados da lista
        let botaoFinalizados = document.querySelector("#remover-finalizados")
    botaoFinalizados.addEventListener("click", function() {
            document.querySelector(".completed").remove()
    })
    })
    })
    }