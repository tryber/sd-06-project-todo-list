const inputText = document.getElementById("texto-tarefa");
const list = document.getElementById("lista-tarefas");
const btnCriar = document.getElementById("criar-tarefa");

btnCriar.addEventListener('click', function(){
  let elementoLista = document.createElement("li");
  list.appendChild(elementoLista);
  elementoLista.innerText = inputText.value;
  console.log(elementoLista);
  inputText.value = "";
})
