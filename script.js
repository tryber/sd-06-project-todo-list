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
};



//function muda BG


//function risca li

//function add ao item clicado a classe completed

//function mude o text-decoration para line-through

//function button apaga tudo , zera os li

//function para apagar os li riscados


window.onload =function(){
    criarElementLi()

}