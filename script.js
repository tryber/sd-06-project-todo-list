window.onload = function () { 
  // Button click add iten list
  function buttonAddItenList() {
    let inputText = document.querySelector('#texto-tarefa').value;
    let list = document.querySelector('#lista-tarefas');
    let itenLi = document.createElement('li');
    itenLi.style.backgroundColor = 'white';
    itenLi.innerHTML = inputText;
    list.appendChild(itenLi);

    // Add color background in li line when clicked
    itenLi.addEventListener('click', function() {
      itenLi = event.target;
      itenLi.style.backgroundColor = 'rgb(128, 128, 128)';
    })

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
}
