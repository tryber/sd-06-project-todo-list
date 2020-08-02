const newTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const rmFinished = document.getElementById('remover-finalizados');
const rmSelected = document.getElementById('remover-selecionado');
const rmAll = document.getElementById('apaga-tudo');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const iniList = localStorage.getItem('save-list');

saveTasks.addEventListener('click', function () {
    localStorage.setItem('save-list', document.getElementById('lista-tarefas').innerHTML);
    alert('Lista salva!')
});

if (iniList) {
    document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('save-list')
}

newTask.addEventListener('click', function () {
    const textoTarefa = document.getElementById('texto-tarefa').value;
    const list = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerHTML = textoTarefa;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
});

taskList.addEventListener('click', function (event) {
    const aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i += 1) {
        if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)') {
            aux[i].style.backgroundColor = 'transparent';
        }
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

moveUp.addEventListener('click', function () {
    const aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i += 1) {
        let aux2;
        if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)' && i > 0) {
            aux2 = aux[ i-1 ].innerText;
            aux[ i-1 ].innerText = aux[i].innerText;
            aux[i].innerText = aux2;
            aux[ i-1 ].style.backgroundColor = 'rgb(128, 128, 128)';
            aux[i].style.backgroundColor = 'transparent';
        }
    }
});

moveDown.addEventListener('click', function () {
    const aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i += 1) {
        let aux2 = document.getElementsByTagName('li');
        if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)' && i <= aux.length) {
            aux2 = aux[ i+1 ].innerText;
            aux[ i+1 ].innerText = aux[i].innerText;
            aux[i].innerText = aux2;
            aux[ i+1 ].style.backgroundColor = 'rgb(128, 128, 128)';
            aux[i].style.backgroundColor = 'transparent';
            break;
        }
    }
});

taskList.addEventListener('dblclick', function (event) {
    if (event.target.className !== 'completed') {
        event.target.className = 'completed';
        } else {
        event.target.className = 'incompleted';
    }
});

rmFinished.addEventListener('click', function () {
    const aux = document.querySelectorAll('.completed');
    for (let i = 0; i < aux.length; i += 1) {
    document.getElementById('lista-tarefas').removeChild(aux[i]);
    }
});

rmSelected.addEventListener('click', function () {
    const aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i += 1) {
        if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)') {
            document.getElementById('lista-tarefas').removeChild(aux[i]);
        }
    }
});

rmAll.addEventListener('click', function () {
    const aux = document.getElementById('lista-tarefas');
    while (aux.firstChild) {
        aux.firstChild.remove();
    }
});

