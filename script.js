window.onload = function () { 
  // Button click add iten list
  function buttonAddItenList() {
    let inputText = document.querySelector('#texto-tarefa').value;
    let list = document.querySelector('#lista-tarefas');
    let itenLi = document.createElement('li');
    // itenLi.style.backgroundColor = 'white';
    itenLi.classList.add('lines');
    itenLi.innerHTML = inputText;
    list.appendChild(itenLi);

    itenLi.addEventListener('click', colorLineClicked);

    // add line through in li when double click
    itenLi.addEventListener('dblclick', function() {
      itenLi.classList.toggle('completed');
    })
  }

  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', buttonAddItenList);

  // Function reset input text
  function cleanTextInput () {
    document.querySelector('#texto-tarefa').value = '';
  }

  const text = document.querySelector('#criar-tarefa');
  text.addEventListener('click', cleanTextInput);

  // Add color background in li line when clicked
  function colorLineClicked () {
    let listLi = document.querySelectorAll('li');
    listLi = event.target;
    let lineSelected = document.querySelector('.line-selected');
    if (lineSelected) {
      lineSelected.classList.remove('line-selected');
    }
      listLi.classList.add('line-selected');
  }
}
