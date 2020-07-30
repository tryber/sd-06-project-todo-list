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
   //6 - Os itens da lista de tarefas devem ser ordenados por ordem de criação.
   //As seguintes verificações serão feitas:
   //Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante. 

   //7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
  //As seguintes verificações serão feitas:
  //Será verificado que, ao se carregar a página, os itens da lista não tem o estilo CSS background-color: rgb(128, 128, 128)
  //Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS background-color: rgb(128, 128, 128)
  function changeBackgroundColor(event){
   document.getElementsByTagName('li').style.backgroundColor = "green"
  }

   //document.getElementsByTagName('li').appendChild.addEventListener('click', changeBackgroundColor);


    document.getElementById('criar-tarefa').addEventListener('click', createToDo);
}