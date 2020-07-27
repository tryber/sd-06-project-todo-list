window.onload = function (){
  let buttonCriarTarefa = document.querySelector('#criar-tarefa');
  let textoTarefa = document.querySelector('#texto-tarefa');
  let listaTarefas = document.querySelector('#lista-tarefas');

  buttonCriarTarefa.addEventListener('click', function(){
    let elementList = document.createElement('li');
    elementList.innerHTML = textoTarefa.value;
    //console.log(elementList);
    listaTarefas.appendChild(elementList);
    textoTarefa.value = "";
  });

  let previous = document.createElement('li');
  previous.style.backgroundColor = 'white';
  listaTarefas.addEventListener('click', function(event){
    let itemSelected = event.target;
    previous.style.backgroundColor = 'white'
    itemSelected.style.backgroundColor = 'rgb(128, 128, 128)';
    previous = itemSelected;
  });

  listaTarefas.addEventListener('dblclick', function(event){
    let itemCompleted = event.target;
    if (itemCompleted.className != 'completed'){
      itemCompleted.className = 'completed'
      itemCompleted.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
    }else {
      itemCompleted.className = '';
      itemCompleted.style.textDecoration = '';
    }
  });
  
}