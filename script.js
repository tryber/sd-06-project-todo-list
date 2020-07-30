window.onload = function() {
    // apagar tudo
    let eraseAll = document.getElementById("apaga-tudo")

    function eraseAllTasks() {
        var list = document.getElementById("lista-tarefas");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    }
    eraseAll.addEventListener("click", eraseAllTasks)



    var myNodelist = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var rmvBtn = document.createElement("button");
        var txt = document.createTextNode("Remover Tarefa");
        rmvBtn.className = "close";
        rmvBtn.appendChild(txt);
        myNodelist[i].appendChild(rmvBtn);
        rmvBtn.setAttribute("id", "remover-tarefa")
    }

    // botão para remover tarefa
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        onclick
    }

    // add classe completed
    var list = document.querySelector('ol');
    list.addEventListener('dblclick', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('completed');

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

        var rmvBtn = document.createElement("button");
        var txt = document.createTextNode("Remover Tarefa");
        rmvBtn.className = "close";
        rmvBtn.appendChild(txt);
        li.appendChild(rmvBtn);
        rmvBtn.setAttribute("id", "remover-tarefa")

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
    addTask.addEventListener("click", newTask)





}