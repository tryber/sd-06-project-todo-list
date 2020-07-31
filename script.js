window.onload = function () {
  // Criar a lista
  function criaLista() {
    const listaItem = document.createElement('ol');
    listaItem.id = 'lista-tarefas';
    document.body.appendChild(listaItem);
  }
  criaLista();


  // Adicionar tarefa na lista
  function addTarefa() {
    const textItem = document.querySelector('#texto-tarefa');
    const item = document.createElement('li');
    item.innerHTML = textItem.value;
    textItem.value = '';
    lista.appendChild(item);
  }
  const btnAdd = document.querySelector('#criar-tarefa');
  btnAdd.addEventListener('click', addTarefa);


  // Mudar cor de somente 1 elemento selecionado
  function selectingTask(event) {
    const oldSelected = document.querySelector('.selected');
    const selected = event.target;
    if (oldSelected) {
      oldSelected.classList.remove('selected');
      selected.classList.add('selected');
    } else {
      selected.classList.add('selected');
    }
  }
  const lista = document.querySelector('#lista-tarefas');
  lista.addEventListener('click', selectingTask);

  // Riscar as tarefas completas
  lista.addEventListener('dblclick', function () {
    const item = event.target;
    item.classList.toggle('completed');
  })


  // Apagar todos os ítens da lista
  function apagaTudo() {
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
  }
  const btnApagaTudo = document.querySelector('#apaga-tudo');
  btnApagaTudo.addEventListener('click', apagaTudo);


  // Remover os ítens finalizados
  function removerFinalizados() {
    const itens = document.querySelectorAll('.completed');
    if (itens) {
      for (let index = 0; index < itens.length; index += 1) {
        lista.removeChild(itens[index]);
      }
    }
  }
  const btnApagaFinalizados = document.querySelector('#remover-finalizados');
  btnApagaFinalizados.addEventListener('click', removerFinalizados);

  /********************************************** */

  // Salvar os dados no local storage
  function salvarDados() {
    window.localStorage.setItem('minhaLista', lista.innerHTML);
  }
  const btnSalvar = document.querySelector('#salvar-tarefas');
  btnSalvar.addEventListener('click', salvarDados);

  // Recuperar dados do local Stage
  function listaFoiSalva() {
    const listaSalva = window.localStorage.getItem('minhaLista');
    lista.innerHTML = listaSalva;
  }
  listaFoiSalva();


  // Remover item selecionado
  function removerSelecionado() {
    const itemSelecionado = document.querySelector('.selected');
    if (itemSelecionado) {
      itemSelecionado.remove();
    }
  }
  const btnSelecao = document.querySelector('#remover-selecionado');
  btnSelecao.addEventListener('click', removerSelecionado);


  // Mover elementos na lista  
  function moverAcima() {
    const lista = document.querySelector('#lista-tarefas');
    const selecao = document.querySelector('.selected');
      if (selecao.previousSibling) {
        lista.insertBefore(selecao, selecao.previousSibling);
      }
  }

  function moverAbaixo() {
    const lista = document.querySelector('#lista-tarefas');
    const selecao = document.querySelector('.selected');
      if (selecao.nextSibling) {
        lista.insertBefore(selecao, selecao.nextSibling.nextSibling);
      }
  }
  const btnAbaixo = document.querySelector('#mover-baixo');
  btnAbaixo.addEventListener('click', moverAbaixo);
  
  const btnMoveCima = document.querySelector('#mover-cima');
  btnMoveCima.addEventListener('click', moverAcima);
}

