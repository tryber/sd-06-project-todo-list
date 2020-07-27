const enviarTexto = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagaLista = document.querySelector('#apaga-tudo');

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
  // if (listaTarefa.childElementCount > 0) {
  //   listaTarefa.removeChild(listaTarefa.childNodes[0])
  // } --> Apaga o primeiro [0]
});
