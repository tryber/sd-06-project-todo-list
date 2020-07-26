window.onload = function () {


  const inputElement = document.querySelector('#texto-tarefa');
  const submitElement = document.querySelector('#criar-tarefa');
  const listElement = document.querySelector('#lista-tarefas');
  const ereseAll = document.querySelector('#apaga-tudo');
  const listaLi = document.querySelector('.lista');

  let todos = [];

  function showTodos() {
    listElement.innerHTML = '';
    let aux = 0;
    for (let todo of todos) {
      let showElement = document.createElement('li');
      let showText = document.createTextNode(todo);
      aux += 1;
      showElement.appendChild(showText);
      //showElement.className = "lista";
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
    for (const j of document.getElementsByTagName('li')) {
      if (j.className === "selected") {
        j.classList = '';
      } else {
        event.target.classList = 'selected';
      }
    }

  })

}
