const addButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaMae = document.querySelector('#lista-tarefas')

window.onload = function (){
  setupClickButton();

  // setup click do item da Lista

  // setup do double click do item da lista
}

function setupClickButton(){
  addButton.addEventListener('click', function () {
    var listItem = document.createElement('li');
    listaMae.appendChild(listItem)
    listItem.innerText = input.value;
    listItem.className = 'tarefa'
    input.value = ''
    listItem.addEventListener('click', clickCorSelected);
    listItem.addEventListener('dblclick', doubleClickAdd)
  })
}

function clickCorSelected(event){
  let selectedListItem = event.target
    for (let item = 0; item < listaMae.childNodes.length; item++) {
      if (document.getElementsByClassName('tarefa')[item].style.backgroundColor === 'rgb(128, 128, 128)'){
        document.getElementsByClassName('tarefa')[item].style.backgroundColor = 'white'
      }
    }
  selectedListItem.style.background = 'rgb(128, 128, 128'
}

function doubleClickAdd(event){
  let selectedListItem = event.target
  selectedListItem.classList.add('completed')
  if (selectedListItem.classList.contains('completed')){
    selectedListItem.addEventListener('dblclick', function(){
      selectedListItem.classList.remove('completed');
    })
  }
}






  /*  list.addEventListener('click', function (){
      list.style.background = 'rgb(128, 128, 128)'; 
      if(list.style.background === 'rgb(128, 128, 128)') {
        list.addEventListener('click', function (){
          list.style.background = 'white'
        })
      }
    })
    list.addEventListener('dblclick', function () {
      list.classList.add('completed')
      if (list.classList.contains('completed')) {
        list.addEventListener('dblclick', function(){
          list.classList.remove('completed')
        })
      }
    })
  })*/





