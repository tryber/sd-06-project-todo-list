//Variables
const orderedList = document.getElementById('lista-tarefas');
const typedtext = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');


//Create the list itens, and add them in the orderedList when the button is clicked.
function addItens() {
    if (typedtext.value !== '') {
        const listItens = document.createElement('li');
        listItens.innerHTML = typedtext.value;
        orderedList.appendChild(listItens);
        typedtext.value = '';
    }
}
addTaskButton.addEventListener('click', addItens);

//Order itens

//Change the background color of a selected iten when clicked
function selectTask(event) {
  let selectedTask = event.target;
  if (document.querySelector('.selected-task') !== null) {
    document.querySelector('.selected-task').classList.remove('selected-task');
  } else {
    document.querySelector('.selected-task').classList.add('selected-task');
  }
}
