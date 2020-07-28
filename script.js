function listarItens() {
  const textoTarefa = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  
  var itemLista = document.createElement('li');
  listaTarefas.appendChild(itemLista);
  itemLista.innerHTML = textoTarefa.value;
  textoTarefa.value = '';
}

window.onload = function () {
  const criarTarefa = document.querySelector('#criar-tarefa');
  criarTarefa.addEventListener('click', listarItens);
};
