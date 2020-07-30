window.onload = function() {
    botao();
}
const btn = document.getElementById('criar-tarefa');
const btn2 = document.getElementById('apaga-tudo');
const btn3 = document.getElementById('remover-finalizados');
const insert = document.getElementById('texto-tarefa');
const ordList = document.getElementById('lista-tarefas');
function adicionaTarefa() {
    let itemList = document.createElement('li');
    ordList.appendChild(itemList);
    itemList.innerText = insert.value;
    insert.value = '';
    itemList.addEventListener('click', clickItem);
    itemList.addEventListener('dblclick', doubleClick1);
}
function botao() {
    btn.addEventListener('click', adicionaTarefa);
}
function clickItem() {
    let itemSelected = event.target;
    itemSelected.classList.toggle('selected');
    
};
function doubleClick1() {
    let itemSelected = event.target;
    itemSelected.classList.toggle('completed');
}

function apagaTudo() {
    ordList.innerHTML = '';
}
btn2.addEventListener('click', apagaTudo);
function removeEnded() {
    let selecionado = document.querySelector('.completed');
    selecionado.parentNode.removeChild(selecionado);
}
btn3.addEventListener('click', removeEnded);