const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
function listarItens() {
  const itemLista = document.createElement('li');
  itemLista.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(itemLista);
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', listarItens);
