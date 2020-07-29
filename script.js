//criar filho de head com o output da lista

let elementOl = document.createElement('ol');
  elementOl.id = "lista-tarefas";
  document.body.appendChild(elementOl);  
  console.log(elementOl);

let button = document.getElementById("criar-tarefa");

let activity = document.getElementById("texto-tarefa");

button.addEventListener("click", function() {
  let elementLi = document.createElement('li');    
    elementLi.innerHTML = activity.value;
    elementOl.appendChild(elementLi);
    activity.value = "";  
  });  

// let lineElement = document.getElementsByTagName("li");

// elementOl.addEventListener("click", function() {
//   for(let index = 0; index < lineElement.length; index += 1) {
//     lineElement[index].classList.remove("backGroundColor");
//   // }
//   // lineElement.classList.add("backGroundColor");
//   });


//   // id="apaga-tudo">Apagar Lista</button> <button id="remover-finalizados">

// let buttonCleanAll = document.querySelector("#apaga-tudo");
//   buttonCleanAll.addEventListener("click", function() {
//   document.getElementById("lista-tarefas").removeChild(elementLi);
//   console.log("oi");
// });



  
