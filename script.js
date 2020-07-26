window.onload = function() {
  let tarefa = document.querySelector("#texto-tarefa")
  let tarefaBtn = document.querySelector("#criar-tarefa");
  let lista = document.querySelector("#lista-tarefas");

  tarefaBtn.addEventListener("click", function(){
    lista.innerHTML += '<li>' + tarefa.value + '</li>';
    tarefa.value = '';
  });
}