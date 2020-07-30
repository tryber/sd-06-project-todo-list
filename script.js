window.onload = function () {
  // Button click add iten list
  function buttonAddItenList() {
    const inputText = document.querySelector('#texto-tarefa').value;
    const list = document.querySelector('#lista-tarefas');
    const itenLi = document.createElement('li');
    itenLi.classList.add('lines');
    itenLi.innerHTML = inputText;
    list.appendChild(itenLi);

    // Add color background in li line when clicked
    itenLi.addEventListener('click', colorLineClicked);

    // add line through in li when double click
    itenLi.addEventListener('dblclick', function () {
      itenLi.classList.toggle('completed');
    });

    // Button remove all list
    const buttonCleanAll = document.querySelector('#apaga-tudo');
    buttonCleanAll.addEventListener('click', function () {
      const cleanLi = list;
      cleanLi.removeChild(itenLi);
    });

    // Button remove all list completed
    const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
    buttonRemoveCompleted.addEventListener('click', removeAllCompleted);

    // Button remove selected
    const buttonSelected = document.querySelector('#remover-selecionado');
    buttonSelected.addEventListener('click', removeSelected);
  }

  // Button click add iten list
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', buttonAddItenList);

  // Add color background in li line when clicked
  function colorLineClicked() {
    let listLi = document.querySelectorAll('li');
    listLi = event.target;
    const lineSelected = document.querySelector('.line-selected');
    if (lineSelected) {
      lineSelected.classList.remove('line-selected');
    }
    listLi.classList.add('line-selected');
  }

  // Function reset input text
  function cleanTextInput() {
    document.querySelector('#texto-tarefa').value = '';
  }
  const text = document.querySelector('#criar-tarefa');
  text.addEventListener('click', cleanTextInput);

  // Function button remove all list completed
  function removeAllCompleted() {
    const lineCompleted = document.querySelectorAll('.completed');
    for (let index = 0; index < lineCompleted.length; index += 1) {
      lineCompleted[index].remove();
    }
  }

  // Function button remove selected
  function removeSelected() {
    const cleanSelected = document.querySelectorAll('.line-selected');
    for (let index = 0; index < cleanSelected.length; index += 1) {
      cleanSelected[index].remove();
    }
  }
};
