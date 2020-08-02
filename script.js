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
    
    if(line){
    line.addEventListener('click', changeBackgroundColor);
    }
   }
   
   //req 7 - mudar cor de fundo 
  function changeBackgroundColor(event){

    event.target.classList.add('background-gray');

  }

  //req 9
  
  function completedItem(event){
 // elemento double click assume a classe completed
  event.target.classList.add('completed');
  }
// elemento double click retira a classe completed
  function uncompletedItem(event){
  event.target.classList.remove('completed');
  }
  // chama a função para adicionar ou retirar classe completed
  function item(event){
      
      if(document.getElementsByClassName('completed').length !==0){
        uncompletedItem(event);
      }else{
        completedItem(event); 
      }
  }

  document.getElementById('lista-tarefas').addEventListener('dblclick', item);
  

  //req 10 botao apaga td 
  function clearAll(event){ 
   
    let children = document.getElementById('lista-tarefas').children;

        while(children.length !== 0){
            
            document.getElementById('lista-tarefas').removeChild(children[0]);
            
        }  
    
  }

  //req apagar finalizados
  function clearDone(event){
   //se elemento tem a classe completed -> apagar
   let done = document.getElementsByClassName('completed');
   while(done.length !== 0){
  
    done.remove('li');
   }
  }
   document.getElementById('lista-tarefas').addEventListener('click', clearDone);
    document.getElementById('apaga-tudo').addEventListener('click', clearAll);
    document.getElementById('criar-tarefa').addEventListener('click', createToDo);
}