window.onload = function(){
const criarTarefa = document.querySelector("#criar-tarefa");
const listaTarefa = document.querySelector("#lista-tarefas");
const textoTarefa = document.querySelector("#texto-tarefa");
const removerSelecionado = document.querySelector("#remover-selecionado");
const moverCima = document.querySelector("#mover-cima");
const moverBaixo = document.querySelector("#mover-baixo");
const apagaTudo = document.querySelector("#apaga-tudo");
const removerFinalizados = document.querySelector("#remover-finalizados");
const salvarTarefas = document.querySelector("#salvar-tarefas");

criarTarefa.addEventListener('click', criarElementLi);
function criarElementLi(){
  let li = document.createElement('li');
  li.innerText = textoTarefa.value;
  listaTarefa.appendChild(li);
  li.className = 'tarefa';         
};

const classeSelecionada = document.getElementsByClassName('selected');
console.log(classeSelecionada.length);

listaTarefa.addEventListener('click' , function(event){
  if (event.target.classList.contains('tarefa') && classeSelecionada.length === 0){
    event.target.classList.add('classeSelecionada');
  }else{
    event.target.classList.contains('tarefa') && classeSelecionada.length === 1
  }
    classeSelecionada[0].className = 'tarefa';
    event.target.classList.add('classeSelecionada');
});

listaTarefa.addEventListener('dbclick', function(event){
  if (event.target.classList.contains('tarefa')){
    event.target.className = 'completed';
  }else{
    event.target.className = 'tarefa';
  }
});

apagaTudo.addEventListener('click', function(){
  numberOfTasks.innerHTML = '';
});

removerFinalizados.addEventListener('click', function(){

});
}