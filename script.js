function addLista () {
    var textoTarefa = document.getElementById('texto-tarefa').value;
    let list = document.getElementById('lista-tarefas')
    var li = document.createElement('li');
    li.innerHTML = textoTarefa;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
    li.addEventListener('click', function () {
        if (li.style.backgroundColor !== 'rgb(128, 128, 128)') {
            li.style.backgroundColor = 'rgb(128, 128, 128)';
        } else {
            li.style.backgroundColor = 'white';
        }
        
    });
}




let criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', addLista);




