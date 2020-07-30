window.onload = function(){

function createToDo(event){
    
    //colocar o texto informado na variavel
    let inputText = document.getElementById('texto-tarefa').value; //guardei input
    //criar elemento li sendo filho do elemento id="lista-tarefas"
    console.log(inputText);

    let line = document.createElement('li');
    //localizar onde criar li elementoPai (no caso lista-tarefas).appendchild('elemento html que eu criei')
    console.log(line);
    line.innerText = inputText;
    //adicionar texto de inputText no elemento li criado
    document.getElementById('lista-tarefas').appendChild(line);

    // apagar texto quando ele passa pra li
    document.getElementById('texto-tarefa').value='';    
    
   }
   
   //req 7 - mudar cor de fundo - não funciona
  //function changeBackgroundColor(event){
   //document.getElementsByTagName('li').style.backgroundColor = "rgb(128, 128, 128)";
  //}
  //document.getElementsByTagName('li').addEventListener('click', changeBackgroundColor);
  //req 9
  function completedItem(event){
// elemento doubleclick assume a classe completed
  event.target.classList.add('completed');
  }
  document.getElementById('lista-tarefas').addEventListener('dblclick', completedItem);

  //req 10 botao apaga td -não funciona
  function clearAll(event){ 
    //teste se lista foi criada, .children
    //for pra passr em todo mundo
    let children = document.getElementById('lista-tarefas').children

           while(children.length !== 0){
            
            document.getElementById('lista-tarefas').removeChild(children[0]);
            
        }  
    
  }
   
    document.getElementById('apaga-tudo').addEventListener('click', clearAll);
    document.getElementById('criar-tarefa').addEventListener('click', createToDo);
}