// Configuração de variáveis
let textInput = document.getElementById("texto-tarefa");
let addBtn = document.getElementById("criar-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");

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
  let itens = listaTarefas.getElementsByTagName("li");
  for(let i = 0; i < itens.length; i += 1) {
    if(itens[i].classList.contains("selecionado")) {
      itens[i].classList.remove("selecionado");
    }
  }
  event.target.classList.add("selecionado");
}

// Marcar item como completo com duplo click
listaTarefas.addEventListener("dblclick", marcaCompleto);

function marcaCompleto(event) {
  if(event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  } else {
    event.target.classList.add("completed");
  }
}