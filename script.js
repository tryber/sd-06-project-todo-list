// variaveis

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');


// funcões

button.addEventListener('click', function () {
    let text = input.value;
    let tarefa = document.createElement('li');
    tarefa.innerText = text;
    tarefa.classList.add = 'work';
    if (text === '') {
        alert("Por favor, Digite algo no input");
    } else {
        list.appendChild(tarefa);
        input.value = '';
    };
});

let itemSelected = document.getElementsByTagName('li');
list.addEventListener ('dblclick', function(e) {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
})
