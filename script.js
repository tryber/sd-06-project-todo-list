//criar filho de head com o output da lista

let elementOl = document.createElement('ol');
  // Reqquisito 4
  elementOl.id = "lista-tarefas";
  document.body.appendChild(elementOl);  
  console.log(elementOl);

let button = document.getElementById("criar-tarefa");
      
button.addEventListener("click", function makeList() {
  let activity = document.getElementById("texto-tarefa");
  // console.log(activity);
     
  // let activityArray
  let elementLi = document.createElement('li');
    // elementLi.innerHTML = `${activity}`;
    elementLi.innerHTML = activity.value;
    elementOl.appendChild(elementLi);
    // console.log(`${activity}`);
    activity.value = "";  
  });  

elementLi.addEventListener("click", function(){
  let lineElement = document.getElementsByTagName("li");
  for(let index = 0; index < lineElement.length; index += 1) {
      lineElement[index].classList.remove("backGroundColor");
  }
  lineElement.classList.add("backGroundColor");
  });


  
