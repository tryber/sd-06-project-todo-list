const button = document.getElementById('criar-tarefa');

button.addEventListener('click', createTask)

function createTask(){
const listOl = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const newItem = document.createElement('li');
newItem.innerHTML = input.value
listOl.appendChild(newItem)
input.value = ""
newItem.addEventListener('click', changeColorItem())
newItem.addEventListener('dblclick', scratchItem())
}
