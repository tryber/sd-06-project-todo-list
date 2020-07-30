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
    
   }
 
    document.getElementById('criar-tarefa').addEventListener('click', createToDo);
}