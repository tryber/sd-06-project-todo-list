function adicionarTarefa() {
    let inputTarefa = document.getElementById("texto-tarefa").value;
    let listaTarefas  = document.getElementById("lista-tarefas").innerHTML;
    listaTarefas = listaTarefas +"<li>"+inputTarefa+"</li>";
    document.getElementById("lista-tarefas").innerHTML = listaTarefas;
    document.getElementById("texto-tarefa").value = "";
}
adicionarTarefa();