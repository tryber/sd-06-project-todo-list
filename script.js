const insert = document.querySelector('#criar-tarefa');
const remove = document.querySelector('#remover-finalizados');
const clear = document.querySelector('#apaga-tudo');

function addItemList(){
    if (document.querySelector('#texto-tarefa').value !== "") {
    let newItem = document.createElement('li');
    newItem.innerHTML = document.querySelector('#texto-tarefa').value;
    document.querySelector('#lista-tarefas').appendChild(newItem);
    document.querySelector('#texto-tarefa').value = '';    
    }else{
        console.log("vazio");
    }
}

function itemSelected(event) {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    } else {
      event.target.classList.add('selected');
    }
  }

function taskTop(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }

  
  
remove.addEventListener('click', function () {
  let testPass = document.querySelectorAll('.completed')
  for(let i = 0; i < testPass.length; i += 1){
    document.querySelector('#lista-tarefas').removeChild(testPass[i]);
  }
});

clear.addEventListener('click', function () {
    for (let i = 0; i < document.querySelectorAll('#lista-tarefas').length; i += 1) {
      document.querySelectorAll('#lista-tarefas')[i].remove();
    }
  });

insert.addEventListener('click', addItemList);  

document.querySelector('#lista-tarefas').addEventListener('click', itemSelected);

document.querySelector('#lista-tarefas').addEventListener('dblclick', taskTop);