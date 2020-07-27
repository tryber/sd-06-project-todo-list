const newTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const rmFinished = document.getElementById('remover-finalizados');
const rmSelected = document.getElementById('remover-selecionado');
const rmAll = document.getElementById('apaga-tudo');

newTask.addEventListener('click', function () {
    var textoTarefa = document.getElementById('texto-tarefa').value;
    var list = document.getElementById('lista-tarefas')
    var li = document.createElement('li');
    li.innerHTML = textoTarefa;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
});

taskList.addEventListener('click', function(event) {
    const li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i += 1) {
        if (li[i].style.backgroundColor === 'rgb(128, 128, 128)') {
            li[i].style.backgroundColor = 'transparent';
        } 
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})

taskList.addEventListener('dblclick', function(event) {
    if (event.target.className !== 'completed') {
        event.target.className = 'completed';
        } else {
        event.target.className = 'incompleted';
    }
});

rmFinished.addEventListener('click', function() {
    let aux = document.querySelectorAll('.completed');
    for (let i = 0; i < aux.length; i += 1) {
    document.getElementById('lista-tarefas').removeChild(aux[i]);
    }
});

rmSelected.addEventListener('click', function() {
    let aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i += 1) {
        if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)') {
            document.getElementById('lista-tarefas').removeChild(aux[i]);
        }
    }
});

rmAll.addEventListener('click', function() {
    const aux = document.getElementById('lista-tarefas');
    while (aux.firstChild) {
        aux.firstChild.remove();
    }
   
});








