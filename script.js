const addButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaMae = document.querySelector('#lista-tarefas')
const apagaButton = document.getElementById('apaga-tudo')
const rmvFinalizados = document.getElementById('remover-finalizados')

window.onload = function (){
  setupClickButton();
}

function setupClickButton(){
  addButton.addEventListener('click', function () {
    var listItem = document.createElement('li');
    listaMae.appendChild(listItem)
    listItem.innerText = input.value;
    listItem.className = 'tarefa'
    input.value = ''
    listItem.addEventListener('click', clickCorSelected);
    listItem.addEventListener('dblclick', doubleClickAdd);
  })
  apagaButton.addEventListener('click', function () {
    while (listaMae.firstChild) {
      listaMae.removeChild(listaMae.lastChild)
    }
  })  
  rmvFinalizados.addEventListener('click', function () {
    let completados = document.querySelectorAll('.completed');
    completados.forEach(function(listaMae) {
      listaMae.parentNode.removeChild(listaMae);
    });

    
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





