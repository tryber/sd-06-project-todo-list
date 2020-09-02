function criarLista() {
    const tarefas = document.querySelector('.tarefas');
    const listaItem = document.createElement('ol');
    listaItem.id = 'lista-tarefas';
    tarefas.appendChild(listaItem);
}
criarLista();
const btnAdd = document.querySelector('#criar-tarefa');
btnAdd.addEventListener('click', function(){
    const lista = document.querySelector('#lista-tarefas');
    const textoItem = document.querySelector('#texto-tarefa');
    const item = document.createElement('li');
    item.innerHTML = textoItem.value;
    textoItem.value = '';
    lista.appendChild(item);
});

// Mudar cor de somente 1 elemento selecionado
const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', function (event) {
  const elementoSelecionado = document.querySelector('.selected');
  const selected = event.target;
  if (elementoSelecionado) {
    elementoSelecionado.classList.remove('selected');
    selected.classList.add('selected');
  } else {
    selected.classList.add('selected');
  }
});

// Riscar as tarefas completas
lista.addEventListener('dblclick', function () {
  const item = event.target;
  item.classList.toggle('completed');
});

// Apagar todos os ítens da lista
const btnApagaTudo = document.querySelector('#apaga-tudo');
btnApagaTudo.addEventListener('click', function () {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
});

// Remover os ítens finalizados
const btnApagaFinalizados = document.querySelector('#remover-finalizados');
btnApagaFinalizados.addEventListener('click', function () {
  const itens = document.querySelectorAll('.completed');
  if (itens) {
    for (let index = 0; index < itens.length; index += 1) {
      itens[index].remove();
    }
  }
});