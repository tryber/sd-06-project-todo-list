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
    
//   elementLi.addEventListener("click", function(){
//    let item = document.querySelectorAll("#li");
//    for(let index = 0; index < item.length; index += 1) {
//      item[index].classList.remove("backGroundColor");
//    }
//     elementLi.classList.add("backGroundColor"); 
     
// });

elementLi.addEventListener("click", function(){
  let item = document.querySelectorAll("#li");
  for(let index = 0; index < item.length; index += 1) {
    item[index].classList.remove("backGroundColor");
  }
   elementLi.classList.add("backGroundColor"); 
    
});

elementLi.addEventListener("dblclick", function(event) {
  event.target.classList.add("completed");
})

// if (elementLi.classList = "completed") {
// elementLi.addEventListener("dblclick", function(event) {
//   event.target.classList.add("undocompleted");
// });  
// };


   
let clearAllButton = document.querySelector("#apaga-tudo");
  clearAllButton.addEventListener("click", function() {
  for (let index = 0; index < elementOl.children.length; index += 1) {
    console.log(elementOl.children.length);
    document.getElementById("lista-tarefas").removeChild(elementOl.childNodes[index]);
    }
    });
          
});
