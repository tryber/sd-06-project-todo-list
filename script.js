window.onload = function (){
  let buttonCriarTarefa = document.querySelector('#criar-tarefa');
  let textoTarefa = document.querySelector('#texto-tarefa');
  let listaTarefas = document.querySelector('#lista-tarefas');

  buttonCriarTarefa.addEventListener('click', function(){
    let elementList = document.createElement('li');
    elementList.innerHTML = textoTarefa.value;
    //console.log(elementList);
    listaTarefas.appendChild(elementList);
    textoTarefa.value = "";
  });


  
}