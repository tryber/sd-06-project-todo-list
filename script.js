window.onload = function () {  
  loadList();
}

let tarefas = {
  1: "car",
  2: "bike",
  3: "scooter"
};

document.querySelector('#criar-tarefa').addEventListener('click', addTask);

function loadList() {
  let tamanhoObjeto = Object.keys(tarefas).length;
  let orderedList = document.getElementById("lista-tarefas");

  for (let index = 1; index <= tamanhoObjeto; index += 1) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(tarefas[index]));
    orderedList.appendChild(listItem);
    listItem.addEventListener("click", changeBgColor);
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