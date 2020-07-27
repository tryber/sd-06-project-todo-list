const tarefa = document.getElementById('texto-tarefa');
const adicionar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
   
adicionar.addEventListener('click', () => {
    let elemento = document.createElement('li');
    elemento.innerHTML = tarefa.value;
    elemento.className += 'item';
    lista.appendChild(elemento);
    tarefa.value = '';
});

lista.addEventListener('click', e => {
    e.preventDefault();
    let itemLista = document.querySelectorAll('.item');
    itemLista.forEach(item =>  {
        item.addEventListener('click', () => {
            itemLista.forEach(item => {
                item.classList.remove('selected');
            })
            item.classList.add('selected');
        })
    })
});

lista.addEventListener('dblclick', e => {
    e.preventDefault();
    let itemLista = document.querySelectorAll('.item');
    itemLista.forEach(item =>  {
        item.addEventListener('dblclick', () => {
            item.classList.toggle('double-click');
        })
    })
});


