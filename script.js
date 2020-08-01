// Configuração de variáveis
let textInput = document.getElementById("texto-tarefa");
let addBtn = document.getElementById("criar-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let itens = listaTarefas.getElementsByTagName("li");
let remover = document.getElementById("remover-selecionado");
let apagarCompletos = document.getElementById("remover-finalizados");
let subir = document.getElementById("subir-selecionado");
let descer = document.getElementById("descer-selecionado");
let apagarTudo = document.getElementById("apaga-tudo");


// Funções e eventos para adicionar novo item à lista de tarefas
addBtn.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  if (textInput.value === "") {
    textInput.value = "";
  } else {
    let novoItem = document.createElement("li");
    listaTarefas.appendChild(novoItem);
    novoItem.innerText = textInput.value;
    textInput.value = "";
  }
}

textInput.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    adicionarTarefa();
  }
});

// Função e evento para selecionar item da lista
listaTarefas.addEventListener("click", adicionaSelecao);

function adicionaSelecao(event) {
  for(let i = 0; i < itens.length; i += 1) {
    if(itens[i].classList.contains("selecionado")) {
      itens[i].classList.remove("selecionado");
    }
  }
 if(event.target.id != "lista-tarefas"){
   event.target.classList.add("selecionado");
 }
}

// Marcar item como completo com duplo click
listaTarefas.addEventListener("dblclick", marcaCompleto);

function marcaCompleto(event) {
  if(event.target.id != "lista-tarefas") {
    if(event.target.classList.contains("completed")) {
      event.target.classList.remove("completed");
    } else {
      event.target.classList.add("completed");
    }
  }
}

// Botão para apagar item selecionado
remover.addEventListener("click", function() {
  let selecionado = document.querySelector(".selecionado");
  selecionado.remove();
})

// Botão para apagar os itens completos
apagarCompletos.addEventListener("click", apagaCompletos);

function apagaCompletos() {
  for(let i = itens.length-1; i >= 0; i -= 1) {
    if(itens[i].classList.contains("completed")) {
      itens[i].remove();
    }
  }
}

// Botão para apagar todos os itens
apagarTudo.addEventListener("click", apagaTudo);

function apagaTudo() {
  for(let i = itens.length-1; i >= 0; i-= 1) {
    itens[i].remove();
  }
}

// Botões de subir e descer item na lista
subir.addEventListener("click", sobeItem);
descer.addEventListener("click", desceItem);

function sobeItem() {
  let selecionado = document.querySelector(".selecionado");
  let previous = selecionado.previousSibling;
  selecionado.parentNode.insertBefore(selecionado, previous);
}

function desceItem() {
  let selecionado = document.querySelector(".selecionado");
  let next = selecionado.nextSibling.nextSibling;
  selecionado.parentNode.insertBefore(selecionado, next);
}