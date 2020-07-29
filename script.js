function riscarItem() {
  if (this.classList.contains('completed')) {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

function alterarCor() {
  const tagsLi = document.querySelectorAll('.color_gray');
  for (let index = 0; index < tagsLi.length; index += 1) {
    const tagLi = tagsLi[index];
    tagLi.classList.remove('color_gray');
  }
  const tagSelecionada = this;
  tagSelecionada.classList.add('color_gray');
}

function listarItens() {
  const textoTarefa = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  const itemLista = document.createElement('li');
  listaTarefas.appendChild(itemLista);
  itemLista.addEventListener('dblclick', riscarItem);
  itemLista.addEventListener('click', alterarCor);
  itemLista.innerHTML = textoTarefa.value;
  textoTarefa.value = '';
}

function apagaLista() {
  const lista = document.querySelectorAll('li');
  for (let index = 0; index < lista.length; index += 1) {
    document.getElementById('lista-tarefas').removeChild(lista[index]);
  }
}

function removerFinalizados() {
  const lista = document.querySelectorAll('li');
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].classList.contains('completed')) {
      document.getElementById('lista-tarefas').removeChild(lista[index]);
    }
  }
}

window.onload = function () {
  const criarTarefa = document.querySelector('#criar-tarefa');
  criarTarefa.addEventListener('click', listarItens);

  const apagaTudo = document.querySelector('#apaga-tudo');
  apagaTudo.addEventListener('click', apagaLista);

  const removerItensFinalizados = document.querySelector('#remover-finalizados');
  removerItensFinalizados.addEventListener('click', removerFinalizados);
};
