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
    if (itemSelected.classList !== 'completed') {
        itemSelected.classList.add('completed');
    } else {
        itemSelected.classList.remove('completed');
    }
}
function doubleClick2(event) {
    let itemSelected = event.target;
    let listando = document.getElementsByTagName('li');
    let iter = 0;
    for (let i  in listando) {
        if (listando[i].style.textDecoration === 'selected') {
            iter += 1;
        } else if (iter > 0) {
            for (i in listando) {
                listando[i].classList.remove('selected');
            }
        }
    }
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