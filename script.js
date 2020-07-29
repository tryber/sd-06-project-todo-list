window.onload = function () { 
  // Button click add iten list
  let button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', buttonAddItenList);

  function buttonAddItenList() {
    let inputText = document.querySelector('#texto-tarefa').value;
    let list = document.querySelector('#lista-tarefas');
    let itenLi = document.createElement('li');

    itenLi.innerHTML = inputText;
    list.appendChild(itenLi);
  }
  // Function reset input text
  function cleanTextInput () {
    document.querySelector('#texto-tarefa').value = '';
  }

  let text = document.querySelector('#criar-tarefa');
  text.addEventListener('click', cleanTextInput);

}
