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
  let elementoSelecionadoAnteriormente = document.querySelector('.selected');
  if (elementoSelecionadoAnteriormente) {
    elementoSelecionadoAnteriormente.classList.remove('selected');
  }
  let elementoSelecionado = event.target;
  elementoSelecionado.classList.add('selected');
});

tarefaSelecionada.addEventListener('dblclick', function () {
  let elementoSelecionado = event.target;
  elementoSelecionado.classList.toggle('completed');
})

botaoApagar = document.querySelector('#apaga-tudo')

botaoApagar.addEventListener('click', function () {
  tarefaSelecionada.innerHTML = '';
})

let botaoRemoverFinalizados = document.querySelector('#remover-finalizados');

botaoRemoverFinalizados.addEventListener('click', function () {
  let elementosFinalizados = document.querySelectorAll('.completed');
   for (let index = 0; index < elementosFinalizados.length; index += 1) {
     elementosFinalizados[index].remove();
  }
})

let botaoRemoverSelecionado = document.querySelector('#remover-selecionado');

botaoRemoverSelecionado.addEventListener('click', function () {
  let elementoSelecionado = document.querySelector('.selected');
  elementoSelecionado.remove();
})
