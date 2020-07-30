//Variables
const orderedList = document.getElementById('lista-tarefas');
const typedtext = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');
const clearButton = document.getElementById('apaga-tudo');
const removeCompletedItens = document.getElementById('remover-finalizados');


//Create the list itens, and add them in the orderedList when the button is clicked.
function addItens() {
    if (typedtext.value !== '') {
        const listItens = document.createElement('li');
        listItens.className = 'iten';
        listItens.innerHTML = typedtext.value;
        orderedList.appendChild(listItens);
        typedtext.value = '';
    }
}
addTaskButton.addEventListener('click', addItens);

//Change the background color of a selected iten when clicked
orderedList.addEventListener('click', function() {
  if (document.querySelector('.selected-task') !== null) {
    document.querySelector('.selected-task').style.backgroundColor = 'white';
    document.querySelector('.selected-task').classList.remove('selected-task');
  }
  if (event.target.className === 'iten') {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    event.target.classList.add('selected-task');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)'
  event.target.classList.add('selected-task');
})

//Risk the completed itens
orderedList.addEventListener('dblclick', function() {
  if (event.target.className === 'iten selected-task') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed')
  }
})

  //Clear the list content
  clearButton.addEventListener('click', function() {
    let displayList = document.querySelectorAll('.iten');
    for (let index = 0; index < displayList.length; index += 1) {
      orderedList.removeChild(displayList[index]);
    }
  })

  //Clear only the completed itens
  removeCompletedItens.addEventListener('click', function() {
    let completedItens = document.querySelectorAll('.completed');
    for (let index = 0; index < completedItens.length; index += 1) {
      orderedList.removeChild(completedItens[index]);
    }
  })
