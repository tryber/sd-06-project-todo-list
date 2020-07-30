window.onload = function () {


  const inputElement = document.querySelector('#texto-tarefa');
  const submitElement = document.querySelector('#criar-tarefa');
  const listElement = document.querySelector('#lista-tarefas');
  const ereseAll = document.querySelector('#apaga-tudo');
  const ereseSel = document.querySelector('#remover-selecionado');
  const ereseFin = document.querySelector('#remover-finalizados');
  const upBT = document.querySelector('#mover-cima');
  const dnBT = document.querySelector('#mover-baixo');
  const saveBT = document.querySelector('#salvar-tarefas');

  const todos = [];

  if (localStorage.ListaDeTarefas !== undefined) {
    listElement.innerHTML = localStorage.ListaDeTarefas;
  }

  function showTodos() {
    listElement.innerHTML = '';
    for (let todo of todos) {
      const showElement = document.createElement('li');
      const showText = document.createTextNode(todo);
      showElement.appendChild(showText);
      showElement.classList.add('liClass')
      listElement.appendChild(showElement);
    }
  }

  submitElement.addEventListener('click', function () {
    let inputString = inputElement.value;
    todos.push(inputString);
    inputElement.value = '';
    showTodos();
  });

  ereseAll.addEventListener('click', function () {
    todos.splice(0, todos.length)
    showTodos();
  });

  listElement.addEventListener('click', function () {
    for (const j of document.getElementsByTagName('li')) {
      if (j.classList.contains('selected')) {
        j.classList.remove('selected');
        console.log(j);
      }
    }
    event.target.classList.add('selected');
  });

  ereseSel.addEventListener('click', function () {
    let pos = todos.indexOf(document.querySelector('.selected').innerHTML)
    todos.splice(pos, 1);
    showTodos();
  });

  listElement.addEventListener('dblclick', function (event) {
    for (let index = 0; index < document.getElementsByTagName.length; index++) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
        event.target.style.textDecoration = '';
      } else {
        event.target.classList.add('completed')
        event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      }
    }
  });

  ereseFin.addEventListener('click', function () {
    let colecao = document.getElementsByClassName('completed');
    for (let i = 0; i < colecao.length; i += 1) {
      for (const key in todos) {
        if (colecao.item(i).innerHTML === todos[key]) {
          todos.splice(key, 1)
        }
      }
    }
    showTodos();
  });

  upBT.addEventListener('click', function () {
    const lis = listElement.childNodes;
    for (let index = 1; index < lis.length; index += 1) {
      if (lis[index].classList.contains('selected')) {
        listElement.insertBefore(lis[index], lis[index - 1]);
      }
    }
  });

  dnBT.addEventListener('click', function () {
    const lis = listElement.childNodes;
    for (let index = lis.length - 2; index >= 0; index -= 1) {
      if (lis[index].classList.contains('selected')) {
        listElement.insertBefore(lis[index + 1], lis[index]);
      }
    }
  });



saveBT.addEventListener('click', function () {
  const liSalvo = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('ListaDeTarefas', liSalvo);
});

}
