/*let lista=document.getElementById("lista-tarefas");
function inicia() {
 document.getElementById("criar-tarefa").addEventListener("click", function(){
   let texto=document.getElementById("texto-tarefa");
   let listItem=document.createElement("li");   
   listItem.textContent=texto.value;
   lista.appendChild(listItem);  
   texto.value="";
   texto.focus()
 });
}

function apagarTudo(){
  lista.removeChild(list.childNodes[lista.lengh])

  
  
}
window.addEventListener("load", inicia);*/
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
orderedList.addEventListener('dbclick', function() {
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
    let displayList = document.querySelectorAll('.iten');
    for (let index = 0; index < displayList.length; index += 1) {
      orderedList.removeChild(displayList[index]);
    }
  })
