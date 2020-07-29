window.onload = function () {  

}

let tarefas = {};

let list = document.getElementById("lista-tarefas");

document.querySelector('#criar-tarefa').addEventListener('click', addTask);
document.querySelector('#apaga-tudo').addEventListener('click', delList);

function loadList() {
  let tamanhoObjeto = Object.keys(tarefas).length;
  let orderedList = document.getElementById("lista-tarefas");
  let listItem = document.createElement('li');
  
  listItem.appendChild(document.createTextNode(tarefas[tamanhoObjeto]));
  orderedList.appendChild(listItem);
  listItem.addEventListener("click", changeSelected);
  listItem.addEventListener("dblclick", taskCompleted);
  
  console.log(tarefas);
}

function addTask() {
  let newItem = Object.keys(tarefas).length + 1;
  tarefas[newItem] = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  loadList();
}

/*
function changeBgColor() {
  document.querySelectorAll('li').forEach(function(li) {
    li.style.backgroundColor = '#fff';
  })
 this.setAttribute("style", 'background-color: rgb(128, 128, 128)');
}
*/

function changeSelected() {
  let oldSelected = document.querySelector('.selected');
  let newSelected = event.target;

  if (oldSelected !== null) {
    oldSelected.classList.remove('selected');
  }
  newSelected.classList.add('selected');
}


function teste() {
  console.log('clicou');
}

function taskCompleted() {
  this.setAttribute("style", 'text-decoration: line-through');
}

function delList() {
  let tamanhoObjeto = Object.keys(tarefas).length;

  for (let index = 1; index <= tamanhoObjeto; index += 1){
    list.removeChild(list.firstChild);
    delete tarefas[index];
  }
}