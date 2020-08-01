window.onload = function () {
//  Criando as variaveis do html
  const criarTarefa = document.getElementById('criar-tarefa');
  const textoTarefa = document.getElementById('texto-tarefa');
  const itemlistaTarefas = document.getElementById('lista-tarefas');
//  Função para quando digitar uma tarefa ela ser adciona a lista clicando no botão indicado
  function listarItens() {
    const itemLista = document.createElement('li');
    itemLista.innerHTML = textoTarefa.value;
    itemlistaTarefas.appendChild(itemLista);
    itemLista.className = 'tarefa';
    itemLista.addEventListener('click');
    textoTarefa.value = '';
  }

  criarTarefa.addEventListener('click', listarItens);

//  Ao clicar no item da lista, altere a cor para cinza e quando clicar em outro substituir
  let ultimoSelecionado = itemlistaTarefas;
  itemlistaTarefas.addEventListener('click', function (event) { 
    const selecionado1 = event.target;
    if (selecionado1.id !== 'lista-tarefas') {
      ultimoSelecionado.style.backgroundColor = '';
      selecionado1.style.backgroundColor = 'rgb(128,128,128)';
      ultimoSelecionado = selecionado1;
    }
  });
};
