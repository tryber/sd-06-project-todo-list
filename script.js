const criarTarefa = document.querySelector('#criar-tarefa');

criarTarefa.addEventListener('click', function () {
  let novaTarefa = document.querySelector('#texto-tarefa').value;
  const ondeCriar = document.querySelector('#lista-tarefas');
  const tarefaCriada = document.createElement('li');
    
  tarefaCriada.className = 'tarefa';
  tarefaCriada.innerText = novaTarefa;
  ondeCriar.appendChild(tarefaCriada);
  document.querySelector('#texto-tarefa').value = '';
});
