//Adiciona tarefa a lista
function addTask() {
  let task = document.createElement('li');
  task.addEventListener('click',selectItem);
  let lista = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  task.innerHTML = input.value;
  lista.appendChild(task);
  input.value = '';
}

//Seleciona item e troca seleção de item
function selectItem(event) {
  let selectItemList = event.target;
  let listaItems = document.getElementsByTagName('li');
  for (let i in listaItems) {
    listaItems[i].classList.remove('selected');
  }
  selectItemList.className = 'selected';
  selectItemList.addEventListener('dblclick', itemCompleted);
}
//Seta item como completado
function itemCompleted(event) {
  let completedItem = event.target;
  if ( completedItem.classList != 'completed'){
    completedItem.classList.add('completed');
    // console.log(completedItem);
  }else {
    completedItem.classList.remove('completed');
    // console.log(completedItem);
  }
}

// function selectItem(event) {
//   let selectItemList = event.target;
//   let listaItems = document.getElementsByTagName('li');
//   let contador = 0;
//   for (let i in listaItems) {
//     if (listaItems[i].className === 'selected') {
//       contador += 1;
//     }else if (contador > 0) {
//       for (i in listaItems) {
//         listaItems[i].className.remove('selected');
//       }  
//     }
//   }
//   selectItemList.className = 'selected';
//   selectItemList.addEventListener('dblclick', itemCompleted);
// }