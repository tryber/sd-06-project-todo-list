window.onload = function () {
  function createListItem () {
    let item_text = document.getElementById('texto-tarefa').value;
    let item = document.createElement('li');
    item.innerText = item_text;
    document.getElementById('lista-tarefas').appendChild(item)
  }
  
  
  function selectListItem (event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }

  document.getElementById('criar-tarefa').addEventListener('click', createListItem);

  document.getElementById('lista-tarefas').addEventListener('click', selectListItem)

}
