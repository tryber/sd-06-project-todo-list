window.onload = function() {
    btn.addEventListener('click', adicionaTarefa)
}
const btn = document.getElementById('criar-tarefa');
const insert = document.getElementById('texto-tarefa');
function adicionaTarefa() {
    let itemList = document.createElement('li');
    document.getElementById('lista-tarefas').appendChild(itemList);
    itemList.innerText = insert.value;
    insert.value = '';
    itemList.addEventListener('click', bgColorItem)
    function bgColorItem() {
        itemList.style.background = 'rgb(128, 128, 128)';
    };
    
}
