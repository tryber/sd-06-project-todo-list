const input = document.getElementById('texto-tarefa');
const listOl = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const buttonEraseAll = document.getElementById('apaga-tudo');
const buttonEraseFinished = document.getElementById('remover-finalizados');

// Criar novos itens e zerar o input
button.addEventListener('click', createTask);
function createTask() {
  const newItem = document.createElement('li');
  listOl.appendChild(newItem);
  newItem.innerHTML = input.value;
  newItem.className = 'tarefa';
  newItem.addEventListener('click', changeColor, unselect);
  newItem.addEventListener('dblclick', scratchItem);
  input.value = '';
}

// Altera o background para cinza quando clicado e branco quando outro item é clicado
function changeColor() {
  const oldItem = event.target
  oldItem.style.backgroundColor = 'rgb(128, 128, 128)'
  oldItem.classList.add('clicado');
}

document.querySelectorAll('.tarefa').forEach(unselect)
  function unselect() {
    document.querySelectorAll('.clicado').style.backgroundColor = 'white'
    oldItem.classList.remove('clicado');
  }


// Torna riscado itens com double click
function scratchItem() {
  const selectedItem = event.target;
  selectedItem.classList.add('completed');
  selectedItem.style.textDecoration = 'line-through';
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
let tarefas = document.querySelectorAll('.tarefa')= JSON.stringify(tarefas)
console.log(tarefas)

