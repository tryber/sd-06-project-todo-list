let textInput = document.getElementById("texto-tarefa");
let addBtn = document.getElementById("adicionar-tarefa");
addBtn.addEventListener('click', function(event){
  let novoItem = document.createElement("li");
  document.getElementById("lista-tarefas").appendChild(novoItem);
  novoItem.innerText = textInput.value;
  textInput.value = "";
})