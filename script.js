window.onload = function() {
  
  let myList = document.getElementById("lista-tarefas");

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

  // Alterar a cor de fundo do item
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


  // function clearColorSelect() {
  //   for(var i = 0; i < myList.length; i += 1) {
  //     let myItem = myList[i];
  //     myList.style.backgroundColor = "rgb(64 , 119 , 100)";
  //   }
  // }

  // let btnClear = document.getElementById("clear-board");
  // btnClear.addEventListener('click', function() {
  //   for(var i = 0; i < Pixels.length; i += 1) {
  //     let myItemPixel = Pixels[i];
  //     myItemPixel.style.backgroundColor = "rgb(255 , 255 , 255)";
  //   }
  // });


  // let myColor02 = document.getElementById("color02");
  // myColor02.style.backgroundColor = "rgb(155 , 50 , 8)";  
	// myColor02.addEventListener("click", function () {
	// 	chageSelected(myColor02);
	// });

  // let myColor03 = document.getElementById("color03");
  // myColor03.style.backgroundColor = "rgb(198 , 168 , 108)";  
	// myColor03.addEventListener("click", function () {
	// 	chageSelected(myColor03);
	// });	

  // let myColor04 = document.getElementById("color04");
  // myColor04.style.backgroundColor = "rgb(45 , 75 , 139)";
	// myColor04.addEventListener("click", function () {
	// 	chageSelected(myColor04);
  // });	
  
  // let colorSelected = "rgb(0 , 0 , 0)";
  
  // function chageSelected(newSelected){
  //   let oldSelected = document.querySelector(".selected");
  //   oldSelected.classList.remove("selected");
  //   newSelected.classList.add("selected");

  //   colorSelected = newSelected.style.backgroundColor;
  // }

  // let Pixels = document.getElementsByClassName("pixel");
  // for(var i = 0; i < Pixels.length; i += 1) {
  //   let myItemPixel = Pixels[i];
  //   myItemPixel.addEventListener('click', function() {
  //     myItemPixel.style.backgroundColor = colorSelected;
  //   });
  // }

  // let btnClear = document.getElementById("clear-board");
  // btnClear.addEventListener('click', function() {
  //   for(var i = 0; i < Pixels.length; i += 1) {
  //     let myItemPixel = Pixels[i];
  //     myItemPixel.style.backgroundColor = "rgb(255 , 255 , 255)";
  //   }
  // });

}
