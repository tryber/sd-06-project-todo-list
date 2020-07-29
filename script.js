//Variables
const orderedList = document.getElementById('lista-tarefas');
const typedtext = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');
const clearButton = document.getElementById('apaga-tudo');


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

//Order itens

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

  //Clear the list content
  clearButton.addEventListener('click', function() {
    let displayList = document.querySelectorAll('li');
    for (let index in displayList) {
      orderedList.removeChild(displayList[index]);
    }
  })
