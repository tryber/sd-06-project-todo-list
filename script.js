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
    itemList.addEventListener('dblclick', doubleClick2);
}
function botao() {
    btn.addEventListener('click', adicionaTarefa);
}
function clickItem(event) {
    let itemSelected = event.target;
    itemSelected.style.background = 'rgb(128, 128, 128)';
};
function doubleClick1(event) {
    let itemSelected = event.target;
    itemSelected.classList.toggle('completed');
}
function doubleClick2(event) {
    let itemSelected = event.target;
    itemSelected.style.textDecoration = 'line-through';
}
function apagaTudo() {
    ordList.innerHTML = '';
}
btn2.addEventListener('click', apagaTudo);