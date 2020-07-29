window.onload = function () {
  const botaoCriarTarefa = document.getElementById('criar-tarefa');

  botaoCriarTarefa.addEventListener('click', criarTarefa);

}

function criarTarefa () {
  let textoTarefa = document.getElementById('texto-tarefa').value;
  let tarefa = document.createElement('li');
  let textNode = document.createTextNode(textoTarefa);

  tarefa.appendChild(textNode);
  document.getElementById('lista-tarefas').appendChild(tarefa);
  document.getElementById('texto-tarefa').value = null;
}
