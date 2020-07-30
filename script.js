window.onload = function () {
  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  const botaoApagarTudo = document.getElementById('apaga-tudo');
  const botaoRemoveFinalizados = document.getElementById('remover-finalizados');
  let listaDeTarefas = document.getElementsByTagName('li');

  botaoCriarTarefa.addEventListener('click', criarTarefa);
  botaoApagarTudo.addEventListener('click', apagarTudo);
  botaoRemoveFinalizados.addEventListener('click', removeFinalizados);

}

function criarTarefa () {
  let textoTarefa = document.getElementById('texto-tarefa').value;
  let tarefa = document.createElement('li');
  let textoNode = document.createTextNode(textoTarefa);
  
  tarefa.appendChild(textoNode);
  document.getElementById('lista-tarefas').appendChild(tarefa);
  document.getElementById('texto-tarefa').value = null;

  listaDeTarefas = document.getElementsByTagName('li');
  
  tarefa.addEventListener('click', selecionarTarefa ())
}

function selecionarTarefa (event) {
  console.log(event.target)
}

function apagarTudo () {
  let lista = document.getElementById('lista-tarefas');
  let itensParaApagar = document.getElementsByTagName('li');

  while (itensParaApagar.length > 0) {
    lista.removeChild(itensParaApagar[0]);
  }

}

function removeFinalizados () {
  
}
