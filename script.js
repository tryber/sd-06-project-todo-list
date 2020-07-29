const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listOl = document.getElementById('lista-tarefas');
const buttonErase = document.getElementById('apaga-tudo');

button.addEventListener('click', createTask)

//Criar novos itens e zerar o input
function createTask(){
  let newItem = document.createElement('li');
  listOl.appendChild(newItem);
  newItem.innerHTML = input.value;
  newItem.className = "tarefa";
  newItem.addEventListener('click', turnGrey)
  newItem.addEventListener('dblclick', scratchItem)
  input.value = "";
}

//Torna cinza itens com um click
function turnGrey() {
  let selectedItem = event.target;
  selectedItem.style.backgroundColor = 'grey'
}

//Torna riscado itens com double click
function scratchItem(){
  let selectedItem = event.target;
  selectedItem.classList.add('completed');
  selectedItem.style.textDecoration = 'line-through'

}

// // Botão apaga tudo
buttonErase.addEventListener('click', eraseAll)
function eraseAll() {
const task = document.getElementsByClassName('tarefa')
while (task.length > 0) task[0].remove();
}


