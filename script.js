let btn = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');
let text = document.getElementById('texto-tarefa');

btn.addEventListener('click',function() {
    let li = document.createElement('li');
    li.innerHTML = text.value;
    list.appendChild(li);
    text.value = '';
});
