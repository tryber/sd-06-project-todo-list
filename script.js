window.onload = function () {
  window.onload = cargarTarefas();
  
  //  Boton Adicionar que cria elemnetos na lista ordenada, e os mostra.
  //  Apaga o conteudo da caixa de texto ao adicionar.
  const botaoAdicionar = document.querySelector('#criar-tarefa');
  botaoAdicionar.addEventListener('click', function () {
    const textoInput = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = '';
    const listaElemento = document.createElement('li');
    listaElemento.innerText = textoInput;
    document.querySelector('#lista-tarefas').appendChild(listaElemento);
  });
  
  //  Ao fazer click num elemento da lista ele coloca fundo cinzas, da para selecionar so um
  const listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('click', function (event) {
    const itemSelecionadoAntiguio = document.querySelector('.grey');
    const itemSelecionado = event.target;
    if (itemSelecionadoAntiguio) {
      itemSelecionadoAntiguio.classList.remove('grey');
      itemSelecionado.classList.add('grey');
    } 
    itemSelecionado.classList.add('grey');
  });
  
  //  Ao fazer doble click va se riscar elemento, vai se desfazer fazendo novamente dobleclick
  listaTarefas.addEventListener('dblclick', function (event) {
    const itemCompleto = event.target;
    if (itemCompleto.classList[0] === 'completed') {
      itemCompleto.classList.remove('completed');
    } else {
      itemCompleto.classList.add('completed');
    }
  });
  
  //  Botao para apagar tudo o conteudo da lista
  const botaoApagar = document.querySelector('#apaga-tudo');
  botaoApagar.addEventListener('click', function () {
    const lista = document.querySelector('#lista-tarefas');
    const iten = document.querySelectorAll('li');
    for (let i = 0; i < iten.length; i += 1) {
      lista.removeChild(lista.children[0]);
    }
  });
  
  //  Botao para apagar os conteudos riscados
  const botaoApagarCompletos = document.querySelector('#remover-finalizados');
  botaoApagarCompletos.addEventListener('click', function () {
    const tarefa = document.querySelectorAll('li');
    const listaTarefas = document.querySelector('#lista-tarefas');
    for (let i = 0; i < tarefa.length; i += 1) {
      if (tarefa[i].className === 'completed' || tarefa[i].className === 'grey completed') {
        listaTarefas.removeChild(tarefa[i]);
      }
    }
  });
  
  //  Botao remover item selecionado.
  const botaoApagarSelecionado = document.querySelector('#remover-selecionado');
  botaoApagarSelecionado.addEventListener('click', function () {
    const grey = document.querySelector('.grey');
    const listaTarefas = document.querySelector('#lista-tarefas');
    listaTarefas.removeChild(grey);
  });

  //   Botao salvar
  const botaoSalvar = document.querySelector('#salvar-tarefas');
  botaoSalvar.addEventListener('click', function () {
    localStorage.clear();
    const listaTarefas = document.querySelector('#lista-tarefas').innerHTML;
    localStorage.setItem('Lista de todas as tarefas', listaTarefas);
  });
  
  //  Funcion cargar lista salvada
  function cargarTarefas () {
    const listaTarefas = document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('Lista de todas as tarefas');
  };

  //  Funcoe botaos mover cima e baixo.
  //  Conseigui fazer ao ver num companheiro usar a funcoe 'insertBefore'
  const botaoCima = document.querySelector('#mover-cima');
  const botaoAbaixo = document.querySelector('#mover-baixo');

  botaoCima.addEventListener('click', function (event) {
    const listaTarefas = document.querySelector('#lista-tarefas');
    const itemSelecionado = document.querySelector('.grey');
    if (document.querySelectorAll('.grey')[0] !== undefined) {
      if (itemSelecionado.previousSibling) {
        if ((itemSelecionado) && (itemSelecionado.previousSibling)) {
          listaTarefas.insertBefore(itemSelecionado, itemSelecionado.previousSibling);
        }
      }
    }
  });

  botaoAbaixo.addEventListener('click', function (event) {
    const listaTarefas = document.querySelector('#lista-tarefas');
    const itemSelecionado = document.querySelector('.grey');
    if (document.querySelectorAll('.grey')[0] !== undefined) {
      if (itemSelecionado.nextSibling) {
        if ((itemSelecionado) && (itemSelecionado.nextSibling)) {
          listaTarefas.insertBefore(itemSelecionado, itemSelecionado.nextSibling.nextSibling);
        }
      }
    }
  });
};


