window.onload = function() {
  
  let myList = document.getElementById("lista-tarefas");
  
  let btnAdd = document.getElementById("criar-tarefa");
  
  btnAdd.addEventListener("click", function () {
    let myText = document.getElementById("texto-tarefa");
    addItem(myText.value)
    myText.value = "";
  });

  function addItem(myText) {
    let myItem = document.createElement('li');
    myItem.appendChild(document.createTextNode(myText));
    myList.appendChild(myItem);
    
    myItem.addEventListener("click", function(){
      myItem.style.backgroundColor = "rgb(128 , 128 , 128)";
    });
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
