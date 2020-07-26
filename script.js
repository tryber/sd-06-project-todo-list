window.onload = function(){
  let botao = document.querySelector("#criar-tarefa");
  botao.addEventListener('click', function(){
    let areaTexto = document.querySelector("#texto-tarefa").value;
    let tagli = document.createElement("li");
    tagli.innerHTML = areaTexto;
    document.querySelector("#lista-tarefas").appendChild(tagli);
    document.getElementById("texto-tarefa").value = " ";
  });
}