const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createTask)

//Criar novos itens e zerar o input
function createTask(){
  const listOl = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  const newItem = document.createElement('li');
  newItem.innerHTML = input.value
  listOl.appendChild(newItem)
  input.value = ""
  listOl.addEventListener('click', function turnGrey() {
    newItem.style.backgroundColor = 'grey';
  })
}

// const buttonCreate = document.getElementById('criar-tarefa');
// buttonCreate.addEventListener('click', createTask)

// let listOl = document.getElementById('lista-tarefas');
// let input = document.getElementById('texto-tarefa');


// //Cria novos itens e zera o input
// function createTask(){
//   const listOl = document.getElementById('lista-tarefas');
//   const input = document.getElementById('texto-tarefa');
//   const newItem = document.createElement('li');
//   newItem.innerHTML = input.value
//   listOl.appendChild(newItem)
//   input.value = ""
// }

// //Torna cinza itens com um click
// listOl.addEventListener('click', turnGrey)
// function turnGrey() {
//   listOl.style.backgroundColor = 'grey';
// }

// //Torna riscado itens com double click
// listOl.addEventListener('dblclick', scratchItem)
// function scratchItem(){
//   console.log('risca ça merda');
// }

// // Botão apaga tudo
//   const buttonErase = document.getElementById('apaga-tudo');
//   buttonErase.addEventListener('click', eraseAll)
//   function eraseAll() {  
//   console.log('apaga ça merda');
// }