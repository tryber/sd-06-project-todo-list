window.onload = function() {

    //salvar tudo

    if (localStorage.ListaTarefas !== undefined) {
        document.getElementById('lista-tarefas').innerHTML = localStorage.ListaTarefas;
    }

    let btnSave = document.getElementById("salvar-tarefas")

    function saveList() {
        const listSaved = document.getElementById("lista-tarefas").innerHTML
        localStorage.setItem('ListaTarefas', listSaved);
    }
    btnSave.addEventListener("click", saveList)

    // apagar tudo

    let eraseAll = document.getElementById("apaga-tudo");

    function eraseAllTasks() {
        var taskList = document.getElementById("lista-tarefas");
        while (taskList.hasChildNodes()) {
            taskList.removeChild(taskList.firstChild);
        }
    }
    eraseAll.addEventListener("click", eraseAllTasks)

    // add classe completed
    var listOfTasks = document.querySelector('ol');
    listOfTasks.addEventListener('dblclick', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('completed');

        }
    }, false);

    //add classe selected
    var listSelected = document.querySelector('ol');
    listSelected.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('selected');
        }
    }, false);

    //remover selecionada
    var rmvSelected = document.getElementById("remover-selecionado")

    function rmvSelection() {
        var list = document.getElementById("lista-tarefas");
        for (let i = (list.childNodes.length - 1); i >= 0; i -= 1) {
            if (list.childNodes[i].classList.contains('selected')) {
                list.removeChild(list.childNodes[i]);
            }
        }
    }
    rmvSelected.addEventListener('click', rmvSelection)

    //remover completo
    var rmvCompleted = document.getElementById("remover-finalizados")

    function rmvFinished() {
        var list = document.getElementById("lista-tarefas");
        for (let i = (list.childNodes.length - 1); i >= 0; i -= 1) {
            if (list.childNodes[i].classList.contains('completed')) {
                list.removeChild(list.childNodes[i]);
            }
        }
    }
    rmvCompleted.addEventListener('click', rmvFinished)

    //criar novo item
    const addTask = document.getElementById("criar-tarefa")

    function newTask() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("texto-tarefa").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Escreva sua tarefa!");
        } else {
            document.getElementById("lista-tarefas").appendChild(li);
        }
        document.getElementById("texto-tarefa").value = "";

    }
    addTask.addEventListener("click", newTask)





}