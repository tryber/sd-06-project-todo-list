const newTarefa=document.getElementById('criar-tarefa');
const inicioList=localStorage.getItem('saveList');
const listaTarefa=document.getElementById('lista-tarefas');
const moveUp=document.getElementById("mover-cima");
const moveDown=document.getElementById("mover-baixo");
const deleteTudo=document.getElementById("apaga-tudo");
const removeFinal=document.getElementById("remover-finalizados");
const removeSelect=document.getElementById("remover-selecionado");
const saveTarefa=document.getElementById("salvar-tarefas");


if (inicioList){
    const lista=document.getElementById('lista-tarefas');
    for (let i=0; i<iniList.length; i++) {
        let li=document.createElement('li');
        li.innerHTML=inicioList[i];
        lista.appendChild(li);
    }
}

newTarefa.addEventListener('click', function(){
    const textoTarefa=document.getElementById('texto-tarefa').value;
    const listaTarefa=document.getElementById('lista-tarefas');
    const li=document.createElement('li');
    li.innerHTML = textoTarefa;
    listaTarefa.appendChild(li);
    document.getElementById('texto-tarefa').value='';
});

listaTarefa.addEventListener('click', function(event){
    const itemLista=document.getElementsByTagName('li');
    for (let i=0; i<itemLista.length; i++) {
        if (itemLista[i].style.backgroundColor==='rgb(128, 128,128)'){
            itemLista[i].style.backgroundColor='transparent';
        }
    }
    event.target.style.backgroundColor='rgb(128,128,128)';
});
moveUp.addEventListener('click', function () {
    const aux = document.getElementsByTagName('li');
    for (let i = 0; i < aux.length; i ++) {
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
    for (let i = 0; i < aux.length; i ++) {
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

listaTarefa.addEventListener('dblclick', function (event) {
    if (event.target.className !== 'completed') {
        event.target.className = 'completed';
        } else {
        event.target.className = 'incompleted';
    }
});
