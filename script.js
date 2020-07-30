const addButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaMae = document.querySelector('#lista-tarefas');
const apagaButton = document.getElementById('apaga-tudo');
const rmvFinalizados = document.getElementById('remover-finalizados');
const salvaLista = document.getElementById('salvar-tarefas');
const up = document.getElementById('mover-cima');
const down = document.getElementById('mover-baixo');
const rmvSelecionado = document.getElementById('remover-selecionado')

window.onload = function (){
  setupClickButton();
  if (localStorage.ListaTarefas !== undefined) {
    document.getElementById('lista-tarefas').innerHTML = localStorage.ListaTarefas;
  }
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
  salvaLista.addEventListener('click', function () {
    localStorage.setItem('ListaTarefas', listaMae.innerHTML)
  })
    down.addEventListener('click', function () {
    const lista = listaMae.childNodes;
    for (let i = lista.length - 2; i>= 0; i-= 1) {
      if(lista[i].style.background === 'rgb(128, 128, 128)') {
        listaMae.insertBefore(lista[i + 1], lista[i]);
      }
    }
  })
  up.addEventListener('click', function () {
    const lista = listaMae.childNodes;
    for (let i = 1; i < lista.length; i += 1) {
      if (lista[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        listaMae.insertBefore(lista[i], lista[i - 1]);
      }
    }
  })
  rmvSelecionado.addEventListener('click', function () {
    for (let i = 0; i < listaMae.childNodes.length; i++) {
      if (listaMae.childNodes[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        listaMae.removeChild(listaMae.childNodes[i]);
      }
    }
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






