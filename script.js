function initialLoad () {
    //localStorage.clear();
    //createTask();
    //saveList();
      color();
 }
 window.onload = initialLoad;

//Elementos
let adicionandobotao = document.querySelector("#criar-tarefa");

//Eventos
adicionandobotao.addEventListener('click',digitandoeAdicionandonaLista);

// Função
function digitandoeAdicionandonaLista() {
    let textoTarefa = document.getElementById('texto-tarefa');
    let adicionandoTarefa = document.querySelector("#lista-tarefas");
    let lista = document.createElement('li');
    lista.innerHTML = textoTarefa.value;           //pega o valor do input
    adicionandoTarefa.appendChild(lista);   	  //insere o elemento criado  
    textoTarefa.value = null;                    //limpa o input
    color();
};

function color() {
    let corLista = document.getElementsByTagName('li');
    for (let i = 0 ; i < corLista.length ; i += 1){
        corLista[i].addEventListener('click',function(){
            corLista[i].style.backgroundColor = 'rgb(128, 128, 128)';
            for (let x = 0 ; x < corLista.length ; x += 1) {
                if (x != i) {
                    corLista[x].style.backgroundColor = 'transparent';
                }
           }
        });
    }
}

lista.className = 'itemList'
lista.addEventListener('dblclick', function() {
    switch (lista.className) {
        case 'completed':
            lista.className= 'itemList';
        break;
        case 'itemList':
            lista.className= 'completed'; 
        break       
    }
})
     
   


