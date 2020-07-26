let btn = document.getElementById("criar-tarefa");
let ol = document.getElementById("lista-tarefas");



btn.addEventListener('click', function() {
    
    let lista = document.getElementById("texto-tarefas").value;
    let li = document.createElement('li');
    li.textContent = lista;
    document.getElementById("lista-tarefas").appendChild(li);
    document.getElementById('texto-tarefas').value = '';

})
