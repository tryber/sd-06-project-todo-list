//ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
//criar lista em javascript , adicionar os itens da lista em um array


const getTextInput = document.getElementById("texto-tarefa");
const getOlContainer = document.querySelector(".task-list-container");
const value = "";

addTask();
cleanTasks();
cleanDoneTasks();

//Cria o item da lista  // Esta função é chamada quando o evento de click no botão de adicionar ocorre
function createLi(){
  let createLi = document.createElement("li");
  let getOl = document.querySelector(".lista-tarefas");

  createLi.classList.add("list-item");
  createLi.innerHTML = getTextInput.value;

  //Por aqui eu pego o clique e dbclique do botão no li e adiciono a class 'selected' e 'done', caso o elemento já a tenha eu removo xd
  createLi.addEventListener("click", function(){ 
    if(createLi.classList.contains("selected")){

      createLi.classList.remove("selected");

    }else{

      createLi.classList.add("selected");

    }
  });

  createLi.addEventListener("dblclick", function(){ 
    if(createLi.classList.contains("selected","done")){

      createLi.classList.contains("selected");
      createLi.classList.remove("selected");
      createLi.classList.remove("done");

    }else{

      createLi.classList.add("done");

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

//Remove finalizados
function cleanDoneTasks(){
  let getCleanDoneTasksBtn = document.querySelector("#remover-selecionado");
  

    getCleanDoneTasksBtn.addEventListener("click", function(){
      let getAllDoneTasks = document.querySelectorAll(".done");

      for(i in getAllDoneTasks){

        if(getAllDoneTasks[i] != undefined){
          getAllDoneTasks[i].parentElement.removeChild(getAllDoneTasks[i]); 
        }
      }
    });
  }
