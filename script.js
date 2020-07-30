// const botaoCriarTarefa = document.querySelector('#criar-tarefa');
// const addTarefa = document.querySelector('#texto-tarefa');
// const criarLista = document.querySelector('#lista-tarefas');

// function createLi() {
//   const itemLista = addTarefa.value;
//   const item = document.createElement('li');
//   item.innerText = itemLista;
//   item.className = 'work';
//   if (itemLista === '') {
//     const span = document.createElement('span');
//     span.innerText = 'digite uma tarefa';
//     span.className = 'span';
//     document.querySelector('#addTarefas').appendChild(span);

//   } if (criarLista.appendChild(item)) {
//     addTarefa.value = '';
//   }
// }

// botaoCriarTarefa.addEventListener('click', createLi);

// const addTask = document.querySelector('#criar-tarefa');
// const taskList = document.querySelector('#lista-tarefas');

// function addTaskToList() {
//   const inputTask = document.querySelector('#texto-tarefa');
//   let taskElement = document.createElement('li');
//   taskElement.innerText = inputTask.value;
//   inputTask.value = '';
//   taskList.appendChild(taskElement);
// }

// function changeTaskToGrey(event) {
//   event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
// }

// addTask.addEventListener('click', addTaskToList);
// taskList.addEventListener('click', changeTaskToGrey);

const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
function listarItens() {
  const itemLista = document.createElement('li');
  itemLista.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(itemLista);
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', listarItens);
