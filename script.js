window.onload = function () {  
  loadList();
}

let tarefas = {
  1: "car",
  2: "bike",
  3: "scooter"
};

function loadList() {
  let tamanhoObjeto = Object.keys(tarefas).length;
  let orderedList = document.getElementById("lista-tarefas");

  for (let index = 1; index <= tamanhoObjeto; index += 1) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(tarefas[index]));
    orderedList.appendChild(listItem);
    listItem.addEventListener("click", teste);
  }
}

function teste() {
  console.log('clicou');
}