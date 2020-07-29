// Configuração de variáveis
let textInput = document.getElementById("texto-tarefa");
let addBtn = document.getElementById("criar-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let itemSelecionado = document.getElementsByClassName("selecionado");

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
listaTarefas.addEventListener("click", selecionarItem);
