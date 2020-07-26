window.onload = function () {
  function createListItem() {
    const item = document.createElement('li');
    item.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(item);
    document.getElementById('texto-tarefa').value = '';
  }
  
  function selectListItem(event) {
    for (const item of document.getElementsByTagName('li')) {
      if (item.className !== '') {
        item.className = '';
      }
    }
    event.target.className = 'selected';
  }

  function doubleSelectListItem(event) {
    if (event.target.className === '') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    }
  }

  function clearList() {
    let clone = [];
    for (const item of document.getElementsByTagName('li')) {
      clone.push(item);
    }
    for (let item of clone) {
      document.getElementById('lista-tarefas').removeChild(item);
    }
  }

  function clearCompleted() {
    let clone = [];
    for (const item of document.querySelectorAll('.completed')) {
      clone.push(item);
    }
    for (let item of clone) {
      document.getElementById('lista-tarefas').removeChild(item);
    }
  }

  function clearSelected() {
    document.getElementById('lista-tarefas').removeChild(document.querySelector('.selected'));
  }
  document.getElementById('criar-tarefa').addEventListener('click', createListItem);
  document.getElementById('lista-tarefas').addEventListener('click', selectListItem);
  document.getElementById('lista-tarefas').addEventListener('dblclick', doubleSelectListItem);
  document.getElementById('apaga-tudo').addEventListener('click', clearList);
  document.getElementById('remover-finalizados').addEventListener('click', clearCompleted);
  document.getElementById('remover-selecionado').addEventListener('click', clearSelected);
}
