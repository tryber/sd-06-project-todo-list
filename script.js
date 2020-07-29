
window.onload = function () {
    //button to input text 
    let textInput = document.querySelector("#texto-tarefa");
    let addBtn = document.querySelector("#criar-tarefa");
    let takeText = document.querySelector("#lista-tarefas");

    addBtn.addEventListener('click', function () {
        for (let index = 0; index < textInput.length; index += 1) {
            let liElement = document.createElement("li");
            takeText[i] = liElement + textInput.value;
        }
    });








}