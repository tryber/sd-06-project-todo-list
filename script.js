const newTarefa=document.getElementById('criar-tarefa');
const inicioList=localStorage.getItem('saveList');
const listaTarefa=document.getElementById('lista-tarefas')

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

