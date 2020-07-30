window.onload = function () {
    const bottonList = document.getElementById('criar-tarefa');

    bottonList.addEventListener('click', function () {
        const texto = document.getElementById('texto-tarefa').value;
        const list = document.getElementById('lista-tarefas');
        const listOl = document.createElement('li');
        listOl.innerHTML = texto;
        list.appendChild(listOl);

        listOl.addEventListener('click', backColor);

        listOl.addEventListener('dblclick', function () {
            listOl.classList.toggle('completed');
        });

        const bottonListDelete = document.getElementById('apaga-tudo');
        bottonListDelete.addEventListener('click', deleteList);

        const bottonRemove = document.querySelector('#remover-finalizados');
        bottonRemove.addEventListener('click', removeComplet);
    });

    function resetTexto() {
        document.querySelector('#texto-tarefa').value = '';
    }
    const text = document.querySelector('#criar-tarefa');
    text.addEventListener('click', resetTexto);

    function backColor() {
        let listOl = document.querySelectorAll('li');
        listOl = event.target;
        const bgColor = document.querySelector('.bgColor');
        if (bgColor) {
            bgColor.classList.remove('bgColor');
        }
        listOl.classList.add('bgColor');
    }

    function deleteList() {
        const list = document.getElementById('lista-tarefas');
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }

    function removeComplet() {
        const removeText = document.querySelectorAll('.completed');
        for (let i = 0; i < removeText.length; i += 1) {
            removeText[i].remove();
        }
    }
};
