window.onload = function () {
  function createListItem () {
    const item = document.createElement('li');
    item.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(item);
    document.getElementById('texto-tarefa').value = '';
  }
  
  function selectListItem (event) {
    for (let item of document.getElementsByTagName('li')) {
      if (item.style.backgroundColor !== '') {
        item.style.backgroundColor = '';
      }
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }

  function doubleSelectListItem (event) {
    if (event.target.className === '') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    }
  }

  function clearList () {
    clone = [];
    for (let item of document.getElementsByTagName('li')) {
      clone.push(item);
    }
    for (let item of clone) {
      document.getElementById("lista-tarefas").removeChild(item);
    }
  }

  document.getElementById('criar-tarefa').addEventListener('click', createListItem);

  document.getElementById('lista-tarefas').addEventListener('click', selectListItem);

  document.getElementById('lista-tarefas').addEventListener('dblclick', doubleSelectListItem);

  document.getElementById('apaga-tudo').addEventListener('click', clearList);

}
