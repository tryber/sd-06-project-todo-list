window.onload = function() {
  
  const myList = document.getElementById("lista-tarefas");
  // Verifica se a lista foi salva
  if (sessionStorage.getItem("myListSaved") == "true") {
    console.log("entrou");
    myList.innerHTML = sessionStorage.getItem("myList");
    sessionStorage.setItem("myListSaved", "false");
  }

  // Tratamento do botão para Salvar Lista
  let btnSave = document.getElementById("salvar-tarefas");
  btnSave.addEventListener("click", function () {
    sessionStorage.setItem("myList", myList.innerHTML);
    sessionStorage.setItem("myListSaved", "true");
  });

  // Tratamento do botão para incluir o item
  let btnAdd = document.getElementById("criar-tarefa");
  btnAdd.addEventListener("click", function () {
    let myText = document.getElementById("texto-tarefa");
    addItem(myText.value);
    myText.value = "";
    myText.focus();
  });

  // Tratamento do botão para limpar a lista
  let btnClearAll = document.getElementById("apaga-tudo");
  btnClearAll.addEventListener("click", function () {
    const myList = document.getElementById("lista-tarefas");
    while (myList.firstChild) {
      myList.removeChild(myList.lastChild);
    }  
  });

  // Tratamento do botão para Remover itens completados
  let btnClearCompleted = document.getElementById("remover-finalizados");
  btnClearCompleted.addEventListener("click", function () {
    const myListCompleted = document.querySelectorAll(".completed");
    myListCompleted.forEach(function(item) {
      item.parentNode.removeChild(item);
    });
  });

  // Função para adicionar um item na lista
  function addItem(myText) {
    let myItem = document.createElement('li');
    myItem.appendChild(document.createTextNode(myText));
    myList.appendChild(myItem);

    // Altera o item selecionado com o click
    myItem.addEventListener("click", function() {
      chageSelected(myItem); 
    });
    // Marca tarefa como como completada
    myItem.addEventListener("dblclick", function() {
      chageCompleted(myItem); 
    });
  }

  // Alterar a cor de fundo do item do Item Selecionado
  function chageSelected(newSelected){
    let oldSelected = document.querySelector(".selected");
    if (oldSelected) {
      oldSelected.classList.remove("selected");
      oldSelected.style.backgroundColor = "";
    }
    newSelected.classList.add("selected");
    newSelected.style.backgroundColor = "rgb(128 , 128 , 128)";
  }

  // Função para alterar a classe "Completed"
  function chageCompleted(newSelected){
    if (newSelected.classList.contains("completed")) {
      newSelected.classList.remove("completed");  
    } else {
      newSelected.classList.add("completed");
    }
  }

  // Tratamento do botão para Mover para CIMA
  let btnMoveUp = document.getElementById("mover-cima");
  btnMoveUp.addEventListener("click", function() {
    moveItem("up");
  });

  // Tratamento do botão para Mover para BAIXO
  let btnMoveDown = document.getElementById("mover-baixo");
  btnMoveDown.addEventListener("click", function() {
    moveItem("down");
  });

  // Função para mover o item para baixo ou para cima
  function moveItem(direct) {
    const myListLi = document.getElementsByTagName("li");
    let index = -1;
    for (let i = 0; i < myListLi.length; i += 1) {
      if (myListLi[i].classList.contains("selected")) {
        index = i;
      }
    };
    if (direct == "up") {
      if (index > 0) {
        console.log("entrou up");
        changePlaceItem (myListLi, index-1 , index);
      }
    } else if (direct == "down") {
      if ((index >= 0) && (index < myListLi.length-1)) {
        console.log("entrou down");
        changePlaceItem (myListLi, index+1 , index);
      }
    }
  }
  // função para trocar ordem entre dois itens
  function changePlaceItem(myListLi, oldItem, newItem) {
    let auxLi = myListLi[oldItem].innerHTML;
    myListLi[oldItem].innerHTML = myListLi[newItem].innerHTML;
    myListLi[newItem].innerHTML = auxLi;
    chageSelected(myListLi[oldItem]);
    
    let newCompleted = myListLi[newItem].classList.contains("completed");
    let oldCompleted = myListLi[oldItem].classList.contains("completed");
    if ((newCompleted) && (!oldCompleted)) {
      myListLi[oldItem].classList.add("completed");
      myListLi[newItem].classList.remove("completed");
    } else if ((!newCompleted) && (oldCompleted)) {
      myListLi[oldItem].classList.remove("completed");
      myListLi[newItem].classList.add("completed");
    }
  }


}
