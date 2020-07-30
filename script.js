window.onload = function () {


  const inputElement = document.querySelector('#texto-tarefa');
  const submitElement = document.querySelector('#criar-tarefa');
  const listElement = document.querySelector('#lista-tarefas');
  const ereseAll = document.querySelector('#apaga-tudo');
  const ereseSel = document.querySelector('#remover-selecionado');
  const ereseFin = document.querySelector('#remover-finalizados')


  let todos = [];

  function showTodos() {
    listElement.innerHTML = '';
    let aux = 0;
    for (let todo of todos) {
      let showElement = document.createElement('li');
      let showText = document.createTextNode(todo);
      aux += 1;
      showElement.appendChild(showText);
      listElement.appendChild(showElement);

    }
  }

  submitElement.addEventListener('click', function () {
    let inputString = inputElement.value;
    todos.push(inputString);
    inputElement.value = '';
    showTodos();
  })

  ereseAll.addEventListener('click', function () {
    todos.splice(0, todos.length)
    showTodos();
  })
  listElement.addEventListener('click', function () {
    console.log(document.getElementsByTagName('li').length);
    for (const j of document.getElementsByTagName('li')) {
      if (j.classList.contains('selected')) {
        j.classList.remove('selected');
        console.log(j);
      }
    }
    event.target.classList.add('selected');
  })




  ereseSel.addEventListener('click', function () {
    let pos = todos.indexOf(document.querySelector('.selected').innerHTML)
    todos.splice(pos, 1);
    showTodos();
  })

  listElement.addEventListener('dblclick', function (event) {
    for (const i of document.getElementsByTagName('li')) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
        event.target.style.textDecoration = '';
      } else {
        event.target.classList.add('completed')
        event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      }
    }

  })

  ereseFin.addEventListener('click', function () {

    let colecao = document.getElementsByClassName('completed')
    for (let i = 0; i < colecao.length; i += 1) {
      console.log(colecao.item(i).innerHTML)
      for (const key in todos) {
        if (colecao.item(i).innerHTML === todos[key]) {
          todos.splice(key, 1)
        }
      }
    }
    showTodos();
  })
}
