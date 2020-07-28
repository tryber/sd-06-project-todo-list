const newTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const rmFinished = document.getElementById('remover-finalizados');
const rmSelected = document.getElementById('remover-selecionado');
const rmAll = document.getElementById('apaga-tudo');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const iniList = localStorage.getItem('saveList');

if (iniList) {
    let list = document.getElementById('lista-tarefas');
    for (let i = 0; i < iniList.length; i += 1) {
        var li = document.createElement('li');
        li.innerHTML = iniList[i];
        list.appendChild(li);
    }
} 

newTask.addEventListener('click', function () {
    let textoTarefa = document.getElementById('texto-tarefa').value;
    let list = document.getElementById('lista-tarefas')
    let li = document.createElement('li');
    li.innerHTML = textoTarefa;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
});

taskList.addEventListener('click', function(event) {
    let aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i += 1) {
        if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)') {
            aux[i].style.backgroundColor = 'transparent';
        } 
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})

moveUp.addEventListener('click', function () {
    let aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i += 1) {
        let aux2;
        if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)' && i > 0) {
            aux2 = aux[i-1].innerText;
            aux[i-1].innerText = aux[i].innerText;
            aux[i].innerText = aux2;
            aux[i-1].style.backgroundColor = 'rgb(128, 128, 128)';
            aux[i].style.backgroundColor = 'transparent';
        } 
    }
})

moveDown.addEventListener('click', function () {
    let aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i += 1) {
        let aux2;
        if (aux[i].style.backgroundColor === 'rgb(128, 128, 128)' && i <= aux.length) {
            aux2 = aux[i+1].innerText;
            aux[i+1].innerText = aux[i].innerText;
            aux[i].innerText = aux2;
            aux[i+1].style.backgroundColor = 'rgb(128, 128, 128)';
            aux[i].style.backgroundColor = 'transparent';
            break;
        } 
    }
    
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
    let aux = document.getElementById('lista-tarefas');
    while (aux.firstChild) {
        aux.firstChild.remove();
    }
   
});

saveTasks.addEventListener('click', function() {
    let lStorage = [];
    let aux = document.querySelectorAll('li');
    for (let i = 0; i < aux.length; i +=1) {
        let a = aux[i].innerHTML;
        lStorage.push(a);
    }
    localStorage.setItem('saveList', lStorage);
} )














