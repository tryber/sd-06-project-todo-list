window.onload = function () {  
  loadList();
}

let tarefas = {
  1: "car",
  2: "bike",
  3: "scooter"
};

let list = document.getElementById("lista-tarefas");

document.querySelector('#criar-tarefa').addEventListener('click', addTask);
document.querySelector('#apaga-tudo').addEventListener('click', delList);


function loadList() {
  let tamanhoObjeto = Object.keys(tarefas).length;
  let orderedList = document.getElementById("lista-tarefas");

  delList();
  for (let index = 1; index <= tamanhoObjeto; index += 1) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(tarefas[index]));
    orderedList.appendChild(listItem);
    listItem.addEventListener("click", changeBgColor);
    listItem.addEventListener("dblclick", taskCompleted);
  }
}

function addTask() {
  let newItem = Object.keys(tarefas).length + 1;
  tarefas[newItem] = document.querySelector('#texto-tarefa').value;
  loadList();
}

function changeBgColor() {
  document.querySelectorAll('li').forEach(function(li) {
    li.style.backgroundColor = '#fff';
  })
 this.setAttribute("style", 'background-color: rgb(128, 128, 128)');
}

function teste() {
  console.log('clicou');
}

function taskCompleted() {
  this.setAttribute("style", 'text-decoration: line-through');
}

function delList() {
  while (list.firstChild){
    list.removeChild(list.firstChild);
  }
}