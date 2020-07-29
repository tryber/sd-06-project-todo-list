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
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
    }
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

const apagaDbClick = document.getElementById('remover-finalizados');
apagaDbClick.addEventListener('click', function () {
  const removeDbClick = document.querySelectorAll('li');
  for (let i = 0; i < removeDbClick.length; i += 1) {
    if (removeDbClick[i].classList.contains('completed')) {
      listaTarefas.removeChild(removeDbClick[i]);
    }
  }
});

const removeSelecionado = document.getElementById('remover-selecionado');
removeSelecionado.addEventListener('click', function () {
  const selecionado = document.querySelectorAll('li');
  for (let i = 0; i < selecionado.length; i += 1) {
    if (selecionado[i].classList.contains('itemSelecionado')) {
      listaTarefas.removeChild(selecionado[i]);
    }
  }
});

const moverParaCima = document.getElementById('mover-cima');
moverParaCima.addEventListener('click', function () {
  const paraCima = document.querySelectorAll('li');
  for (let i = 0; i < paraCima.length; i += 1) {
    if (paraCima[i].classList.contains('itemSelecionado') && (i !== 0)) {
      paraCima[i].parentNode.insertBefore(paraCima[i], paraCima[i - 1]);
    }
  }
});

const moverParaBaixo = document.getElementById('mover-baixo');
moverParaBaixo.addEventListener('click', function () {
  const paraBaixo = document.querySelectorAll('li');
  for (let i = 0; i < paraBaixo.length; i += 1) {
    if (paraBaixo[i].classList.contains('itemSelecionado') && (i !== paraBaixo.length - 1)) {
      paraBaixo[i].parentNode.insertBefore(paraBaixo[i + 1], paraBaixo[i]);
    }
  }
});
