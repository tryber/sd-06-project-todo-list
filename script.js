window.onload = function() {
  let tarefa = document.querySelector("#texto-tarefa")
  let tarefaBtn = document.querySelector("#criar-tarefa");
  let lista = document.querySelector("#lista-tarefas");  

  tarefaBtn.addEventListener("click", function(){
    lista.innerHTML += '<li>' + tarefa.value + '</li>';
    tarefa.value = '';
  });

  lista.addEventListener("click", function(e) {
    let cont = 0
    let range = document.elementFromPoint(e.clientX, e.clientY);
    range.style.backgroundColor = "rgb(128, 128, 128)";
  });
}