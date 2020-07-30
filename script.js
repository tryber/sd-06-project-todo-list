
window.onload = function () {
   
    //button to input text 
    let taskText = document.querySelector("#texto-tarefa");
    let addBtn = document.querySelector("#criar-tarefa");
    let taskList = document.getElementById("lista-tarefas");
    let clearBtn = document.getElementById('apaga-tudo');
    

    
        //cria o item ordenado,neste caso.
     addBtn.addEventListener('click', function () {
        let liElement = document.createElement('li');
            //recebe o valor do texto que e colocado na caixa de texto
        liElement.innerHTML = taskText.value;
            //mostra o numero da lista, caso seja <ol> e imprime ao final da pagina
            //ele pega o elemento li criado, concatena com o valor do box de texto, mostra no local aonde esta inserido a lista no HTML
        taskList.appendChild(liElement);
            //apaga a caixa de texto apos ter clicado no botao
        taskText.value = '';
      });
    
      
     clearBtn.addEventListener('click', function() {
        taskList.innerHTML = '';
      });

    let selection = document.querySelector('.selected');
      //Change the background color of a selected iten when clicked
     taskList.addEventListener('click', function () {
         if (selection) {
             selection.classList.removechild('.selected');
         }
         let selectedElement = event.target;
         selectedElement.classList.add('.selected');
    });

    taskList.addEventListener('dblclick', function () {
        let selection = event.target;
        selection.classList.toggle('completed');
      })

      let finishedBtn = document.querySelector('#remover-finalizados')
      finishedBtn.addEventListener('click', function () {
          let finishedElement = document.querySelectorAll('.completed');
              for (let i = 0; i < finishedElement.length; i += 1) {
                  finishedElement[i].remove();
              }
      });


}

