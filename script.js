
window.onload = function () {
    let textInput = document.querySelector("#texto-tarefa");
    let addBtn = document.querySelector("#criar-tarefa");
    let takeText = document.querySelector("#listing");

    addBtn.addEventListener('click', function () {
        takeText.innerHTML = textInput.value
    });








}