let botaoAdicionar = document.querySelector('#criar-tarefa');
botaoAdicionar.addEventListener('click', function () {
  let tarefaAdicionada = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
  li.innerHTML = tarefaAdicionada.value;
  document.getElementById('lista-tarefas').appendChild(li);
  tarefaAdicionada.value = '';
});
let tarefaSelecionada = document.getElementById('lista-tarefas');
tarefaSelecionada.addEventListener('click', function() {
  let elementoSelecionado = event.target;
  elementoSelecionado.classList.add('selected');
});