window.onload = function (){
  let buttonCriarTarefa = document.querySelector('#criar-tarefa');
  let textoTarefa = document.querySelector('#texto-tarefa');
  let listaTarefas = document.querySelector('#lista-tarefas');

  if (JSON.parse(localStorage.saveList !== undefined)){
    let getTasks = JSON.parse(localStorage.getItem("saveList"));
    for (let i = 0 ; i < getTasks.length ; i += 1){
      let newElement = document.createElement('li');
      newElement.className = getTasks[i].className;
      newElement.innerHTML = getTasks[i].cont;
      newElement.classList.remove('selected');
      if (newElement.classList.contains("completed")){
        newElement.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
      } 
      listaTarefas.appendChild(newElement);
    }
  }

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
    previous.classList.remove('selected');
    itemSelected.style.backgroundColor = 'rgb(128, 128, 128)';
    itemSelected.classList.add('selected');
    previous = itemSelected;
  });

  listaTarefas.addEventListener('dblclick', function(event){
    let itemCompleted = event.target;
    if (itemCompleted.classList.contains('completed')){
      itemCompleted.classList.remove('completed');
      itemCompleted.style.textDecoration = '';
    }else {
      itemCompleted.classList.add('completed')
      itemCompleted.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
    }
  });
    let eraseAllButton = document.getElementById('apaga-tudo');
    eraseAllButton.addEventListener('click', function(){
      let eraseList = document.querySelectorAll('li');
      for (let i = 0 ; i < eraseList.length ; i += 1){
        listaTarefas.removeChild(eraseList[i]);
      }
    });

    let removeFinishedButton = document.querySelector('#remover-finalizados');
    removeFinishedButton.addEventListener('click', function(){
      let removeList = document.querySelectorAll('.completed');
      for (let i = 0 ; i < removeList.length ; i += 1){
        listaTarefas.removeChild(removeList[i]);
      }
    });

    let moveUpButton = document.querySelector('#mover-cima');
    moveUpButton.addEventListener('click', function(){
      const auxList = document.querySelectorAll('li');
      for (let i = 0 ; i < auxList.length ; i += 1){
        if (auxList[i].classList.contains('selected') && i !== 0){
          auxList[i].parentElement.insertBefore(auxList[i], auxList[i - 1]);
        }
      }
    });

    let moveDownButton = document.querySelector('#mover-baixo');
    moveDownButton.addEventListener('click', function(){
      const auxList = document.querySelectorAll('li');
      for (let i = 0 ; i < auxList.length ; i += 1){
        if (auxList[i].classList.contains('selected') && i !== auxList.length - 1){
          auxList[i].parentElement.insertBefore(auxList[i + 1], auxList[i]);
        }
      }
    });

    let saveTasksButton = document.querySelector('#salvar-tarefas');
    saveTasksButton.addEventListener('click', function(){
      let aux = document.querySelectorAll('li');
      let saveList = [];
      //console.log(aux);
      for (let i = 0 ; i < aux.length ; i += 1){
        let obj = new Object();
        obj.className = aux[i].className
        obj.cont = aux[i].innerHTML;
        //console.log(aux[i].innerHTML);
        saveList.push(obj);
      }
      //console.log(saveList);
      localStorage.setItem('saveList', JSON.stringify(saveList));
    });
  
}