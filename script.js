//Elementos
let adicionandobotao = document.querySelector("#criar-tarefa");

//Eventos
adicionandobotao.addEventListener('click',digitandoeAdicionandonaLista );

// Função
function digitandoeAdicionandonaLista() {
    let textoTarefa = document.getElementById('texto-tarefa');
    let adicionandoTarefa = document.querySelector("#lista-tarefas");
    let lista = document.createElement('li');
    lista.innerHTML = textoTarefa.value;           //pega o valor do input
    adicionandoTarefa.appendChild(lista);   	  //insere o elemento criado  
    textoTarefa.value = null;                    //limpa o input
};




