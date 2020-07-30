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
  newItem.addEventListener('click', changeColor);
  newItem.addEventListener('dblclick', scratchItem);
  input.value = '';
}

// Torna cinza itens clicados
function changeColor() {
  const item = event.target
  item.style.backgroundColor = 'rgb(128, 128, 128)'
}

// De-selecionar itens quando um item é selecionado  
// function changeColor() {
//   const createdItem = document.getElementsByTagName('li');
//   for(let i = 0 ; i < createdItem.length ; i += 1) {
//     createdItem[i].addEventListener('click', function() {
//       createdItem[i].style.backgroundColor = 'rgb(128, 128, 128)';
//       for(let x = 0 ; x < createdItem.length ; x += 1) {
//         if (x !== i) {
//           createdItem[x].style.backgroundColor = 'transparent';
//         }
//         }
//     });
//   }
// }

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
