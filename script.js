function addLista () {
    var textoTarefa = document.getElementById('texto-tarefa').value;
    var list = document.getElementById('lista-tarefas')
    var li = document.createElement('li');
    li.innerHTML = textoTarefa;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
    li.addEventListener('click', function () {
        if (li.style.backgroundColor !== 'rgb(128, 128, 128)') {
            li.style.backgroundColor = 'rgb(128, 128, 128)';
        } 
        else {
            li.style.backgroundColor = 'white';
        }   
    });
    li.addEventListener('dblclick', function () {
        if (li.className !== 'completed') {
            li.className = 'completed';
        } else {
            li.className = 'incompleted';
        }
    });
    var rmFinalizado = document.getElementById('remover-finalizados');
    rmFinalizado.addEventListener('click', function () {
        let aux = document.getElementsByClassName('completed');
        for (let i = 0; i < aux.length; i += 1) {
            document.getElementById('lista-tarefas').removeChild(aux[i]);
        }

    });
    var rmSelecionado = document.getElementById('remover-selecionado');
    rmSelecionado.addEventListener('click', function() {
        let aux = document.getElementsByTagName('li');
        for(let i = 0; i < aux.length; i += 1) {
            if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)') {
                document.getElementById('lista-tarefas').removeChild(aux[i]);
            }
        }
        

    });

}




var criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', addLista);






