window.onload = function () {
  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  let listaDeTarefas = document.getElementsByTagName('li');

  botaoCriarTarefa.addEventListener('click', criarTarefa);

  // adiciona fundo cinza ao clicar na tarefa

  


}

function criarTarefa () {
  let textoTarefa = document.getElementById('texto-tarefa').value;
  let tarefa = document.createElement('li');
  let textoNode = document.createTextNode(textoTarefa);
  
  tarefa.appendChild(textoNode);
  document.getElementById('lista-tarefas').appendChild(tarefa);
  document.getElementById('texto-tarefa').value = null;
  listaDeTarefas = document.getElementsByTagName('li');
  
  tarefa.addEventListener('click', function () { 
    console.log(listaDeTarefas.className);
    tarefa.classList.add('selecionada');
  })
}
