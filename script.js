// variaveis

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');


// funcões

button.addEventListener('click', function () {
    let text = input.value;
    let tarefa = document.createElement('li');
    tarefa.innerText = text;
    if (text === '') {
        alert("Por favor, Digite algo no input");
    } else {
        list.appendChild(tarefa);
        input.value = '';
    };
});

function changeSelected(select){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    select.className +=' selected';
}
let itemSelected = document.querySelectorAll('li');

list.addEventListener('click',function(e){
    changeSelected(e.target);
})

list.addEventListener('dblclick',function(e){
    let completed = e.target;
    if(completed.classList.contains('completed')){
        completed.classList.remove('completed');
    } else {
        completed.className += ' completed';
    }
})

