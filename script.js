window.onload = function() {
    // apagar tudo

    if (localStorage.ListaTarefas !== undefined) {
        document.getElementById('lista-tarefas').innerHTML = localStorage.ListaTarefas;
    }
    let eraseAll = document.getElementById("apaga-tudo")

    function eraseAllTasks() {
        var list = document.getElementById("lista-tarefas");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    }
    eraseAll.addEventListener("click", eraseAllTasks)

    // add classe completed
    var list = document.querySelector('ol');
    list.addEventListener('dblclick', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('completed');

        }
    }, false);
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('selected');
        }
    }, false);

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