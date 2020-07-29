//criar filho de head com o output da lista

let elementOl = document.createElement('ol');
  // Reqquisito 4
  elementOl.id = "lista-tarefas";
  document.body.appendChild(elementOl);  
  console.log(elementOl);

let button = document.getElementById("criar-tarefa");
let elementLi = document.createElement('li');

button.addEventListener("click", function makeList() {
  let activity = document.getElementById("texto-tarefa");
  // console.log(activity);
     
  // let activityArray
  
    // elementLi.innerHTML = `${activity}`;
    elementLi.innerHTML = activity.value;
    elementOl.appendChild(elementLi);
    // console.log(`${activity}`);
    activity.value = "";  
  });  
  
let lineElement = document.getElementsByTagName("li");
elementLi.addEventListener("click", function(){
  
  for(let index = 0; index < lineElement.length; index += 1) {
      lineElement[index].classList.remove("backGroundColor");
  }
  lineElement.classList.add("backGroundColor");
  });


  // id="apaga-tudo">Apagar Lista</button> <button id="remover-finalizados">

let buttonCleanAll = document.querySelector("#apaga-tudo");
  buttonCleanAll.addEventListener("click", function() {
  document.getElementById("lista-tarefas").removeChild(elementLi);
  console.log("oi");
});



  
