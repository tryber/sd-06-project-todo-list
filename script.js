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


    criarTarefa.addEventListener('click', function(){
        let li = document.createElement('li');
        listaTarefa.appendChild(li);
        li = textoTarefa.innerText;          
    });
}