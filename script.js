const input = document.getElementById('texto-tarefa');
const listOl = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const buttonEraseAll = document.getElementById('apaga-tudo');
const buttonEraseFinished = document.getElementById('remover-finalizados');
const selectedItem = document.querySelector('.selected')

// Criar novos itens e zerar o input
button.addEventListener('click', createTask);
function createTask() {
  const newItem = document.createElement('li');
  listOl.appendChild(newItem);
  newItem.innerHTML = input.value;
  newItem.className = 'tarefa';
  newItem.addEventListener('click', selectTask);
  newItem.addEventListener('dblclick', scratchItem);
  input.value = '';
}

// Altera o background para cinza quando clicado e branco quando outro item é clicado
function selectTask() {
  const selectedItem = document.querySelector('.selected')
  if (selectedItem !== null) {
    selectedItem.classList.remove('selected');
  } 
  event.target.classList.add('selected');
}


// Torna riscado itens com double click
function scratchItem() {
  const selectedItem = event.target;
  if (selectedItem.classList.contains('completed')) {
    selectedItem.classList.remove('completed');
  } else {
    selectedItem.classList.add('completed');
  }
}

// Botão apaga tudo
buttonEraseAll.addEventListener('click', eraseAll);
function eraseAll() {
  document.querySelectorAll('.tarefa').forEach(e => e.remove());
}

// Botão remover finalizados
buttonEraseFinished.addEventListener('click', eraseFinished);
function eraseFinished() {
  document.querySelectorAll('.completed').forEach(e => e.remove());
}

//Salvar itens
// let tarefas = document.querySelectorAll('.tarefa')= JSON.stringify(tarefas)
// console.log(tarefas)

