
window.onload = function () {
    //button to input text 
    let textValue = document.querySelector("#texto-tarefa");
    let addBtn = document.querySelector("#criar-tarefa");
    let doList = document.querySelector("#lista-tarefas");

    addBtn.addEventListener('click', function () {
            let liElement = document.createElement("li");
            liElement.innerHTML = textValue.value;
            doList.appendChild(liElement);
            textValue.value = '';
    });



}