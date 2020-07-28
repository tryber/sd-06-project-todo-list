window.onload = function () {
  //Boton Adicionar que cria elemnetos na lista ordenada, e os mostra. Apaga o conteudo da caixa de texto ao adicionar.
  let botaoAdicionar = document.querySelector('#criar-tarefa');
  botaoAdicionar.addEventListener('click', function() {
    textoInput = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = "";
    let listaElemento = document.createElement ('li');
    listaElemento.innerText = textoInput;
    document.querySelector('#lista-tarefas').appendChild(listaElemento);
  });
  //Ao fazer click  num elemento da lista ele coloca fundo cinzas
  let listaColor = document.querySelector('#lista-tarefas');
  listaColor.addEventListener('click', function(event) {
    let itemSelecionadoAntiguio = document.querySelector('.grey');
    let itemSelecionado = event.target;
    if (itemSelecionadoAntiguio) {
      itemSelecionadoAntiguio.classList.remove('grey');
      itemSelecionado.classList.add('grey');
    }
    else {
      itemSelecionado.classList.add('grey');
    };
  });
  //Botao para apagar tudo o conteudo da lista
  let botaoApagar = document.querySelector('#apaga-tudo');
  botaoApagar.addEventListener('click', function() {
    let lista = document.querySelector('#lista-tarefas');
    let iten = document.querySelectorAll('li');
    for (let i = 0; i < iten.length; i += 1) {
      lista.removeChild(lista.children[0]);
    };
  });
};