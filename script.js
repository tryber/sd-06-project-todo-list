window.onload = function(){

function createToDo(event){
    
    //colocar o texto informado na variavel
    let inputText = document.getElementById('texto-tarefa').value; //guardei input
   
    //criar elemento li sendo filho do elemento id="lista-tarefas"
    let line = document.createElement('li');

    //localizar onde criar li elementoPai (no caso lista-tarefas).appendchild('elemento html que eu criei')
    line.innerText = inputText;

    //adicionar texto de inputText no elemento li criado
    document.getElementById('lista-tarefas').appendChild(line);

    // apagar texto quando ele passa pra li
    document.getElementById('texto-tarefa').value='';    
    console.log(line);
    if(line){
    line.addEventListener('click', changeBackgroundColor);
    }
   }
   
   //req 7 - mudar cor de fundo - não funciona
  function changeBackgroundColor(event){

      event.target.style.changeBackgroundColor ="rgb(128, 128, 128)";


  }

  //req 9
  function completedItem(event){
 // elemento double click assume a classe completed
  event.target.classList.add('completed');
  }
  document.getElementById('lista-tarefas').addEventListener('dblclick', completedItem);

  //req 10 botao apaga td 
  function clearAll(event){ 
   
    let children = document.getElementById('lista-tarefas').children

        while(children.length !== 0){
            
            document.getElementById('lista-tarefas').removeChild(children[0]);
            
        }  
    
  }

  //req apagar finalizados
  function clearDone(event){
   //se elemento tem a classe completed -> apagar 
   let doneItem = document.getElementsByClassName('completed');
    if(doneItem){
    doneItem.remove();
    }
  }
   document.getElementById('remover-finalizados').addEventListener('click', clearDone);
    document.getElementById('apaga-tudo').addEventListener('click', clearAll);
    document.getElementById('criar-tarefa').addEventListener('click', createToDo);
}