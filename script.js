const enviarTexto = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagaLista = document.querySelector('#apaga-tudo');
const apagarSelecionado = document.querySelector('#remover-selecionado');

enviarTexto.addEventListener('click', function (event) {
  event.preventDefault();

  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = textoTarefa.value;
  listaTarefa.appendChild(novaTarefa);

  novaTarefa.addEventListener('click', function () {
    const listaDeItens = document.getElementsByTagName('li');
    for (let indice = 0; indice < listaDeItens.length; indice += 1) {
      if (listaDeItens[indice] !== this) {
        listaDeItens[indice].classList.remove('selected');
      }
    }
    this.classList.toggle('selected');
  });
  novaTarefa.addEventListener('dblclick', function () {
    novaTarefa.classList.toggle('completed');
  });

  textoTarefa.value = '';
});

apagaLista.addEventListener('click', function () {
  listaTarefa.innerHTML = '';
});

apagarSelecionado.addEventListener('click', function () {
  for (let indice = 0; indice < listaTarefa.childElementCount; indice += 1) {
    if (listaTarefa.children[indice].classList.contains('selected')) {
      listaTarefa.removeChild(listaTarefa.childNodes[indice]);
    }
  }
});
