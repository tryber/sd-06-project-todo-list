window.onload = function () {
    addNovoElementoNaLista();//carregando a página "liga" a função ==> addNovoElementoNaLista;
}
//Inicia operações com as tarefas adicionadas==>
function ligaOthersFunctions () {
    mudaCorDeFundo ();
    duploCliqueRisca ();
    apagaTudo ();
}
//Adiciona Tarefas==>
function addNovoElementoNaLista(){
    document.getElementById("criar-tarefa").addEventListener("click",function(){
        let listaDeatividadesOl = document.getElementById("lista-tarefas");//Variável lista
        let textoDigitado = document.getElementById("texto-tarefa");//Variável texto
        let novaAtividade = document.createElement("li");//Variável nova atividade, que será add a lista
        novaAtividade.textContent = textoDigitado.value;//Colocando texto na var nova atividade
        listaDeatividadesOl.appendChild(novaAtividade);//Add var nova atividade da lista na ==> lista
        textoDigitado.value = "";//Apagando texto digitado na caixa de input, após criar atividade na lista baseada no texto
        textoDigitado.focus();//Retornando o cursor para dentro da caixa input
        ligaOthersFunctions ();
    });
}
//Controle da Cor de fundo -----------------------------------------------
function mudaCorDeFundo () {
    let elementosDaLista = document.getElementsByTagName('li');
    for(let index = 0; index < elementosDaLista.length; index += 1) {
    elementosDaLista[index].addEventListener('click', function() {
        removeCorDeFundo ();
        elementosDaLista[index].className = 'foiclicado';
    }) 
    }
}
function removeCorDeFundo () {
    let elementosDaLista = document.getElementsByTagName('li');
    for(let index = 0; index < elementosDaLista.length; index += 1){
        elementosDaLista.item(index).classList.remove('foiclicado')
    }
}
//-------------------------------------------------------Controle da Cor de Fundo
//Controle do Risco--------------------------------------------------------------
function duploCliqueRisca () {
    let elementosDaLista = document.getElementsByTagName('li');
    for(let index = 0; index < elementosDaLista.length; index += 1) {
        elementosDaLista[index].addEventListener('dblclick', function() {
            removeDuploCliqueRisca ();
            elementosDaLista[index].className = 'duploClique';
        })
    }
}
function removeDuploCliqueRisca () {
    let elementosDaLista = document.getElementsByTagName('li');
    for(let index = 0; index < elementosDaLista.length; index += 1){
        elementosDaLista.item(index).classList.remove('duploClique')
    }
}
//----------------------------------------------------------------Controle do Risco
//Apaga Tudo------------------------------------------------------------
function apagaTudo () {
    let botao = document.getElementById('apaga-tudo');
    botao.addEventListener('click', function() {
        let elementosDaLista = document.getElementsByTagName('li');
        for(let index = 0; index < elementosDaLista.length; index += 1) {
        elementosDaLista[index].remove('li')
    }
    })
}
//---------------------------------------------------------------------Apaga Tudo