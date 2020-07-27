const tarefa = document.getElementById('texto-tarefa');
const adicionar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const deletarTudo = document.getElementById('apaga-tudo');

adicionar.addEventListener('click', () => {
    let elemento = document.createElement('li');
    elemento.innerHTML = tarefa.value;
    elemento.className += 'item';
    lista.appendChild(elemento);
    tarefa.value = '';
    let itemLista = document.querySelectorAll('.item');
    itemLista.forEach(item => {
        item.addEventListener('click', () => {
            itemLista.forEach(item => {
                item.classList.remove('selected');
            })
            item.classList.add('selected');
        })
    })
    itemLista.forEach(item =>  {
        item.addEventListener('dblclick', () => {
            item.classList.toggle('completed');
        })
    })
    deletarTudo.addEventListener('click', () =>{
        itemLista.forEach(item => {
            lista.removeChild(elemento)
        })
    })
});
