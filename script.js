function addNovoElementoNaLista(){
    document.getElementById("criar-tarefa").addEventListener("click",function(){
        let listaDeatividadesOl = document.getElementById("lista-tarefas");//Variável lista
        let textoDigitado = document.getElementById("texto-tarefa");//Variável texto
        let novaAtividade = document.createElement("li");//Variável nova atividade, que será add a lista
        novaAtividade.textContent = textoDigitado.value;//Colocando texto na var nova atividade
        listaDeatividadesOl.appendChild(novaAtividade);//Add var nova atividade da lista na ==> lista
        textoDigitado.value = "";//Apagando texto digitado na caixa de input, após criar atividade na lista baseada no texto
        textoDigitado.focus();//Retornando o cursor para dentro da caixa input
        mudaCorDeFundo();
        duploCliqueRisca ()
    });
}
function mudaCorDeFundo () {
    let elementosDaLista = document.getElementsByTagName('li');
    for(let index = 0; index < elementosDaLista.length; index += 1) {
        elementosDaLista[index].addEventListener('click', function() {
            if (elementosDaLista.item(index).className === 'foiclicado') {
                elementosDaLista[index].classList.remove('foiclicado');
            }
            else {elementosDaLista[index].className = 'foiclicado';}
        }) 
    }
}
function duploCliqueRisca () {
    let elementosDaLista = document.getElementsByTagName('li');
    for(let index = 0; index < elementosDaLista.length; index += 1) {
        elementosDaLista[index].addEventListener('dblclick', function() {
            elementosDaLista[index].className = 'duploClique';
        })
    }
}



window.addEventListener("load",addNovoElementoNaLista());//carregando a página "liga" a função ==> addNovoElementoNaLista;
