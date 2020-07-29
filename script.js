const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listOl = document.getElementById('lista-tarefas');
const buttonEraseAll = document.getElementById('apaga-tudo');
const buttonEraseFinished = document.getElementById('remover-finalizados');

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

// Botão apaga tudo
buttonEraseAll.addEventListener('click', eraseAll)
function eraseAll() {
  document.querySelectorAll('.tarefa').forEach(e => e.remove());
}

// Botão remover finalizados
buttonEraseFinished.addEventListener('click', eraseFinished)
function eraseFinished() {
  document.querySelectorAll('.completed').forEach(e => e.remove());
}