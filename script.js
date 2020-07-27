const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');

criarTarefa.addEventListener('click', function () {
  const li = document.createElement('li');
  li.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(li);

  li.addEventListener('click', function () {
    const liSelecionado = document.getElementsByClassName('itemSelecionado');
    if (liSelecionado.length > 0) {
      liSelecionado[0].classList.remove('itemSelecionado');
    }
    li.classList.add('itemSelecionado');
  });

  li.addEventListener('dblclick', function () {
    li.classList.add('completed');
  });
  textoTarefa.value = '';
});

const apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', function () {
  const removerTudo = document.querySelectorAll('li');
  for (let i = 0; i < removerTudo.length; i += 1) {
    listaTarefas.removeChild(removerTudo[i]);
  }
});
