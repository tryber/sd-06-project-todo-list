const button = document.getElementById('criar-tarefa');

button.addEventListener('click', createTask)

function createTask(){
  const listOl = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  const newItem = document.createElement('li');
  newItem.innerHTML = input.value
  listOl.appendChild(newItem)
  input.value = ""
}

  // const createdItem = document.getElementByTagName('li')
  // createdItem.addEventListener('click', changeColorItem())
  // createdItem.addEventListener('dblclick', scratchItem())


// function changeColorItem() {
//   console.log('click simples')
// }

// function scratchItem() {
//   console.log('click duplo')
// }