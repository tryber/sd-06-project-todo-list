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
  let contador = 0;
  for (let i in listaItems) {
    //console.log(listaItems[i].className);
    if (listaItems[i].className === 'select') {
      contador += 1;
    }else if (contador > 0) {
      for (i in listaItems ) {
        listaItems[i].className = '';
      }  
    }
  }
  selectItemList.className = 'select';
}
