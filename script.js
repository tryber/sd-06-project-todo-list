//Variables
const orderedList = document.getElementById('lista-tarefas');
const typedtext = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');
const clearButton = document.getElementById('apaga-tudo');


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
orderedList.childNodes.addEventListener('click', function(event) {
  let liItens = target.event;
  for (let index = 0; index < orderedList.childNodes.length; index += 1) {
    if (orderedList.childNodes[index] !== liItens) {
      orderedList.childNodes[index].style.backgroundColor = 'white';
    }
  }
  if (liItens.style.backgroundColor === 'rgb(128, 128, 128)') {
    liItens.style.backgroundColor = 'white';
  } else {
    liItens.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  })

  //Clear the list content
  clearButton.addEventListener('click', function() {
    let displayList = document.querySelectorAll('li');
    for (let index in displayList) {
      orderedList.removeChild(displayList[index]);
    }
  })
