//criar filho de head com o output da lista

let elementUl = document.createElement('ol');
  // Reqquisito 4
  // elementUl.idName = "lista-tarefas";
  document.body.appendChild(elementUl);  
  console.log(elementUl);

let button = document.getElementById("criar-tarefa");
      
button.addEventListener("click", function makeList() {
  let activity = document.getElementById("texto-tarefa").value;
  console.log(activity);
     
  // let activityArray
  let elementLi = document.createElement('li');
    elementLi.innerHTML = `${activity}`;
    elementUl.appendChild(elementLi);
    console.log(`${activity}`);
    activity = "";
  // Requisito 5  
  // limpar caixa
  });  
      
  


  
