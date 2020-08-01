//ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
//criar lista em javascript , adicionar os itens da lista em um array


const getTextInput = document.getElementById("texto-tarefa");
const getOlContainer = document.querySelector(".task-list-container");

addTask();
cleanTasks();
cleanCompletedTasks();
cleanSelectedTasks();

//Cria o item da lista  // Esta função é chamada quando o evento de click no botão de adicionar ocorre
function createLi(){
  let createLi = document.createElement("li");
  let getOl = document.querySelector("#lista-tarefas");

  createLi.classList.add("list-item");
  createLi.innerHTML = getTextInput.value;

  //Por aqui eu pego o clique e dbclique do botão no li e adiciono a class 'selected' e 'completed', caso o elemento já a tenha eu removo xd
  createLi.addEventListener("click", function(){ 
    if(createLi.classList.contains("selected")){

      createLi.classList.remove("selected");

    }else{

      createLi.classList.add("selected");

    }
  });

  createLi.addEventListener("dblclick", function(event){ 
    let getLiEventTarget = event.target;

    if(!getLiEventTarget.classList.contains("completed")){
      getLiEventTarget.classList.add("completed");
    }else{
      getLiEventTarget.classList.remove("completed");
    }

  });

  getOl.appendChild(createLi);
  getTextInput.value = "";
}

//Adiciona a tarefa na lista
function addTask(){
  let getAddBtn = document.querySelector("#criar-tarefa");
  getAddBtn.addEventListener("click", createLi);
}

//Limpa a lista de tarefas 
function cleanTasks(){
  let getCleanAllBtn = document.querySelector("#apaga-tudo");
  getCleanAllBtn.addEventListener("click", getAllElementsAndEraseIt);
}

function getAllElementsAndEraseIt(){
  getOlContainer.parentElement.removeChild(getOlContainer);
}

//Remove SELECIONADOS
function cleanSelectedTasks(){
  let getCleanSelectedTasksBtn = document.querySelector("#remover-selecionado");
  getCleanSelectedTasksBtn.addEventListener("click", function(){

    let getAllSelectedTasks = document.querySelectorAll("li");
    
    for(i in getAllSelectedTasks){

      if(getAllSelectedTasks[i].classList.contains("selected")) {
          getAllSelectedTasks[i].remove();
      }
    }
  });
}

//Remove FINALIZADOS
function cleanCompletedTasks(){
  let getCleanCompletedTasksBtn = document.querySelector("#remover-finalizados");

  getCleanCompletedTasksBtn.addEventListener("click", function(){
    let getAllCompletedTasks = document.querySelectorAll(".completed");

    for(i in getAllCompletedTasks){

      if(getAllCompletedTasks[i] != undefined) {
        getAllCompletedTasks[i].parentElement.removeChild(getAllCompletedTasks[i]); 
      }

    }
  });
}
