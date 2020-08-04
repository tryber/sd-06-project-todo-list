const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const itemlistaTarefas = document.getElementById('lista-tarefas');

function listarItens() {
    const itemLista = document.createElement('li');
    itemLista.innerHTML = textoTarefa.value;
    itemlistaTarefas.appendChild(itemLista);
    itemLista.className = 'tarefa';
    textoTarefa.value = '';
}
criarTarefa.addEventListener('click', listarItens);

itemlistaTarefas.addEventListener('click', function (event) {
    const removeClass = document.querySelector('.selected');
    if (removeClass !== null) {
      removeClass.classList.remove('selected');
    }
    const selectClass = event.target;
    selectClass.className += ' selected';
  });

  itemlistaTarefas.addEventListener('dblclick', function (event) {
    const completedClass = event.target;
    completedClass.classList.toggle('completed');
  });

  const clearAllButton = document.getElementById('apaga-tudo');
clearAllButton.addEventListener('click', function () {
  while (itemlistaTarefas.firstChild) {
    itemlistaTarefas.removeChild(itemlistaTarefas.firstChild);
  }
});