let addButton = document.querySelector("#criar-tarefa");
addButton.addEventListener('click',function () {
    let myList = document.querySelector("#lista-tarefa");
    let myItem = document.createElement('li');
    myItem.innerText = document.getElementById('texto-tarefa').value;
    myList.appendChild(myItem);
    clearInput();
})

function clearInput () {
    document.getElementById('texto-tarefa').value = null;
}
