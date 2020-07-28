const addButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
addButton.addEventListener('click', function () {
    const tarefas = document.getElementById('tarefas')
    var list = document.createElement('li');
    document.querySelector('#lista-tarefas').appendChild(list);
    list.innerText = input.value;
    input.value = ''
})


