function createListItem () {
  let item_text = document.getElementById('texto-tarefa').value;
  let item = document.createElement('li');
  item.innerText = item_text;
  document.getElementById('lista-tarefas').appendChild(item)
}


