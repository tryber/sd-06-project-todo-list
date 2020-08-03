//faltam 8 e 11

let elementOl = document.createElement('ol');
  elementOl.id = "lista-tarefas";
  document.body.appendChild(elementOl);  
  
let button = document.getElementById("criar-tarefa");

let activity = document.getElementById("texto-tarefa");

button.addEventListener("click", function() {
  let elementLi = document.createElement('li');    
    elementLi.innerHTML = activity.value;
    elementOl.appendChild(elementLi);
    activity.value = "";    

    // function changeSelected(select) {
    //   let selected = document.querySelector('.selected');
    //   selected.classList.remove('selected');
    //   select.className += 'selected';
    // }

    
    // let itemSelected = document.querySelectorAll('li');
    // createList.addEventListener('click', function (e) {
    //   changeSelected(e.target);
    //   // e.target.className = 'selected';
    // });

    
    

elementLi.addEventListener("click", function(event){
  for (let index = 0; index < elementOl.children.length; index += 1) {
    elementOl.childNodes[index].classList.remove("backGroundColor");
    event.target.classList.add("backGroundColor");
    console.log(event.target)};    
});


elementLi.addEventListener("dblclick", function(target){
  event.target.classList.add("completed");
  if(elementLi.classList.contains("completed")){
    elementLi.addEventListener('dblclick', function(){
      elementLi.classList.remove('completed');
    })
  }
});

   
let clearAllButton = document.querySelector("#apaga-tudo");
  clearAllButton.addEventListener("click", function() {
  for (let index = 0; index < elementOl.children.length; index += 1) {
    console.log(elementOl.children.length);
    document.getElementById("lista-tarefas").removeChild(elementOl.childNodes[index]);
    }
    });
});        
